import Components from "./types.js";

class Component implements Components {
  domElement: HTMLElement;

  constructor(private parentElement: HTMLElement, tag = "div", className = "") {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
