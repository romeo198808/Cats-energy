'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');
  var toggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav__nojs');

  toggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (toggle.classList.contains('main-nav__toggle--close')) {
      toggle.classList.remove('main-nav__toggle--close');
      toggle.classList.add('main-nav__toggle--open');
      mainNav.style="display: block;"
    } else {
      toggle.classList.remove('main-nav__toggle--open');
      toggle.classList.add('main-nav__toggle--close');
      mainNav.style="display: none;"
    }
  });
})();
