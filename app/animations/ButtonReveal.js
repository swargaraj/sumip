import gsap from "gsap";
import Observer from "../classes/Observer";

export default class Button extends Observer {
  constructor({ element }) {
    super({ element });

    this.element = element;
    this.text = element.querySelector("span span");
    this.textWrapper = element.querySelector("span");
    this.icon = element.querySelector("svg");

    this.timeline = gsap.timeline({
      default: {
        duration: 1,
        ease: "power3",
      },
    });
  }

  onEnter() {
    this.timeline
      .to(this.element, {
        scale: 1,
        delay: 0.6,
        duration: 0.5,
      })
      .to(
        this.textWrapper,
        {
          width: "auto",
        },
        "-=0.3"
      )
      .to(
        this.text,
        {
          y: 0,
        },
        "-=0.5"
      )
      .to(
        this.icon,
        {
          x: 0,
          opacity: 1,
          width: "auto",
        },
        "-=0.6"
      );
  }
}
