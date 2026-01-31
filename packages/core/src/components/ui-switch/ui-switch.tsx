import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

@Component({
  tag: "signal-switch",
  styleUrl: "ui-switch.css",
  shadow: true,
})
export class SignalSwitch {
  @Prop({ reflect: true }) checked = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) loading = false;
  @Prop() label?: string;
  @Prop() controlId?: string;

  @State() internalChecked = false;

  @Event({ eventName: "valueChange", bubbles: true, composed: true })
  valueChange!: EventEmitter<{ checked: boolean }>;

  componentWillLoad() {
    this.internalChecked = this.checked;
  }

  @Watch("checked")
  onCheckedChange(next: boolean) {
    this.internalChecked = next;
  }

  private toggle() {
    if (this.disabled || this.loading) return;
    const next = !this.internalChecked;
    this.internalChecked = next;
    this.valueChange.emit({ checked: next });
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      this.toggle();
    }
  }

  render() {
    return (
      <button
        id={this.controlId}
        type="button"
        part="root"
        class={{
          root: true,
          disabled: this.disabled,
          loading: this.loading,
        }}
        role="switch"
        aria-checked={this.internalChecked ? "true" : "false"}
        aria-label={typeof this.label === "string" ? this.label : undefined}
        onClick={() => this.toggle()}
        onKeyDown={(event) => this.handleKeyDown(event)}
      >
        <span
          part="track"
          class={{
            track: true,
            checked: this.internalChecked,
          }}
        >
          <span part="thumb" class={{ thumb: true, checked: this.internalChecked }} />
        </span>
        {this.loading ? (
          <span class="hint">Loading…</span>
        ) : this.label ? (
          <span part="label" class="label">
            <slot>{this.label}</slot>
          </span>
        ) : null}
      </button>
    );
  }
}
