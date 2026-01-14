import "./styles/global.js";
import Header from "./header/header.js";
import Projects from "./projects/projects.js";
import About from "./about/about.js";
import Contact from "./contact/contact.js";

customElements.define("c-header", Header);
customElements.define("c-projects", Projects);
customElements.define("c-about", About);
customElements.define("c-contact", Contact);
