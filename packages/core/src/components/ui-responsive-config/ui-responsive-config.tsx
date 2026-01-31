import { Component, h, Prop } from "@stencil/core";

type NumericRecord = Record<string, number>;

@Component({
  tag: "signal-responsive-config",
  styleUrl: "ui-responsive-config.css",
  shadow: true,
})
export class SignalResponsiveConfig {
  /** Breakpoints map. Ex: `{ sm: 640, md: 768 }` -> CSS vars `--bp-sm`, `--bp-md`. */
  @Prop() breakpoints?: NumericRecord;

  /** z-index scale map. Ex: `{ overlay: 1000 }` -> CSS var `--z-overlay`. */
  @Prop() zIndexScale?: NumericRecord;

  /** Optional class name applied to wrapper. */
  @Prop() hostClass?: string;

  private buildVars() {
    const vars: Record<string, string> = {};
    if (this.breakpoints) {
      Object.entries(this.breakpoints).forEach(([key, value]) => (vars[`--bp-${key}`] = `${value}px`));
    }
    if (this.zIndexScale) {
      Object.entries(this.zIndexScale).forEach(([key, value]) => (vars[`--z-${key}`] = `${value}`));
    }
    return vars;
  }

  render() {
    const style = this.buildVars();
    return (
      <div class={this.hostClass} style={style}>
        <slot />
      </div>
    );
  }
}
