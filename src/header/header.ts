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
        <div class="header__language" role="tablist" aria-label="Selecionar idioma">
          <button
            type="button"
            role="tab"
            class="header__language-tab"
            data-lang="portuguese"
            aria-selected="${this.#lang === "portuguese"}"
          >🇧🇷 PT</button>
          <button
            type="button"
            role="tab"
            class="header__language-tab"
            data-lang="english"
            aria-selected="${this.#lang === "english"}"
          >🇺🇸 EN</button>
          <button
            type="button"
            role="tab"
            class="header__language-tab"
            data-lang="espanhol"
            aria-selected="${this.#lang === "espanhol"}"
          >🇪🇸 ES</button>
        </div>
        <hr class="header__divider" />
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
      </header>
    `;
    this.#setupLangSwitcher();
  }

  #setupLangSwitcher() {
    const tabs = this.shadowRoot!.querySelectorAll(".header__language-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const value = (tab as HTMLElement).dataset.lang!;
        this.#lang = value;
        document.dispatchEvent(
          new CustomEvent("languageSelected", {
            detail: { language: value },
            bubbles: true,
          })
        );
        this.render();
      });
    });
  }
}

export default Header;
