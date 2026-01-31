import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

@Component({
  tag: "signal-textarea",
  styleUrl: "ui-textarea.css",
  shadow: true,
})
export class SignalTextarea {
  @Prop() value?: string;
  @Prop() defaultValue?: string;
  @Prop() rows = 4;
  @Prop() autoResize = false;
  @Prop() maxLength?: number;
  @Prop() placeholder?: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() validationState: "default" | "invalid" | "success" = "default";

  @State() internalValue = "";

  @Event({ eventName: "valueChange", bubbles: true, composed: true })
  valueChange!: EventEmitter<{ value: string }>;

  textarea?: HTMLTextAreaElement;

  componentWillLoad() {
    this.internalValue = this.value ?? this.defaultValue ?? "";
  }

  componentDidLoad() {
    this.resize();
  }

  @Watch("value")
  onValuePropChange(next: string | undefined) {
    if (next !== undefined) {
      this.internalValue = next;
      this.resize();
    }
  }

  private resize() {
    if (!this.autoResize || !this.textarea) return;
    this.textarea.style.height = "auto";
    this.textarea.style.height = `${this.textarea.scrollHeight}px`;
  }

  private handleInput(event: Event) {
    const next = (event.target as HTMLTextAreaElement).value;
    this.internalValue = next;
    this.resize();
    this.valueChange.emit({ value: next });
  }

  render() {
    return (
      <textarea
        part="textarea"
        ref={(el) => (this.textarea = el as HTMLTextAreaElement)}
        class={{
          textarea: true,
          invalid: this.validationState === "invalid",
          success: this.validationState === "success",
        }}
        rows={this.rows}
        value={this.internalValue}
        placeholder={this.placeholder}
        maxLength={this.maxLength}
        disabled={this.disabled}
        onInput={(event) => this.handleInput(event)}
      />
    );
  }
}
