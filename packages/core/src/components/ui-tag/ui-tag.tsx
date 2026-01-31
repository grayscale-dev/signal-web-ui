import { Component, Event, h, Prop } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type TagTone = "neutral" | "accent" | "success" | "warning" | "danger";
type TagSize = "sm" | "md" | "lg";

@Component({
  tag: "signal-tag",
  styleUrl: "ui-tag.css",
  shadow: true,
})
export class SignalTag {
  @Prop() label!: string;
  @Prop() tone: TagTone = "neutral";
  @Prop() size: TagSize = "md";
  @Prop({ reflect: true }) removable = false;
  @Prop({ reflect: true }) disabled = false;

  @Event({ eventName: "remove", bubbles: true, composed: true })
  remove!: EventEmitter<void>;

  private handleRemove(event: Event) {
    event.stopPropagation();
    if (this.disabled) return;
    this.remove.emit();
  }

  render() {
    return (
      <span
        part="root"
        class={{
          root: true,
          [`tone-${this.tone}`]: true,
          [`size-${this.size}`]: true,
          disabled: this.disabled,
        }}
      >
        <span part="icon" class="icon">
          <slot name="icon" />
        </span>
        <span part="label" class="label">
          <slot>{this.label}</slot>
        </span>
        {this.removable && (
          <button
            part="remove"
            class="remove"
            type="button"
            onClick={(event) => this.handleRemove(event)}
            aria-label={`Remove ${this.label}`}
          >
            ×
          </button>
        )}
      </span>
    );
  }
}
