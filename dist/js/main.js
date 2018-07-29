//NavBar module
(function () {
  "use strict";

  const navMenu = document.querySelector(".collapse-menu");
  const menuToggle = document.querySelector(".nav-toggler");
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("resize", navToggler);
  function navToggler() {
    const size = document.body.clientWidth;
    if (size < 700) {
      navMenu.classList.add("mobile");
      menuToggle.classList.add("mobile");
      console.log(size);
    } else if (navMenu.classList.contains("mobile") && menuToggle.classList.contains("mobile")) {
      navMenu.classList.remove("mobile");
      menuToggle.classList.remove("mobile");
    }
  }
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
    sections.forEach(function (section) {
      const sectionAt = window.scrollY + window.innerHeight - section.offsetHeight / 2;
      const imageBottom = section.offsetTop + section.offsetHeight;
      const isHalfShown = sectionAt > section.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        document.querySelector(".active").setAttribute("class", " ");
        document.querySelector("a[href*=" + section.id + "]").querySelector("span").setAttribute("class", "active");
      }
    });
  }

  function toggleHidden() {
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("close");
  }

  links.forEach(function (link) {
    return link.addEventListener("click", toggleHidden);
  });
  menuToggle.addEventListener("click", toggleHidden);
  window.addEventListener("scroll", debounce(checkSlide));
  //Smooth scroll to nav throught page
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  navToggler();
})();

//Panels for Portfolio
(function () {
  "use strict";

  const panels = document.querySelectorAll(".project-tile");
  panels.forEach(function (panel) {
    return panel.addEventListener("click", toggleOpen);
  });
  panels.forEach(function (panel) {
    return panel.addEventListener("transitionend", toggleActive);
  });

  function toggleOpen() {
    this.classList.toggle("open");
    this.children[2].classList.toggle("show");
  }

  function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("active");
    }
  }
})();

//Put year on footer
document.getElementById("footerTxt").innerHTML = `minggas@${new Date().getFullYear()}`;
