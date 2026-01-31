import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type ToastTone = "info" | "success" | "warning" | "danger";

@Component({
  tag: "signal-toast",
  styleUrl: "ui-toast.css",
  shadow: true,
})
export class SignalToast {
  @Prop() tone: ToastTone = "info";
  @Prop({ attribute: "title" }) heading?: string;
  @Prop() message!: string;
  @Prop() description?: string;
  @Prop() actionLabel?: string;
  @Prop() dismissible = true;
  @Prop() open = true;
  @Prop() duration = 3200;

  @Event({ eventName: "action", bubbles: true, composed: true })
  action!: EventEmitter<void>;

  @Event({ eventName: "dismiss", bubbles: true, composed: true })
  dismiss!: EventEmitter<void>;

  @State() visible = true;
  private timer?: number;

  componentWillLoad() {
    this.visible = this.open;
    this.startTimer();
  }

  @Watch("open")
  handleOpenChange(next: boolean) {
    this.visible = next;
    this.startTimer();
  }

  disconnectedCallback() {
    window.clearTimeout(this.timer);
  }

  private startTimer() {
    window.clearTimeout(this.timer);
    if (!this.visible) return;
    this.timer = window.setTimeout(() => this.handleDismiss(), this.duration);
  }

  private handleDismiss() {
    if (!this.visible) return;
    this.visible = false;
    this.dismiss.emit();
  }

  render() {
    if (!this.visible) return null;
    return (
      <div part="root" class={{ root: true, [`tone-${this.tone}`]: true }}>
        <div class="body">
          {this.heading && (
            <div part="title" class="title">
              {this.heading}
            </div>
          )}
          <div part="message" class="message">
            <slot>{this.message}</slot>
          </div>
          {this.description && (
            <div part="description" class="description">
              {this.description}
            </div>
          )}
          {this.actionLabel && (
            <button part="action" class="action" type="button" onClick={() => this.action.emit()}>
              {this.actionLabel}
            </button>
          )}
        </div>
        {this.dismissible && (
          <button part="close" class="close" type="button" aria-label="Dismiss" onClick={() => this.handleDismiss()}>
            ×
          </button>
        )}
      </div>
    );
  }
}
