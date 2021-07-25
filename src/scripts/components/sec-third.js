class SectionThird extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="sec-third">
            <h2 tabindex="0" class="h2-judul-third">
                What We Offer
            </h2>
            <div class="grid-third">
                <div class="icon-third">
                    <img tabindex="0" src="../images/heros/circle.svg" width="50vh" alt="icon optimize">
                    <h4 tabindex="0" class="h4-judul">
                        Optimize your search
                    </h4>
                    <p tabindex="0" class="p-third">
                        Optimize your search based on what you like the most
                    </p>
                </div>
                <div class="icon-third">
                    <img tabindex="0" src="../images/heros/square.svg" width="50vh" alt="icon best">
                    <h4 tabindex="0" class="h4-judul">
                        Best Restaurant
                    </h4>
                    <p tabindex="0" class="p-third">
                        We only give you the best and high rating restaurant
                    </p>
                </div>
                <div class="icon-third">
                    <img tabindex="0" src="../images/heros/square45.svg" width="50vh" alt="icon honest">
                    <h4 tabindex="0" class="h4-judul">
                        Honest Review
                    </h4>
                    <p tabindex="0" class="p-third">
                        The review come from expertise
                    </p>
                </div>
        </section>
          `;
  }
}

customElements.define('sec-third', SectionThird);
