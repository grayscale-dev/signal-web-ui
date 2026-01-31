import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "signal-behavioral-primitives",
  styleUrl: "ui-behavioral-primitives.css",
  shadow: true,
})
export class SignalBehavioralPrimitives {
  @Element() host!: HTMLElement;

  /** Enable/disable all behaviors. */
  @Prop({ reflect: true }) enabled = true;

  /** Lock document scroll while mounted. */
  @Prop({ reflect: true }) lockScroll = false;

  /** Restore the previously focused element on disconnect. */
  @Prop({ reflect: true }) restoreFocus = false;

  private previousOverflow = "";
  private previousActive: Element | null = null;

  connectedCallback() {
    if (!this.enabled) return;
    if (this.lockScroll) {
      this.previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    if (this.restoreFocus) {
      this.previousActive = document.activeElement;
    }
  }

  disconnectedCallback() {
    if (!this.enabled) return;
    if (this.lockScroll) {
      document.body.style.overflow = this.previousOverflow;
    }
    if (this.restoreFocus && this.previousActive instanceof HTMLElement) {
      this.previousActive.focus();
    }
  }

  render() {
    return <slot />;
  }
}
