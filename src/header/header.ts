import { style } from "./style.js";
import cleiton from "./cleiton-profile.png";
import translate from "./translate.js";
import define from "@directive/define";

@define("c-header")
class Header extends HTMLElement {
  #lang = "portuguese";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.adoptedStyleSheets = [style];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const t = translate[this.#lang as keyof typeof translate];
    this.shadowRoot!.innerHTML = `
      <header class="header">
        <div class="header__container">
          <figure class="header__profile">
            <img
              src=${cleiton}
              alt="${t.imgAlt}"
              loading="eager"
              class="header__image"
            />
          </figure>
          <section class="header__content">
            <p class="header__greeting">${t.greeting}</p>
            <h1 class="header__title">Cleiton</h1>
            <p class="header__subtitle">${t.subtitle}</p>
            <p class="header__description">${t.description}</p>
          </section>
        </div>
        <select class="header__language" aria-label="Selecionar indioma">
          <option value="portuguese" ${this.#lang === "portuguese" ? "selected" : ""}>🇧🇷 PT</option>
          <option value="english" ${this.#lang === "english" ? "selected" : ""}>🇺🇸 EN</option>
          <option value="espanhol" ${this.#lang === "espanhol" ? "selected" : ""}>🇪🇸 ES</option>
        </select>
      </header>
    `;
    this.#setupLangSwitcher();
  }

  #setupLangSwitcher() {
    const select = this.shadowRoot!.querySelector(".header__language") as HTMLSelectElement;
    select?.addEventListener("change", () => {
      const value = select.value;
      this.#lang = value;
      document.dispatchEvent(
        new CustomEvent("languageSelected", {
          detail: { language: value },
          bubbles: true,
        })
      );
      this.render();
    });
  }
}

export default Header;
