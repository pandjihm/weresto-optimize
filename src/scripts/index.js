import 'regenerator-runtime'; /* for async await transpile */

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/app-bar';
import './components/sec-first';
import './components/sec-second';
import './components/sec-third';
import './components/sec-fourth';
import './components/footer-bar';

import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/humberger.css';
import '../styles/restaurant.css';
import '../styles/spinner.css';

import App from './views/app';
import './utils/toggle';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
