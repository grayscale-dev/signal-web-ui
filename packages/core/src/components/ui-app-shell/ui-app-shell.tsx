import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "signal-app-shell",
  styleUrl: "ui-app-shell.css",
  shadow: true,
})
export class SignalAppShell {
  /** Optional padding around shell */
  @Prop() padded = true;

  render() {
    return (
      <div part="shell" class={{ shell: true, padded: this.padded }}>
        <div part="frame" class="frame">
          <slot name="sidebar" />
          <div part="main" class="main">
            <slot name="topbar" />
            <main part="content" class="content">
              <slot />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
