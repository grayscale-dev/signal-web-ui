import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

@Component({
  tag: "signal-checkbox",
  styleUrl: "ui-checkbox.css",
  shadow: true,
})
export class SignalCheckbox {
  @Prop({ reflect: true }) checked = false;
  @Prop({ reflect: true }) indeterminate = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop() label?: string;

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
    if (this.disabled) return;
    const next = !this.internalChecked;
    this.internalChecked = next;
    this.valueChange.emit({ checked: next });
  }

  render() {
    const showIndeterminate = this.indeterminate && !this.internalChecked;
    return (
      <label
        part="root"
        class={{
          root: true,
          disabled: this.disabled,
        }}
        onClick={() => this.toggle()}
      >
        <span
          part="box"
          class={{
            box: true,
            checked: this.internalChecked,
            indeterminate: showIndeterminate,
          }}
          role="checkbox"
          aria-checked={this.indeterminate ? "mixed" : this.internalChecked ? "true" : "false"}
          aria-disabled={this.disabled ? "true" : "false"}
        >
          {showIndeterminate ? <span class="mark indeterminate-mark" /> : <span class="mark check-mark" />}
        </span>
        {this.label && (
          <span part="label" class="label">
            <slot>{this.label}</slot>
          </span>
        )}
      </label>
    );
  }
}
