import Component from "@glimmer/component";
import { action } from "@ember/object";
import { assignProps } from "../utils/element-props";

export default class SignalPopover extends Component {
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
      defaultOpen: this.args.defaultOpen,
      placement: this.args.placement,
      dismissOnClickOutside: this.args.dismissOnClickOutside,
      closeOnSelect: this.args.closeOnSelect
    });
  }

  bindEvents() {
    if (!this.element) return;
    this.element.addEventListener("openChange", (event) => this.args.onOpenChange?.(event));
    this.element.addEventListener("close", (event) => this.args.onClose?.(event));
  }
}
