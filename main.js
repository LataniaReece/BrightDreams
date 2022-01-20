// REset to top of page before refreshing/loading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.body.style.opacity = '0';
};

// Preloader
const loader = document.getElementById('preloader');
window.addEventListener('load', () => {
  loader.style.display = 'none';
});

const smallNavButtonEl = document.querySelector('.small-nav-button');
const smallNavButtonIconEl = document.querySelector('.small-nav-button i');
const navLinksEl = document.querySelector('.nav-links');
const allNavLinks = document.querySelectorAll('.nav-links .nav-link');

const navSlide = () => {
  smallNavButtonEl.addEventListener('click', () => {
    // Toggle Nav
    navLinksEl.classList.toggle('show');
    // Animate Links
    allNavLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    if (navLinksEl.classList.contains('show')) {
      const newLogoEL = document.createElement('h4');
      newLogoEL.innerHTML =
        ' <img src="./assets/images/flower.png" alt="" />Bright<span>Dreams</span>Inc';
      newLogoEL.classList.add('logo');
      navLinksEl.insertAdjacentElement('afterbegin', newLogoEL);
    }

    smallNavButtonIconEl.classList.toggle('open');
    // Change caret sign
    if (smallNavButtonIconEl.classList.contains('open')) {
      document.querySelector('.navbar .logo').style.opacity = '0';
      smallNavButtonIconEl.style.animation = 'caretRotateUp 0.5s ease forwards';
      document.getElementById('overlay').style.opacity = '1';
    } else {
      document.querySelector('.navbar .logo').style.opacity = '1';
      smallNavButtonIconEl.style.animation =
        'caretRotateDown 0.5s ease forwards';
      document.getElementById('overlay').style.opacity = '0';
      smallNavButtonEl.style.pointerEvents = 'none';

      if (document.querySelector('.nav-links h4')) {
        setTimeout(function () {
          document.querySelector('.nav-links h4').remove();
          smallNavButtonEl.style.pointerEvents = 'auto';
        }, 1000);
      }
    }
  });
};

navSlide();
