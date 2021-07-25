class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="main-footer">
            <p tabindex="0" class="p-footer">
                Copyright © 2021 - WeResto
            </p>
        </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
