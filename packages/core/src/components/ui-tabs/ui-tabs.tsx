import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

export type TabItem = {
  value?: string;
  key?: string;
  label: string;
  disabled?: boolean;
};

export type TabValidation = "invalid" | "warning";

@Component({
  tag: "signal-tabs",
  styleUrl: "ui-tabs.css",
  shadow: true,
})
export class SignalTabs {
  @Prop() tabs: TabItem[] = [];
  @Prop() value?: string;
  @Prop() activeKey?: string;
  @Prop() variant: "tabs" | "steps" = "tabs";
  @Prop() orientation: "horizontal" | "vertical" = "horizontal";
  @Prop() keepAlive = true;
  @Prop() lazy = false;
  @Prop() validationMap: Record<string, TabValidation> = {};

  @State() current = "";

  @Event({ eventName: "valueChange", bubbles: true, composed: true })
  valueChange!: EventEmitter<{ value: string }>;

  componentWillLoad() {
    this.current = this.resolveValue();
  }

  @Watch("value")
  @Watch("activeKey")
  onExternalValueChange() {
    this.current = this.resolveValue();
  }

  private resolveValue() {
    const first = this.tabs[0];
    const fallback = first?.value ?? first?.key ?? "";
    return this.activeKey ?? this.value ?? fallback;
  }

  private handleSelect(val: string) {
    this.current = val;
    this.valueChange.emit({ value: val });
  }

  render() {
    return (
      <div part="root" class={{ root: true, [`orient-${this.orientation}`]: true }}>
        <div part="list" class={{ list: true, steps: this.variant === "steps", [`orient-${this.orientation}`]: true }}>
          {this.tabs.map((tab, index) => {
            const val = tab.value ?? tab.key ?? `${index}`;
            const validation = this.validationMap[val];
            return (
              <button
                key={val}
                type="button"
                part="trigger"
                class={{
                  trigger: true,
                  active: this.current === val,
                  disabled: !!tab.disabled,
                  steps: this.variant === "steps",
                  [`validation-${validation}`]: !!validation,
                }}
                disabled={tab.disabled}
                onClick={() => this.handleSelect(val)}
              >
                {this.variant === "steps" && (
                  <span
                    class={{
                      step: true,
                      active: this.current === val,
                      [`validation-${validation}`]: !!validation,
                    }}
                  >
                    {index + 1}
                  </span>
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        <div part="panels" class="panels">
          {this.tabs.map((tab, index) => {
            const val = tab.value ?? tab.key ?? `${index}`;
            const isActive = this.current === val;
            if (this.lazy && !isActive) return null;
            if (!this.keepAlive && !isActive) return null;
            return (
              <div
                key={val}
                part="panel"
                class={{ panel: true, active: isActive }}
                hidden={!isActive}
              >
                <slot name={`tab-${val}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
