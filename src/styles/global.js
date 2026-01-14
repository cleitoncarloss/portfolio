export const globalStyle = new CSSStyleSheet();

globalStyle.replaceSync(`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0f0f1a;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
  }
`)

document.adoptedStyleSheets = [globalStyle];
