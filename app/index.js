import "../styles/index.scss";
import Lenis from "lenis";
import TextReveal from "./animations/TextReveal";
import ButtonReveal from "./animations/ButtonReveal";

class App {
  constructor() {
    this._createLenis();
    this._createTextReveals();
    this._createButtonReveals();
    this._render();
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.07,
    });
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

  _createButtonReveals() {
    const buttonItems = [
      ...document.querySelectorAll('[data-animation="button-reveal"]'),
    ];
    buttonItems.forEach((button, index) => {
      setTimeout(() => {
        new ButtonReveal({ element: button });
      }, 200 * index);
    });
  }

  _render(time) {
    this.lenis.raf(time);
    requestAnimationFrame(this._render.bind(this));
  }
}

new App();
