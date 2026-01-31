import Component from "@glimmer/component";
import { action } from "@ember/object";
import { assignProps } from "../utils/element-props";

export default class SignalAccessibilityHelpers extends Component {
  element = null;

  @action
  setup(element) {
    this.element = element;
    this.syncProps();
    this.bindEvents();
  }

  @action
  syncProps() {
    assignProps(this.element, {
      focusVisible: this.args.focusVisible,
      shortcutMap: this.args.shortcutMap,
      ariaLabels: this.args.ariaLabels,
      trapFocus: this.args.trapFocus,
      returnFocus: this.args.returnFocus
    });
  }

  bindEvents() {
    if (!this.element) return;
    this.element.addEventListener("shortcut", (event) => this.args.onShortcut?.(event));
  }
}
