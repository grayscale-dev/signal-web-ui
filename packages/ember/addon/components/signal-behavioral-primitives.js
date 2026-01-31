import Component from "@glimmer/component";
import { action } from "@ember/object";
import { assignProps } from "../utils/element-props";

export default class SignalBehavioralPrimitives extends Component {
  element = null;

  @action
  setup(element) {
    this.element = element;
    this.syncProps();
  }

  @action
  syncProps() {
    assignProps(this.element, {
      enabled: this.args.enabled,
      lockScroll: this.args.lockScroll,
      restoreFocus: this.args.restoreFocus
    });
  }
}
