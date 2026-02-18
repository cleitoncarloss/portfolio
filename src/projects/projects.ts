import { style } from "./style.js";
import informationProject from "./informationProjects.js"
import define from "@directive/define";

@define("c-projects")
class Projects extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.adoptedStyleSheets = [style];
  }

  connectedCallback() {
    this.render();
    this.popover();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <section class="projects">
        <h2 class="projects__title">Projetos</h2>
        <div class="projects__grid">
          ${informationProject.map(({ id, image, alt, title, description, stacks, text, url, redirect, details }) => `
            <article class="project-card">
              <img src="${image}" alt="${alt}" loading="eager" fetchpriority="high" class="project-card__image" />
              <div class="project-card__content">
                <h3 class="project-card__title">${title}</h3>
                <p class="project-card__description">${description}</p>
                <div class="project-card__tags">
                  ${stacks.map((stack) => `
                    <span class="project-card__tag">${stack}</span>`
                  ).join("")}
                </div>
                <div class="project-card__actions">
                  <a href=${url} title="${text}" class="project-card__link" target="${redirect}" rel="noopener">
                    ${text}
                    <svg class="project-card__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                  <button class="project-card__details-btn" popovertarget="popover-${id}">
                    Detalhes do projeto
                  </button>
                </div>
                <div id="popover-${id}" popover class="project-popover">
                  <h3 class="project-popover__title">${title}</h3>
                  <p class="project-popover__text">${details}</p>
                  <button class="project-popover__close" popovertarget="popover-${id}" popovertargetaction="hide">
                    Fechar
                  </button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  popover() {
    const popovers = this.shadowRoot!.querySelectorAll("[popover]");

    popovers.forEach((popover) => {
      popover.addEventListener("toggle", (event: Event) => {
        const toggleEvent = event as ToggleEvent;
        document.body.style.overflow = toggleEvent.newState === "open" ? "hidden" : "";
        this.classList.toggle("popover-open", toggleEvent.newState === "open");
      });
    });
  }
}

export default Projects;
