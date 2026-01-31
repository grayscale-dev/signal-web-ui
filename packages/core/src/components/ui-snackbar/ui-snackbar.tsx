import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type SnackbarTone = "info" | "success" | "warning" | "danger";

@Component({
  tag: "signal-snackbar",
  styleUrl: "ui-snackbar.css",
  shadow: true,
})
export class SignalSnackbar {
  @Prop() message!: string;
  @Prop() tone: SnackbarTone = "info";
  @Prop() duration = 4000;
  @Prop() actionLabel?: string;
  @Prop({ reflect: true }) open = true;

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
  onOpenChange(next: boolean) {
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
    this.visible = false;
    this.dismiss.emit();
  }

  render() {
    if (!this.visible) return null;
    return (
      <div part="root" class={{ root: true, [`tone-${this.tone}`]: true }}>
        <div part="message" class="message">
          <slot>{this.message}</slot>
        </div>
        <div class="actions">
          {this.actionLabel && (
            <button part="action" class="action" onClick={() => this.action.emit()}>
              {this.actionLabel}
            </button>
          )}
          <button part="close" class="close" aria-label="Dismiss" onClick={() => this.handleDismiss()}>
            ×
          </button>
        </div>
      </div>
    );
  }
}
