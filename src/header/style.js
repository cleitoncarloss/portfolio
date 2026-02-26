export const style = new CSSStyleSheet();

style.replaceSync(`
  :host {
    display: block;
  }

  .header {
    align-items: start;
    display: flex;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    justify-content: center;
    padding: 3rem 4rem;
  }

  .header__container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .header__profile {
    margin: 0;
  }

  .header__image {
    border: 4px solid #e94560;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    width: 200px;
  }

  .header__content {
    display: flex;
    flex-direction: column;
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

  .header__language {
    padding: 4px;
    background: #0f0f1a;
    border: 1px solid #666;
    border-radius: 4px;
    color: #fff;
    font-size: 0.95rem;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .header__language:hover {
    border-color: #888;
  }

  .header__language:focus {
    outline: none;
    border-color: #e94560;
  }

  .header__language option {
    background: #1a1a2e;
    color: #fff;
  }

  @media(width >= 768px) {
    .header__container {
      flex-direction: row;
      gap: 20px;
    }

    .header__image {
      width: 150px;
      height: 150px;
    }

    .header__title {
      font-size: 2rem;
    }

    .header__language {
      right: 1rem;
      top: 1rem;
    }

  }
`)
