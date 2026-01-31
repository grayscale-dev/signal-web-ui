import { Component, Event, h, Prop } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

export type NavBarItem = {
  id: string;
  label: string;
  disabled?: boolean;
};

@Component({
  tag: "signal-navbar",
  styleUrl: "ui-navbar.css",
  shadow: true,
})
export class SignalNavBar {
  @Prop() brand?: string;
  @Prop() items: NavBarItem[] = [];
  @Prop() activeItem?: string;
  @Prop({ reflect: true }) collapsed = false;
  @Prop({ reflect: true }) scrolled = false;

  @Event({ eventName: "navigate", bubbles: true, composed: true })
  navigate!: EventEmitter<{ id: string }>;

  render() {
    return (
      <nav part="root" class={{ root: true, scrolled: this.scrolled }}>
        <div class="left">
          {this.brand && (
            <div part="brand" class="brand">
              <slot name="brand">{this.brand}</slot>
            </div>
          )}
          {!this.collapsed && (
            <div class="items">
              {this.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  part="item"
                  class={{
                    item: true,
                    active: item.id === this.activeItem,
                    disabled: !!item.disabled,
                  }}
                  disabled={item.disabled}
                  onClick={() => this.navigate.emit({ id: item.id })}
                >
                  {item.label}
                </button>
              ))}
              <slot name="items" />
            </div>
          )}
        </div>
        <div class="right">
          <slot name="right" />
        </div>
      </nav>
    );
  }
}
