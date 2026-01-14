import { style } from "./style.js";
import skills from "./skills.js";

class About extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [style];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <section class="about">
        <div class="about__container">
          <h2 class="about__title">Sobre Mim</h2>
          <div class="about__content">
            <div class="about__text">
              <p class="about__paragraph">
                Sou Cleiton Carlos, desenvolvedor front-end motivado por criar experiências digitais que realmente fazem sentido para as pessoas.
                Atuei durante dois anos no desenvolvimento de aplicações educacionais, colaborando na construção de produtos que unem simplicidade,
                clareza e impacto real no dia a dia dos usuários.
              <p class="about__paragraph">
                Estou sempre aberto a novos desafios, trocas de conhecimento e oportunidades que me permitam crescer como profissional e como pessoa.
              </p>
            </div>
            <aside class="about__skills">
              <h3 class="about__skills-title">Habilidades</h3>
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
