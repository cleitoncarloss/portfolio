const define = (name) => (target) =>
  customElements.get(name) ?? customElements.define(name, target);

export default define;
