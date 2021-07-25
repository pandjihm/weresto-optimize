class SectionSecond extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="story" class="sec-second">
            <div class="container-img-second">
                <img tabindex="0" class="img-sec-second lazyload" src="../images/heros/ourstory.png" alt="woman enjoying food">
            </div>
            <div class="konten-second">
                <h2 tabindex="0" class="h2-judul-second">
                    Our Story
                </h2>
                <p tabindex="0" class="p-second">
                    We believe that every person go to the restaurant not only enjoying their food. How cozy the place, warm sensation, good services, you name it. That’s how the people want to experience. And WeResto will fullfil your needs.
                </p>
                <img tabindex="0" class="appstore" src="../images/heros/appstore.png" alt="our apps also available on the appstore">
            </div>
        </section>
      `;
  }
}

customElements.define('sec-second', SectionSecond);
