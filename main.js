(function () {
  /* jshint validthis: true */
  'use strict';

  let posY = 0;
  const navBar = document.getElementById('nav-bar');
  const navMenu = document.querySelector('.collapse-menu');
  const menuToggle = document.querySelector('.nav-toggler');
  const sections = document.querySelectorAll('.section');


  //Debounce Function to minimize the numbers of scroll events
  function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  function checkSlide() {
    navBar.classList[posY > 5 ? 'add' : 'remove']('nav-bg');
    if (window.scrollY < posY) {
      removeClass();
    } else {
      addClass();
    }
    posY = window.scrollY;
    sections.forEach(section => {
      // half way through the image
      const sectionAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
      // bottom of the image
      const imageBottom = section.offsetTop + section.offsetHeight;
      const isHalfShown = sectionAt > section.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + section.id + ']').querySelector('span').setAttribute('class', 'active');
      }
    });
  }

  function removeClass() {
    navBar.classList.remove('hidden');
  }

  function addClass() {
    navBar.classList.add('hidden');
    navMenu.classList.remove('hidden');
  }

  function toggleHidden() {
    navMenu.classList.toggle('hidden');
  }

  menuToggle.addEventListener('click', toggleHidden);
  window.addEventListener('scroll', debounce(checkSlide));
  //Smooth scroll to nav throught page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}());