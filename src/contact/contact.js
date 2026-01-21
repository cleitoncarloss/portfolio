import { style } from "./style.js";
import icon from "./icon";

class Contact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [style];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <section class="contact">
        <div class="contact__container">
          <h2 class="contact__title">Contato</h2>
          <p class="contact__text">
            Vamos trabalhar juntos? Entre em contato comigo através das redes
            sociais abaixo. Estou sempre aberto a novas oportunidades e projetos
            interessantes.
          </p>
          <nav class="contact__social">
            <a
              href="https://wa.me/5519989174429"
              class="contact__social-link"
              target="_blank"
              title="Entrar em contato comigo via WhatsApp"
              rel="noopener"
              aria-label="WhatsApp"
            >
              ${icon.whatsApp()}
            </a>
            <a
              href="https://www.linkedin.com/in/cleiton-carlos/"
              class="contact__social-link"
              target="_blank"
              title="Acessar meu perfil profissional no LinkedIn"
              rel="noopener"
              aria-label="LinkedIn"
            >
              ${icon.linkedin()}
            </a>
            <a
              href="https://github.com/cleitoncarloss"
              class="contact__social-link"
              target="_blank"
              title="Ver meus projetos e repositórios no GitHub"
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
