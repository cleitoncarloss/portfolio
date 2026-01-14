export const style = new CSSStyleSheet();

style.replaceSync(`
  :host {
    display: block;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 4rem;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }

  .header__profile {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .header__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #e94560;
  }

  .header__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 2rem;
  }

  .header__greeting {
    font-size: 1.25rem;
    color: #e94560;
    margin: 0;
  }

  .header__title {
    font-size: 2.5rem;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
  }

  .header__subtitle {
    font-size: 1.5rem;
    color: #a0a0a0;
    margin: 0;
  }

  .header__description {
    font-size: 1rem;
    color: #c0c0c0;
    line-height: 1.6;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      padding: 2rem;
      text-align: center;
    }

    .header__content {
      padding-left: 0;
      padding-top: 1.5rem;
      align-items: center;
    }

    .header__image {
      width: 150px;
      height: 150px;
    }

    .header__title {
      font-size: 2rem;
    }
  }
`)
