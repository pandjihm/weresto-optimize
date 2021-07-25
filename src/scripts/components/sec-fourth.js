class SectionFourth extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="sec-fourth">
            <h2 tabindex="0" class="h2-judul-fourth">
                Media Partner
            </h2>
            <div class="grid-fourth">
                <div class="img-partner">
                    <img tabindex="0" src="../images/heros/dailysocial.svg" alt="logo daily social">
                </div>
                <div class="img-partner">
                    <img tabindex="0" src="../images/heros/techinasia.svg" alt="logo tech in asia">
                </div>
            </div>
        </section>
      `;
  }
}

customElements.define('sec-fourth', SectionFourth);
