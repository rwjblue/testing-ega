import Component from "../system/component";
import template from "../templates/components/hello-world.hbs";

export default class HelloWorldComponent extends Component {
  static layoutSpec = template;

  didInsertElement() {
  }
}
