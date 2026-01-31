import Component from "@glimmer/component";
import { action } from "@ember/object";
import { assignProps } from "../utils/element-props";

export default class SignalDropdown extends Component {
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
      items: this.args.items,
      label: this.args.label,
      align: this.args.align,
      closeOnSelect: this.args.closeOnSelect
    });
  }

  bindEvents() {
    if (!this.element) return;
    this.element.addEventListener("openChange", (event) => this.args.onOpenChange?.(event));
    this.element.addEventListener("itemSelect", (event) => this.args.onSelect?.(event));
  }
}
