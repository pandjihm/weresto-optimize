class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="main-header">
            <div class="container">
                <h1 class="mh-logo">
                    <a class="a-logo" href="index.html">
                        <img src="../images/heros/logo_weresto.svg" width="70%" alt="WeResto is Engaging Restaurants App" />
                    </a>
                </h1>
                <nav id="drawer" class="main-nav">
                    <button tabindex="0" class="menu-toggle" aria-label="navigation-menu">
                        <input tabindex="-1" type="checkbox" title="HumbergerMenu" id="toggler">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>
                    <ul class="main-nav-list">
                        <li class="main-nav-item"><a href="#/">Home</a></li>
                        <li class="main-nav-item"><a href="#/like">Favorite</a></li>
                        <li class="main-nav-item"><a href="https://github.com/pandjihm">About Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
