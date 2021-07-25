import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this.contents = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.contents.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
