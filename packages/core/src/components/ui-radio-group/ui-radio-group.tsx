import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type RadioOption = { label: string; value: string; description?: string; disabled?: boolean };

@Component({
  tag: "signal-radio-group",
  styleUrl: "ui-radio-group.css",
  shadow: true,
})
export class SignalRadioGroup {
  @Prop() options: RadioOption[] = [];
  @Prop() value?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() name?: string;

  @State() internalValue?: string;

  @Event({ eventName: "valueChange", bubbles: true, composed: true })
  valueChange!: EventEmitter<{ value: string | undefined }>;

  componentWillLoad() {
    this.internalValue = this.value;
  }

  @Watch("value")
  onValueChange(next: string | undefined) {
    this.internalValue = next;
  }

  private handleChange(next: string) {
    if (this.disabled) return;
    this.internalValue = next;
    this.valueChange.emit({ value: next });
  }

  render() {
    return (
      <div part="root" class={{ root: true, disabled: this.disabled }} role="radiogroup">
        {this.options.map((option) => (
          <label
            part="item"
            key={option.value}
            class={{
              item: true,
              selected: this.internalValue === option.value,
              disabled: this.disabled || !!option.disabled,
            }}
          >
            <input
              class="input"
              type="radio"
              name={this.name}
              value={option.value}
              disabled={this.disabled || option.disabled}
              checked={this.internalValue === option.value}
              onInput={() => this.handleChange(option.value)}
            />
            <span class="control" aria-hidden="true">
              <span class="dot" />
            </span>
            <span class="text">
              <span class="label">{option.label}</span>
              {option.description && <span class="description">{option.description}</span>}
            </span>
          </label>
        ))}
        <slot />
      </div>
    );
  }
}
