import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "signal-page",
  styleUrl: "ui-page.css",
  shadow: true,
})
export class SignalPage {
  @Prop({ attribute: "title" }) heading?: string;
  @Prop() description?: string;
  @Prop({ reflect: true }) loading = false;
  @Prop() error?: string | boolean;
  @Prop() empty?: string | boolean;

  render() {
    const hasError = Boolean(this.error);
    const isEmpty = Boolean(this.empty);

    let content = <slot />;
    if (this.loading) {
      content = (
        <div part="loading" class="alert muted">
          <slot name="loading">Loading…</slot>
        </div>
      );
    } else if (hasError) {
      content = (
        <div part="error" class="alert error">
          <slot name="error">{typeof this.error === "boolean" ? "Something went wrong." : this.error}</slot>
        </div>
      );
    } else if (isEmpty) {
      content = (
        <div part="empty" class="alert empty">
          <slot name="empty">{typeof this.empty === "boolean" ? "No data yet." : this.empty}</slot>
        </div>
      );
    }

    return (
      <section part="root" class="root">
        {(this.heading || this.description || true) && (
          <header part="header" class="header">
            <div>
              {this.heading && <h1 class="title">{this.heading}</h1>}
              {this.description && <p class="description">{this.description}</p>}
            </div>
            <slot name="header" />
          </header>
        )}
        <div class="body">{content}</div>
        <slot name="footer" />
      </section>
    );
  }
}
