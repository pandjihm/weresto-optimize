const btnToggle = document.querySelector('.menu-toggle');
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

btnToggle.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    if (menuToggle.checked) {
      menuToggle.checked = false;
    } else {
      menuToggle.checked = true;
    }
    nav.classList.toggle('slide');
  }
});

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});
