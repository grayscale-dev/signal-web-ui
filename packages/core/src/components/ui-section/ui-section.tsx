import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "signal-section",
  styleUrl: "ui-section.css",
  shadow: true,
})
export class SignalSection {
  @Prop({ attribute: "title" }) heading?: string;
  @Prop() subtitle?: string;
  @Prop({ reflect: true }) collapsible = false;
  @Prop({ reflect: true }) defaultCollapsed = false;
  @Prop({ reflect: true }) loading = false;

  @State() open = true;

  componentWillLoad() {
    this.open = !this.defaultCollapsed;
  }

  private toggle() {
    if (!this.collapsible) return;
    this.open = !this.open;
  }

  render() {
    return (
      <section part="root" class="root">
        <div part="header" class="header">
          <div>
            {this.heading && <h2 class="title">{this.heading}</h2>}
            {this.subtitle && <p class="subtitle">{this.subtitle}</p>}
          </div>
          <div class="actions">
            <slot name="actions" />
            {this.collapsible && (
              <button part="toggle" class="toggle" type="button" onClick={() => this.toggle()}>
                {this.open ? "Collapse" : "Expand"}
              </button>
            )}
          </div>
        </div>
        <div part="body" class="body" style={{ display: this.collapsible && !this.open ? "none" : "block" }}>
          {this.loading ? <slot name="loading">Loading…</slot> : <slot />}
        </div>
      </section>
    );
  }
}
