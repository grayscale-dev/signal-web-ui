import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type SliderMode = "single" | "range";

@Component({
  tag: "signal-slider",
  styleUrl: "ui-slider.css",
  shadow: true,
})
export class SignalSlider {
  @Prop() mode: SliderMode = "single";
  @Prop() value?: number | [number, number];
  @Prop() min = 0;
  @Prop() max = 100;
  @Prop() step = 1;
  @Prop() showValue = false;
  @Prop({ reflect: true }) disabled = false;

  @State() internalValue: number | [number, number] = 0;

  @Event({ eventName: "valueChange", bubbles: true, composed: true })
  valueChange!: EventEmitter<{ value: number | [number, number] }>;

  componentWillLoad() {
    this.internalValue = this.value ?? (this.mode === "range" ? [this.min, this.max] : this.min);
  }

  @Watch("value")
  onValuePropChange(next: number | [number, number] | undefined) {
    if (next !== undefined) this.internalValue = next;
  }

  private clamp(val: number) {
    return Math.min(this.max, Math.max(this.min, val));
  }

  private emitChange(next: number | [number, number]) {
    this.internalValue = next;
    this.valueChange.emit({ value: next });
  }

  private handleSingleChange(event: Event) {
    const next = this.clamp(Number((event.target as HTMLInputElement).value));
    this.emitChange(next);
  }

  private handleRangeChange(index: 0 | 1, event: Event) {
    if (this.mode !== "range") return;
    const current = Array.isArray(this.internalValue) ? [...this.internalValue] : [this.min, this.max];
    current[index] = this.clamp(Number((event.target as HTMLInputElement).value));
    current.sort((a, b) => a - b);
    this.emitChange(current as [number, number]);
  }

  renderValue() {
    if (!this.showValue) return null;
    const val = this.internalValue;
    return (
      <div class="value">
        {Array.isArray(val) ? `${val[0]} – ${val[1]}` : val}
      </div>
    );
  }

  render() {
    const val = this.internalValue;
    const range = Array.isArray(val) ? val : [val, val];

    return (
      <div part="root" class={{ root: true, disabled: this.disabled }}>
        <div class="track">
          <div
            class="range"
            style={{
              left: `${((range[0] - this.min) / (this.max - this.min)) * 100}%`,
              right: `${100 - ((range[1] - this.min) / (this.max - this.min)) * 100}%`,
            }}
          />
        </div>

        {this.mode === "range" ? (
          <div class="thumbs">
            <input
              part="thumb"
              type="range"
              min={this.min}
              max={this.max}
              step={this.step}
              value={range[0]}
              disabled={this.disabled}
              onInput={(event) => this.handleRangeChange(0, event)}
            />
            <input
              part="thumb"
              type="range"
              min={this.min}
              max={this.max}
              step={this.step}
              value={range[1]}
              disabled={this.disabled}
              onInput={(event) => this.handleRangeChange(1, event)}
            />
          </div>
        ) : (
          <input
            part="thumb"
            class="single"
            type="range"
            min={this.min}
            max={this.max}
            step={this.step}
            value={range[0]}
            disabled={this.disabled}
            onInput={(event) => this.handleSingleChange(event)}
          />
        )}

        {this.renderValue()}
      </div>
    );
  }
}
