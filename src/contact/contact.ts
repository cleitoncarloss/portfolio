import { style } from "./style.js";
import icon from "./icon";
import translate from "./translate.js";
import define from "@directive/define";

@define("c-contact")
class Contact extends HTMLElement {
  #lang = "portuguese";

  static observedAttributes = ["language"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.adoptedStyleSheets = [style];
    document.addEventListener("languageSelected", (e) => {
      this.setAttribute("language", (e as CustomEvent).detail.language);
    });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.#lang = this.getAttribute("language") ?? "portuguese";
    this.render();
  }

  render() {
    const t = translate[this.#lang as keyof typeof translate];
    this.shadowRoot!.innerHTML = `
      <section class="contact">
        <div class="contact__container">
          <h2 class="contact__title">${t.title}</h2>
          <p class="contact__text">
            ${t.text}
          </p>
          <nav class="contact__social">
            <a
              href="https://wa.me/5519989174429"
              class="contact__social-link"
              target="_blank"
              title="${t.whatsappTitle}"
              rel="noopener"
              aria-label="WhatsApp"
            >
              ${icon.whatsApp()}
            </a>
            <a
              href="https://www.linkedin.com/in/cleiton-carlos/"
              class="contact__social-link"
              target="_blank"
              title="${t.linkedinTitle}"
              rel="noopener"
              aria-label="LinkedIn"
            >
              ${icon.linkedin()}
            </a>
            <a
              href="https://github.com/cleitoncarloss"
              class="contact__social-link"
              target="_blank"
              title="${t.githubTitle}"
              rel="noopener"
              aria-label="GitHub"
            >
              ${icon.github()}
            </a>
          </nav>
        </div>
      </section>
    `;
  }
}

export default Contact;
