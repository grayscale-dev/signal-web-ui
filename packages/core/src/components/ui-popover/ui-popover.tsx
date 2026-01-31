import { Component, Element, Event, h, Prop } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

export type PopoverPlacement = "top" | "right" | "bottom" | "left";

@Component({
  tag: "signal-popover",
  styleUrl: "ui-popover.css",
  shadow: true,
})
export class SignalPopover {
  @Element() host!: HTMLElement;
  /** Control open state (for controlled usage). */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Start open by default when uncontrolled. */
  @Prop() defaultOpen = false;

  /** Placement relative to the trigger. */
  @Prop({ reflect: true }) placement: PopoverPlacement = "bottom";

  /** Close when clicking outside. */
  @Prop({ reflect: true }) dismissOnClickOutside = true;

  /** Auto-close when selecting an item inside the popover. */
  @Prop({ reflect: true }) closeOnSelect = true;

  @Event({ eventName: "openChange" }) openChange!: EventEmitter<{ open: boolean }>;
  @Event({ eventName: "close" }) closeEvent!: EventEmitter<void>;

  private setOpen(next: boolean) {
    this.open = next;
    this.openChange.emit({ open: next });
    if (!next) this.closeEvent.emit();
  }

  private handleTriggerClick = () => {
    this.setOpen(!this.open);
  };

  private handleOutside = (event: MouseEvent) => {
    if (!this.open || !this.dismissOnClickOutside) return;
    const path = (event.composedPath?.() ?? []) as EventTarget[];
    const within = path.some((target) => target === this.host || target === this.host.shadowRoot);
    if (!within) {
      this.setOpen(false);
    }
  };

  connectedCallback() {
    if (this.defaultOpen) this.open = true;
    document.addEventListener("mousedown", this.handleOutside, true);
  }

  disconnectedCallback() {
    document.removeEventListener("mousedown", this.handleOutside, true);
  }

  private handleSelect = () => {
    if (this.closeOnSelect) this.setOpen(false);
  };

  private handleKey = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handleSelect();
    }
  };

  render() {
    return (
      <div class={{ wrapper: true, open: this.open, [this.placement]: true }}>
        <button class="trigger" type="button" onClick={this.handleTriggerClick} aria-expanded={this.open.toString()}>
          <slot name="trigger">Toggle</slot>
        </button>
        {this.open && (
          <div
            class="content"
            role="button"
            aria-label="Popover content"
            tabIndex={0}
            onClick={this.handleSelect}
            onKeyDown={this.handleKey}
          >
            <slot>
              <slot name="content" />
            </slot>
          </div>
        )}
      </div>
    );
  }
}
