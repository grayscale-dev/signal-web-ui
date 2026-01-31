import Component from "@glimmer/component";
import { action } from "@ember/object";
import { assignProps } from "../utils/element-props";

export default class SignalResponsiveConfig extends Component {
  element = null;

  @action
  setup(element) {
    this.element = element;
    this.syncProps();
  }

  @action
  syncProps() {
    assignProps(this.element, {
      breakpoints: this.args.breakpoints,
      zIndexScale: this.args.zIndexScale,
      className: this.args.className
    });
  }
}
