import { style } from "./style.js";
import cleiton from "./cleiton-profile.png";
import define from "@directive/define";

@define("c-header")
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.adoptedStyleSheets = [style];
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <header class="header">
        <figure class="header__profile">
          <img
            src=${cleiton}
            alt="Foto de perfil de Cleiton"
            loading="eager"
            class="header__image"
          />
        </figure>
        <section class="header__content">
          <p class="header__greeting">Olá, eu sou</p>
          <h1 class="header__title">Cleiton</h1>
          <p class="header__subtitle">Desenvolvedor Front End</p>
          <p class="header__description">Olá! Sou Cleiton Carlos, Desenvolvedor Front-end apaixonado por criar experiências web performáticas e acessíveis.</p>
        </section>
      </header>
    `;
  }
}

export default Header;
