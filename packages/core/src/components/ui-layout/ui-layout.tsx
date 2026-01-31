import { Component, h, Prop } from "@stencil/core";

type LayoutMode = "grid" | "stack";
type Direction = "row" | "column";

@Component({
  tag: "signal-layout",
  styleUrl: "ui-layout.css",
  shadow: true,
})
export class SignalLayout {
  @Prop() layout: LayoutMode = "stack";
  @Prop() direction: Direction = "column";
  @Prop() gap: number | string = 16;
  @Prop() align?: string;
  @Prop() justify?: string;
  @Prop({ reflect: true }) wrap = false;
  @Prop() columns?: number;
  @Prop() minItemWidth?: number | string;
  @Prop({ reflect: true }) divider = false;

  private get gapValue() {
    return typeof this.gap === "number" ? `${this.gap}px` : this.gap;
  }

  render() {
    const style: Record<string, string> = {
      gap: this.gapValue,
    };
    if (this.layout === "grid") {
      const width = typeof this.minItemWidth === "number" ? `${this.minItemWidth}px` : this.minItemWidth;
      style.display = "grid";
      style.gridTemplateColumns = this.columns
        ? `repeat(${this.columns}, minmax(0, 1fr))`
        : width
          ? `repeat(auto-fit, minmax(${width}, 1fr))`
          : "repeat(auto-fit, minmax(220px, 1fr))";
    } else {
      style.display = "flex";
      style.flexDirection = this.direction;
      style.flexWrap = this.wrap ? "wrap" : "nowrap";
      if (this.align) style.alignItems = this.align;
      if (this.justify) style.justifyContent = this.justify;
    }

    return (
      <div
        part="root"
        class={{
          root: true,
          [`divider-${this.layout}-${this.direction}`]: this.divider,
        }}
        style={style}
      >
        <slot />
      </div>
    );
  }
}
