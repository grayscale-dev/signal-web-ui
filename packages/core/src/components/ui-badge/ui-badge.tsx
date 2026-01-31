import { Component, h, Prop } from "@stencil/core";

type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";
type BadgeSize = "sm" | "md" | "lg";

@Component({
  tag: "signal-badge",
  styleUrl: "ui-badge.css",
  shadow: true,
})
export class SignalBadge {
  @Prop() tone: BadgeTone = "neutral";
  @Prop() soft = true;
  @Prop() size: BadgeSize = "md";

  render() {
    return (
      <span
        part="root"
        class={{
          root: true,
          [`tone-${this.tone}`]: true,
          soft: this.soft,
          [`size-${this.size}`]: true,
        }}
      >
        <span part="icon" class="icon">
          <slot name="icon" />
        </span>
        <span part="label" class="label">
          <slot />
        </span>
      </span>
    );
  }
}
