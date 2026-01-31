import { Component, Event, h, Prop } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

export type BreadcrumbItem = {
  id: string;
  label: string;
  href?: string;
  current?: boolean;
};

@Component({
  tag: "signal-breadcrumbs",
  styleUrl: "ui-breadcrumbs.css",
  shadow: true,
})
export class SignalBreadcrumbs {
  @Prop() items: BreadcrumbItem[] = [];
  @Prop() maxItems = 5;

  @Event({ eventName: "navigate", bubbles: true, composed: true })
  navigate!: EventEmitter<{ id: string }>;

  private get trimmed() {
    if (this.items.length > this.maxItems && this.maxItems >= 3) {
      return [
        this.items[0],
        { id: "__ellipsis__", label: "…" },
        ...this.items.slice(this.items.length - (this.maxItems - 2)),
      ];
    }
    return this.items;
  }

  render() {
    const items = this.trimmed;
    return (
      <nav part="root" class="root" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span class="crumb" key={item.id}>
            {item.id === "__ellipsis__" ? (
              <span class="ellipsis">…</span>
            ) : (
              <button
                type="button"
                class={{
                  link: true,
                  current: !!item.current,
                }}
                aria-current={item.current ? "page" : undefined}
                onClick={() => this.navigate.emit({ id: item.id })}
              >
                {item.label}
              </button>
            )}
            {index < items.length - 1 && <span class="separator">/</span>}
          </span>
        ))}
      </nav>
    );
  }
}
