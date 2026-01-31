import { Component, h, Prop } from "@stencil/core";

type CardVariant = "card" | "panel" | "callout" | "metric" | "empty";

@Component({
  tag: "signal-card",
  styleUrl: "ui-card.css",
  shadow: true,
})
export class SignalCard {
  @Prop() variant: CardVariant = "card";
  @Prop({ attribute: "title" }) heading?: string;
  @Prop() description?: string;
  @Prop() status?: string;
  @Prop() padded = true;
  @Prop({ reflect: true }) interactive = false;
  @Prop({ reflect: true }) selected = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) loading = false;
  @Prop() href?: string;

  render() {
    const content = (
      <div class="content-wrap">
        {(this.heading || this.description || this.status) && (
          <div class={{ header: true, padded: this.padded }}>
            <div class="header-left">
              {this.heading && <h3 class="title">{this.heading}</h3>}
              {this.status && <span class="status">{this.status}</span>}
              {this.description && <p class="description">{this.description}</p>}
              <slot name="header" />
            </div>
            <slot name="actions" />
          </div>
        )}
        <slot name="media" />
        <div class={{ body: true, padded: this.padded, metric: this.variant === "metric" }}>
          <slot />
        </div>
        <slot name="footer" />
      </div>
    );

    const Tag = this.href ? "a" : "div";
    return (
      <Tag
        part="root"
        class={{
          root: true,
          [`variant-${this.variant}`]: true,
          interactive: this.interactive,
          selected: this.selected,
          disabled: this.disabled,
        }}
        href={this.href}
      >
        {content}
      </Tag>
    );
  }
}
