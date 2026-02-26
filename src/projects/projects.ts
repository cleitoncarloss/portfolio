import { style } from "./style.js";
import informationProject from "./informationProjects.js";
import translate from "./translate.js";
import define from "@directive/define";

@define("c-projects")
class Projects extends HTMLElement {
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
    this.popover();
  }

  attributeChangedCallback() {
    this.#lang = this.getAttribute("language") ?? "portuguese";
    this.render();
  }

  render() {
    const t = translate[this.#lang as keyof typeof translate];
    const projects = t.projects;
    this.shadowRoot!.innerHTML = `
      <section class="projects">
        <h2 class="projects__title">${t.title}</h2>
        <div class="projects__grid">
          ${informationProject.map(({ id, image, title, stacks, url, redirect }) => {
            const project = projects.find((p: { id: number }) => p.id === id);
            return `
            <article class="project-card">
              <img src="${image}" alt="${project?.alt}" loading="eager" fetchpriority="high" class="project-card__image" />
              <div class="project-card__content">
                <h3 class="project-card__title">${title}</h3>
                <p class="project-card__description">${project?.description}</p>
                <div class="project-card__tags">
                  ${stacks.map((stack: string) => `
                    <span class="project-card__tag">${stack}</span>`
                  ).join("")}
                </div>
                <div class="project-card__actions">
                  <a href=${url} title="${project?.text}" class="project-card__link" target="${redirect}" rel="noopener">
                    ${project?.text}
                    <svg class="project-card__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                  <button class="project-card__details-btn" popovertarget="popover-${id}">
                    ${t.detailsBtn}
                  </button>
                </div>
                <div id="popover-${id}" popover class="project-popover">
                  <h3 class="project-popover__title">${title}</h3>
                  <p class="project-popover__text">${project?.details}</p>
                  <button class="project-popover__close" popovertarget="popover-${id}" popovertargetaction="hide">
                    ${t.closeBtn}
                  </button>
                </div>
              </div>
            </article>
          `;
          }).join("")}
        </div>
      </section>
    `;
    this.popover();
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
