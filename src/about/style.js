export const style = new CSSStyleSheet();

style.replaceSync(`
  :host {
    display: block;
  }

  .about {
    padding: 4rem;
    background-color: #1a1a2e;
  }

  .about__container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .about__title {
    font-size: 2.5rem;
    color: #ffffff;
    text-align: center;
    margin: 0 0 3rem 0;
  }

  .about__title::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #e94560;
    margin: 1rem auto 0;
  }

  .about__content {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
  }

  .about__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .about__paragraph {
    font-size: 1rem;
    color: #c0c0c0;
    line-height: 1.8;
    margin: 0;
  }

  .about__skills {
    flex: 1;
  }

  .about__skills-title {
    font-size: 1.25rem;
    color: #ffffff;
    margin: 0 0 1.5rem 0;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills-list__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #0f0f1a;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #ffffff;
    transition: background-color 0.3s ease;
  }

  .skills-list__item:hover {
    background-color: rgba(233, 69, 96, 0.2);
  }

  .skills-list__icon {
    width: 20px;
    height: 20px;
    color: #e94560;
  }

  @media (max-width: 768px) {
    .about {
      padding: 2rem;
    }

    .about__content {
      flex-direction: column;
    }

    .about__title {
      font-size: 2rem;
    }
  }
`)
