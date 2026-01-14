export const style = new CSSStyleSheet();

style.replaceSync(`
  :host {
    display: block;
  }

  .contact {
    padding: 4rem;
    background-color: #0f0f1a;
  }

  .contact__container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .contact__title {
    font-size: 2.5rem;
    color: #ffffff;
    margin: 0 0 1rem 0;
  }

  .contact__title::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #e94560;
    margin: 1rem auto 0;
  }

  .contact__text {
    font-size: 1.1rem;
    color: #c0c0c0;
    line-height: 1.8;
    margin: 2rem 0;
  }

  .contact__social {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .contact__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background-color: #1a1a2e;
    border-radius: 50%;
    color: #ffffff;
    text-decoration: none;
  }

  .contact__social-link:hover {
    background-color: #e94560;
  }

  .contact__social-icon {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 768px) {
    .contact {
      padding: 2rem;
    }

    .contact__title {
      font-size: 2rem;
    }
  }
`)
