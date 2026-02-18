export const style = new CSSStyleSheet();

style.replaceSync(`
  :host {
    display: block;
  }

  .projects {
    padding: 4rem;
    background-color: #0f0f1a;
  }

  .projects__title {
    font-size: 2.5rem;
    color: #ffffff;
    text-align: center;
    margin: 0 0 3rem 0;
  }

  .projects__title::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #e94560;
    margin: 1rem auto 0;
  }

  .projects__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project-card {
    flex: 1 1 300px;
    max-width: 350px;
    background-color: #1a1a2e;
    border-radius: 12px;
    overflow: hidden;
  }

  .project-card__iframe {
    width: 100%;
    height: 200px;
    border: none;
    pointer-events: none;
  }

  .project-card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-card__content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-card__title {
    font-size: 1.25rem;
    color: #ffffff;
    margin: 0;
  }

  .project-card__description {
    font-size: 0.9rem;
    color: #a0a0a0;
    line-height: 1.5;
    margin: 0;
  }

  .project-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .project-card__tag {
    font-size: 0.75rem;
    color: #FF5C77;
    background-color: rgba(233, 69, 96, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }

  .project-card__link {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: #ffffff;
    background-color: #e94560;
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .project-card__link:hover {
    background-color: #d63850;
  }

  .project-card__link-icon {
    width: 16px;
    height: 16px;
  }

  .project-card__actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .project-card__details-btn {
    flex: 1;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: #e94560;
    background-color: transparent;
    border: 1px solid #e94560;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .project-card__details-btn:hover {
    background-color: #e94560;
    color: #ffffff;
  }

  .project-popover {
    position: fixed;
    inset: 0;
    margin: auto;
    max-height: 80vh;
    max-width: 300px;
    padding: 2rem;
    background-color: #1a1a2e;
    border: 1px solid #e94560;
    border-radius: 12px;
    color: #ffffff;
    width: 100%;
  }

  :host(.popover-open) .project-card__actions {
    pointer-events: none;
  }

  .project-popover::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .project-popover__title {
    font-size: 1.5rem;
    color: #e94560;
    margin: 0 0 1rem 0;
  }

  .project-popover__text {
    font-size: 1rem;
    color: #c0c0c0;
    line-height: 1.8;
    margin: 0 0 1.5rem 0;
  }

  .project-popover__close {
    background-color: #e94560;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    font-size: 0.9rem;
    padding: 0.75rem;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .project-popover__close:hover {
    background-color: #d63850;
  }

  @media (max-width: 768px) {
    .projects {
      padding: 2rem;
    }

    .projects__title {
      font-size: 2rem;
    }

    .project-popover__title {
      font-size: 1.25rem;
    }

    .project-popover__text {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`)
