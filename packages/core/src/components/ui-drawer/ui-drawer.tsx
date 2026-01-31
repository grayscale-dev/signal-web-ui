import { Component, Event, h, Listen, Prop, State } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

export type DrawerSide = "left" | "right" | "top" | "bottom";

@Component({
  tag: "signal-drawer",
  styleUrl: "ui-drawer.css",
  shadow: true,
})
export class SignalDrawer {
  /** Controls open/closed state. Can be two-way bound via `openChange`. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Which edge the drawer should attach to. */
  @Prop({ reflect: true }) side: DrawerSide = "right";

  /** Optional heading text. */
  @Prop() heading?: string;

  /** Optional description text. */
  @Prop() description?: string;

  /** Width (for left/right) or height (for top/bottom). Numbers are treated as px. */
  @Prop() size: number | string = 420;

  /** Snap points for top/bottom drawers (values between 0 and 1 represent viewport height). */
  @Prop() snapPoints?: number[];

  /** Fallback snap point when `snapPoints` provided but empty. */
  @Prop() defaultSnap = 0.5;

  /** Allow closing when clicking the backdrop. */
  @Prop({ reflect: true }) dismissOnBackdrop = true;

  /** Disable closing entirely when set to false. */
  @Prop({ reflect: true }) dismissible = true;

  @State() internalSnap?: number;

  /** Fires whenever open state changes. */
  @Event({ eventName: "openChange" }) openChange!: EventEmitter<{ open: boolean }>;

  /** Fired when the drawer is dismissed. */
  @Event({ eventName: "close" }) closeEvent!: EventEmitter<void>;

  componentWillLoad() {
    this.internalSnap = this.snapPoints?.[0] ?? this.defaultSnap;
  }

  private coerceSize(value: number | string | undefined, fallback: number) {
    if (value == null) return `${fallback}px`;
    return typeof value === "number" ? `${value}px` : value;
  }

  private handleBackdropClick = () => {
    if (!this.dismissible || !this.dismissOnBackdrop) return;
    this.dismiss();
  };

  private dismiss() {
    this.closeEvent.emit();
    this.setOpen(false);
  }

  private setOpen(next: boolean) {
    this.open = next;
    this.openChange.emit({ open: next });
  }

  @Listen("keydown", { target: "window" })
  onKeyDown(ev: KeyboardEvent) {
    if (!this.open || !this.dismissible) return;
    if (ev.key === "Escape") {
      ev.preventDefault();
      this.dismiss();
    }
  }

  private renderHeader() {
    if (!this.heading && !this.description) return null;
    return (
      <div class="header">
        {this.heading && <h2 class="title">{this.heading}</h2>}
        {this.description && <p class="description">{this.description}</p>}
      </div>
    );
  }

  render() {
    const sizeValue = this.coerceSize(this.size, 420);
    const snapSize = this.internalSnap != null ? `${this.internalSnap * 100}vh` : undefined;
    const vertical = this.side === "left" || this.side === "right";

    const dimensionStyle = vertical
      ? { width: sizeValue }
      : { height: snapSize ?? sizeValue };

    return (
      <div class={{ host: true, open: this.open }}>
        <div class="backdrop" part="backdrop" onClick={this.handleBackdropClick} aria-hidden="true" />
        <aside
          part="panel"
          class={{ panel: true, [this.side]: true }}
          style={dimensionStyle}
          role="dialog"
          aria-modal="true"
          aria-label={this.heading}
        >
          {this.renderHeader()}
          <div class="body">
            <slot />
          </div>
        </aside>
      </div>
    );
  }
}
