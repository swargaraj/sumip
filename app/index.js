import "../styles/index.scss";
import Lenis from "lenis";
import TextReveal from "./animations/TextReveal";

class App {
  constructor() {
    this._createTextReveals();
  }

  _createTextReveals() {
    const textItems = [
      ...document.querySelectorAll('[data-animation="text-reveal"]'),
    ];
    textItems.forEach((text, index) => {
      setTimeout(() => {
        new TextReveal({ element: text });
      }, 300 * index);
    });
  }
}

new App();
