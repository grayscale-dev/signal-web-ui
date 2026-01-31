import { Component, h, Prop } from "@stencil/core";

type ProgressType = "bar" | "ring" | "spinner";
type ProgressState = "default" | "paused" | "error";
type ProgressSize = "sm" | "md" | "lg";

@Component({
  tag: "signal-progress",
  styleUrl: "ui-progress.css",
  shadow: true,
})
export class SignalProgress {
  @Prop() value = 0;
  @Prop() max = 100;
  @Prop() indeterminate = false;
  @Prop() type: ProgressType = "bar";
  @Prop() label?: string;
  @Prop() showValue = false;
  @Prop() state: ProgressState = "default";
  @Prop() size: ProgressSize = "md";

  private get clamped() {
    return Math.min(this.max, Math.max(0, this.value));
  }

  renderSpinner() {
    const sizeClass = this.size === "sm" ? "spinner-sm" : this.size === "lg" ? "spinner-lg" : "spinner-md";
    return (
      <div part="spinner" class={{ spinner: true, [sizeClass]: true }}>
        <span class="spinner-track" aria-hidden="true" />
      </div>
    );
  }

  renderRing() {
    const radius = this.size === "sm" ? 12 : this.size === "lg" ? 22 : 16;
    const circumference = 2 * Math.PI * radius;
    const progress = this.indeterminate ? circumference * 0.3 : circumference - (this.clamped / this.max) * circumference;
    const stateClass = `state-${this.state}`;
    return (
      <div part="ring" class="ring">
        <svg width={radius * 2 + 8} height={radius * 2 + 8} class="ring-svg" role="progressbar">
          <circle class="ring-track" cx={radius + 4} cy={radius + 4} r={radius} stroke-width="4" />
          <circle
            class={{ "ring-bar": true, [stateClass]: true, indeterminate: this.indeterminate }}
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
            stroke-width="4"
            stroke-dasharray={circumference}
            stroke-dashoffset={progress}
            stroke-linecap="round"
          />
        </svg>
        {(this.label || this.showValue) && (
          <div class="ring-label">
            {this.label && <span>{this.label}</span>}
            {this.showValue && !this.indeterminate && <span>{Math.round((this.clamped / this.max) * 100)}%</span>}
          </div>
        )}
      </div>
    );
  }

  renderBar() {
    const width = this.indeterminate ? undefined : `${(this.clamped / this.max) * 100}%`;
    const stateClass = `state-${this.state}`;
    return (
      <div class="bar-wrapper">
        <div
          part="track"
          class={{ track: true, [`size-${this.size}`]: true }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={this.max}
          aria-valuenow={this.indeterminate ? undefined : this.clamped}
        >
          <div part="bar" class={{ bar: true, [stateClass]: true, indeterminate: this.indeterminate }} style={{ width }} />
        </div>
        {this.showValue && !this.indeterminate && (
          <div class="bar-label">{Math.round((this.clamped / this.max) * 100)}%</div>
        )}
      </div>
    );
  }

  render() {
    if (this.type === "spinner") return this.renderSpinner();
    if (this.type === "ring") return this.renderRing();
    return this.renderBar();
  }
}
