import { Component, Element, Event, h, Listen, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type ShortcutMap = Record<string, string>;

@Component({
  tag: "signal-accessibility-helpers",
  styleUrl: "ui-accessibility-helpers.css",
  shadow: true,
})
export class SignalAccessibilityHelpers {
  @Element() host!: HTMLElement;

  /** Enable :focus-visible styling toggle (`data-focus-visible`). */
  @Prop({ reflect: true }) focusVisible = true;

  /** Keyboard shortcut map: `{ 'cmd+k': 'openCommandPalette' }`. Emits `shortcut` event with the matched key. */
  @Prop() shortcutMap?: ShortcutMap;

  /** Optional aria labels bag (exposed for parity; not mutated in DOM). */
  @Prop() ariaLabels?: Record<string, string>;

  /** Trap focus inside the component subtree while mounted. */
  @Prop({ reflect: true }) trapFocus = false;

  /** Return focus to the previously focused element when unmounted or when trapFocus is disabled. */
  @Prop({ reflect: true }) returnFocus = false;

  @State() lastActive: Element | null = null;

  @Event({ eventName: "shortcut" }) shortcut!: EventEmitter<{ combo: string }>;

  private keydownHandler = (event: KeyboardEvent) => {
    if (!this.shortcutMap) return;
    Object.entries(this.shortcutMap).forEach(([combo, action]) => {
      if (this.matchesShortcut(event, combo)) {
        event.preventDefault();
        this.shortcut.emit({ combo: action ?? combo });
      }
    });
  };

  private focusTrapHandler = (event: KeyboardEvent) => {
    if (!this.trapFocus || event.key !== "Tab") return;
    const nodes = this.getFocusable();
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  componentDidLoad() {
    if (this.trapFocus) this.enableTrap();
    this.syncFocusVisible();
  }

  disconnectedCallback() {
    this.disableTrap();
    document.removeEventListener("keydown", this.keydownHandler);
  }

  @Watch("focusVisible")
  syncFocusVisible() {
    document.documentElement.dataset.focusVisible = this.focusVisible ? "true" : "false";
  }

  @Watch("trapFocus")
  handleTrapChange(next: boolean) {
    if (next) {
      this.enableTrap();
    } else {
      this.disableTrap();
    }
  }

  @Listen("keydown", { target: "window" })
  onKeydown(event: KeyboardEvent) {
    this.keydownHandler(event);
  }

  private enableTrap() {
    this.lastActive = document.activeElement;
    const focusable = this.getFocusable()[0];
    focusable?.focus();
    document.addEventListener("keydown", this.focusTrapHandler);
  }

  private disableTrap() {
    document.removeEventListener("keydown", this.focusTrapHandler);
    if (this.returnFocus && this.lastActive instanceof HTMLElement) {
      this.lastActive.focus();
    }
  }

  private getFocusable() {
    const selectors = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
    return Array.from(this.host.shadowRoot?.querySelectorAll<HTMLElement>(selectors) ?? []);
  }

  private matchesShortcut(event: KeyboardEvent, shortcut: string) {
    const combo = shortcut.toLowerCase().replace(/\s+/g, "");
    const parts = combo.split("+");
    const key = event.key.toLowerCase();
    const required = {
      meta: parts.includes("meta") || parts.includes("cmd") || parts.includes("command"),
      ctrl: parts.includes("ctrl") || parts.includes("control"),
      alt: parts.includes("alt") || parts.includes("option"),
      shift: parts.includes("shift"),
    };
    const keyPart = parts.find((part) => !["meta", "cmd", "command", "ctrl", "control", "alt", "option", "shift"].includes(part));
    if (keyPart && keyPart !== key) return false;
    if (required.meta !== event.metaKey) return false;
    if (required.ctrl !== event.ctrlKey) return false;
    if (required.alt !== event.altKey) return false;
    if (required.shift !== event.shiftKey) return false;
    return true;
  }

  render() {
    return (
      <div class="container">
        <slot />
      </div>
    );
  }
}
