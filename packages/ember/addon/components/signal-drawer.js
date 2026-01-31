import Component from "@glimmer/component";
import { action } from "@ember/object";
import { assignProps } from "../utils/element-props";

export default class SignalDrawer extends Component {
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
      open: this.args.open,
      side: this.args.side,
      heading: this.args.heading,
      description: this.args.description,
      size: this.args.size,
      snapPoints: this.args.snapPoints,
      defaultSnap: this.args.defaultSnap,
      dismissOnBackdrop: this.args.dismissOnBackdrop,
      dismissible: this.args.dismissible
    });
  }

  bindEvents() {
    if (!this.element) return;
    this.element.addEventListener("openChange", (event) => this.args.onOpenChange?.(event));
    this.element.addEventListener("close", (event) => this.args.onClose?.(event));
  }
}
