import { style } from "./style.js";
import skills from "./skills.js";
import translate from "./translate.js";
import define from "@directive/define";

@define("c-about")
class About extends HTMLElement {
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
      <section class="about">
        <div class="about__container">
          <h2 class="about__title">${t.title}</h2>
          <div class="about__content">
            <div class="about__text">
              <p class="about__paragraph">
                ${t.paragraph1}
              </p>
              <p class="about__paragraph">
                ${t.paragraph2}
              </p>
            </div>
            <aside class="about__skills">
              <h3 class="about__skills-title">${t.skillsTitle}</h3>
              <ul class="skills-list">
                ${skills.map(skill => `
                  <li class="skills-list__item">${skill}</li>
                `).join("")}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    `;
  }
}

export default About;
