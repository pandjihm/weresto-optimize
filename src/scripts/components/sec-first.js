class SectionFirst extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section>
            <div class="bg-img">
                <div class="first">                    
                    <h1 tabindex="0" class="second">Experience Iconic Restaurant</h1>
                    <a href="#story">
                        <button class="tombol">Learn more</button>
                    </a>                   
                </div>
            </div>
        </section>
        `;
  }
}

customElements.define('sec-first', SectionFirst);
