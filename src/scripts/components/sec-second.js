class SectionSecond extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="story" class="sec-second">
            <div class="container-img-second">
              <picture>
                <img tabindex="0" class="img-sec-second lazyload" data-src="../images/heros/ourstory.jpg" alt="woman enjoying food">
              </picture>
            </div>
            <div class="konten-second">
                <h2 tabindex="0" class="h2-judul-second">
                    Our Story
                </h2>
                <p tabindex="0" class="p-second">
                    We believe that every person go to the restaurant not only enjoying their food. How cozy the place, warm sensation, good services, you name it. That’s how the people want to experience. And WeResto will fullfil your needs.
                </p>
                <picture>
                  <img tabindex="0" class="appstore lazyload" data-src="../images/heros/appstore.jpg" alt="our apps also available on the appstore">
                </picture>
            </div>
        </section>
      `;
  }
}

customElements.define('sec-second', SectionSecond);
