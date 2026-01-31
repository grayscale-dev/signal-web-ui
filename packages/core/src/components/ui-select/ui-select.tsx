import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type Option = { label: string; value: string; disabled?: boolean };

@Component({
  tag: "signal-select",
  styleUrl: "ui-select.css",
  shadow: true,
})
export class SignalSelect {
  @Prop() options: Option[] = [];
  @Prop() placeholder = "Select an option";
  @Prop() value?: string;
  @Prop({ reflect: true }) disabled = false;

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

  private handleChange(event: Event) {
    const next = (event.target as HTMLSelectElement).value || undefined;
    this.internalValue = next;
    this.valueChange.emit({ value: next });
  }

  render() {
    return (
      <div part="root" class="root">
        <select part="select" class="select" disabled={this.disabled} onInput={(event) => this.handleChange(event)}>
          <option value="" selected={!this.internalValue}>
            {this.placeholder}
          </option>
          {this.options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              selected={this.internalValue === option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span part="chevron" class="chevron" aria-hidden="true">
          ▼
        </span>
      </div>
    );
  }
}
