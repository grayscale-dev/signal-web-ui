import { Component, Event, h, Prop, State } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

type Orientation = "horizontal" | "vertical";

export type SplitPane = {
  id: string;
  collapsible?: boolean;
  locked?: boolean;
};

@Component({
  tag: "signal-split-view",
  styleUrl: "ui-split-view.css",
  shadow: true,
})
export class SignalSplitView {
  @Prop() orientation: Orientation = "horizontal";
  @Prop() panes: SplitPane[] = [];
  @Prop() minSizes: number[] = [];
  @Prop() defaultSizes: number[] = [];
  @Prop() collapsible = false;

  @State() sizes: number[] = [];

  @Event({ eventName: "sizesChange", bubbles: true, composed: true })
  sizesChange!: EventEmitter<{ sizes: number[] }>;

  componentWillLoad() {
    this.sizes = this.defaultSizes.length === this.panes.length ? [...this.defaultSizes] : this.panes.map(() => 100 / (this.panes.length || 1));
  }

  private startDrag(index: number, event: MouseEvent | { clientX: number; clientY: number; preventDefault?: () => void }) {
    event.preventDefault?.();
    const start = this.orientation === "horizontal" ? event.clientX : event.clientY;
    const initial = [...this.sizes];

    const onMove = (moveEvent: MouseEvent) => {
      const delta = (this.orientation === "horizontal" ? moveEvent.clientX : moveEvent.clientY) - start;
      const container = (this.host.shadowRoot?.querySelector(".split") as HTMLElement);
      const total = this.orientation === "horizontal" ? container.clientWidth : container.clientHeight;
      const deltaPercent = (delta / total) * 100;

      const next = [...initial];
      next[index] = Math.max(this.minSizes[index] ?? 5, initial[index] + deltaPercent);
      next[index + 1] = Math.max(this.minSizes[index + 1] ?? 5, initial[index + 1] - deltaPercent);
      const sum = next.reduce((a, b) => a + b, 0);
      this.sizes = next.map((v) => (v / sum) * 100);
      this.sizesChange.emit({ sizes: this.sizes });
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }

  private get host(): HTMLElement {
    return (this as unknown as { el: HTMLElement }).el;
  }

  render() {
    const template =
      this.orientation === "horizontal"
        ? this.sizes.map((s) => `${s}%`).join(" ")
        : this.sizes.map((s) => `${s}%`).join(" ");

    return (
      <div part="root" class={{ split: true, [`orient-${this.orientation}`]: true }} style={{ gridTemplateColumns: this.orientation === "horizontal" ? template : undefined, gridTemplateRows: this.orientation === "vertical" ? template : undefined }}>
        {this.panes.map((pane) => (
          <div part="pane" class={{ pane: true, locked: !!pane.locked }} key={pane.id}>
            <slot name={pane.id} />
          </div>
        ))}
        {this.panes.slice(0, -1).map((pane) => (
          <button
            part="handle"
            key={`${pane.id}-handle`}
            class={{ handle: true, [`orient-${this.orientation}`]: true, locked: !!pane.locked }}
            onMouseDown={(event) => this.startDrag(this.panes.findIndex((p) => p.id === pane.id), event)}
            tabIndex={0}
            onKeyDown={(event) => {
              const delta = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -2 : event.key === "ArrowRight" || event.key === "ArrowDown" ? 2 : 0;
              if (delta === 0) return;
              event.preventDefault();
              const index = this.panes.findIndex((p) => p.id === pane.id);
              const next = [...this.sizes];
              next[index] = Math.max(this.minSizes[index] ?? 5, next[index] + delta);
              next[index + 1] = Math.max(this.minSizes[index + 1] ?? 5, next[index + 1] - delta);
              const sum = next.reduce((a, b) => a + b, 0);
              this.sizes = next.map((v) => (v / sum) * 100);
              this.sizesChange.emit({ sizes: this.sizes });
            }}
          >
            <div class="handle-grip" />
          </button>
        ))}
      </div>
    );
  }
}
