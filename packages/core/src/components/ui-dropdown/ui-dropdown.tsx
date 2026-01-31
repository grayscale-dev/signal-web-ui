import { Component, Element, Event, h, Listen, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type DropdownAlign = "left" | "right";

export interface DropdownItem {
  key: string;
  label: string;
  icon?: string;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
}

@Component({
  tag: "signal-dropdown",
  styleUrl: "ui-dropdown.css",
  shadow: true,
})
export class SignalDropdown {
  @Element() host!: HTMLElement;

  /** Controls open state. Two-way via `openChange`. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Items to render inside the menu. */
  @Prop() items: DropdownItem[] = [];

  /** Button label when no custom trigger slot. */
  @Prop() label = "Menu";

  /** Horizontal alignment of the menu. */
  @Prop({ reflect: true }) align: DropdownAlign = "left";

  /** Close menu when an item is selected. */
  @Prop({ reflect: true }) closeOnSelect = true;

  @State() focusedIndex = -1;

  /** Emits when open toggles. */
  @Event({ eventName: "openChange" }) openChange!: EventEmitter<{ open: boolean }>;

  /** Emits when an item is selected. */
  @Event({ eventName: "itemSelect" }) select!: EventEmitter<{ key: string }>;

  @Watch("open")
  handleOpen(next: boolean) {
    this.openChange.emit({ open: next });
    if (next) {
      this.setInitialFocus();
    } else {
      this.focusedIndex = -1;
    }
  }

  componentDidLoad() {
    if (this.open) this.setInitialFocus();
  }

  private setInitialFocus() {
    const firstEnabled = this.items.findIndex((item) => !item.disabled);
    this.focusedIndex = firstEnabled;
  }

  @Listen("keydown", { target: "window" })
  onKeydown(ev: KeyboardEvent) {
    if (!this.open) return;
    if (ev.key === "Escape") {
      this.close();
      ev.stopPropagation();
    }
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      this.focusedIndex = Math.min(this.items.length - 1, this.focusedIndex + 1);
    }
    if (ev.key === "ArrowUp") {
      ev.preventDefault();
      this.focusedIndex = Math.max(0, this.focusedIndex - 1);
    }
    if (ev.key === "Enter" && this.focusedIndex >= 0) {
      const item = this.items[this.focusedIndex];
      if (item && !item.disabled) {
        this.emitSelect(item.key);
      }
    }
  }

  componentDidRender() {
    if (!this.open) return;
    const menu = this.host.shadowRoot?.querySelector<HTMLElement>(".menu");
    if (menu) menu.focus();
  }

  private onOutsideClick = (event: MouseEvent) => {
    if (!this.open) return;
    if (!this.host.contains(event.target as Node)) {
      this.close();
    }
  };

  connectedCallback() {
    document.addEventListener("mousedown", this.onOutsideClick);
  }

  disconnectedCallback() {
    document.removeEventListener("mousedown", this.onOutsideClick);
  }

  private toggle = () => {
    this.open = !this.open;
  };

  private close() {
    this.open = false;
  }

  private emitSelect(key: string) {
    this.select.emit({ key });
    if (this.closeOnSelect) this.close();
  }

  private renderTrigger() {
    return (
      <button type="button" class="trigger" aria-haspopup="menu" aria-expanded={this.open.toString()} onClick={this.toggle}>
        <slot name="trigger">{this.label}</slot>
        <span class="caret" aria-hidden>▾</span>
      </button>
    );
  }

  private renderItems() {
    return (
      <div class="menu" role="menu" tabIndex={-1} aria-label={this.label}>
        {this.items.map((item, index) => (
          <button
            key={item.key}
            type="button"
            role="menuitem"
            class={{
              item: true,
              focused: this.focusedIndex === index,
              disabled: !!item.disabled,
              danger: !!item.danger,
            }}
            disabled={item.disabled}
            onClick={() => !item.disabled && this.emitSelect(item.key)}
          >
            <span class="label">{item.label}</span>
            {item.shortcut && <span class="shortcut">{item.shortcut}</span>}
          </button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div class={{ wrapper: true, open: this.open, [this.align]: true }}>
        {this.renderTrigger()}
        {this.open && this.renderItems()}
      </div>
    );
  }
}
