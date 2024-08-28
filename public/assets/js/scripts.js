setTimeout(function() {
  window.onscroll = function() {
    scrollFunction();
  };

  window.onload = function() {
    removeFadeOut(document.getElementById("loading"), 2000);
    scrollFunction();
  };

  function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    el.style.transition = "opacity " + seconds + "s ease";

    el.style.opacity = 0;
    setTimeout(function() {
      el.parentNode.removeChild(el);
    }, speed);
  }

  var lastScrollTop = 40;

  function scrollFunction() {
    if (document.documentElement.scrollTop > 30) {
      document.getElementById("navbarsExampleDefault").classList.remove("open");

      document
        .getElementById("navbarExample")
        .classList.add("top-nav-collapse");

      document.getElementById("primary-menu").classList.add("black-text");

      if (lastScrollTop > document.documentElement.scrollTop) {
        document
          .getElementById("navbarExample")
          .classList.add("top-nav-collapse");

        document.getElementById("primary-menu").classList.add("black-text");
        document.getElementById("navbarExample").classList.remove("d-none");

        document.getElementById("blacklogo").classList.remove("d-none");
        document.getElementById("whitelogo").classList.add("d-none");

        document.getElementById("mblacklogo").classList.remove("d-none");
        document.getElementById("mwhitelogo").classList.add("d-none");
      } else {
        document.getElementById("navbarExample").classList.add("d-none");
      }
    } else if (document.documentElement.scrollTop < 30) {
      document.getElementById("blacklogo").classList.add("d-none");
      document.getElementById("whitelogo").classList.remove("d-none");

      document.getElementById("mblacklogo").classList.add("d-none");
      document.getElementById("mwhitelogo").classList.remove("d-none");

      document
        .getElementById("navbarExample")
        .classList.remove("top-nav-collapse");
      document.getElementById("primary-menu").classList.remove("black-text");
    }

    lastScrollTop = document.documentElement.scrollTop;
  }

  let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
  }

  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  });

  function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
      function() {
        const shouldOpen = _d.matches(":hover");
        _m.classList.toggle("show", shouldOpen);
        _d.classList.toggle("show", shouldOpen);

        _d.setAttribute("aria-expanded", shouldOpen);
      },
      e.type === "mouseleave" ? 300 : 0
    );
  }

  const dropdownCheck = document.querySelector(".dropdown");

  if (dropdownCheck !== null) {
    document
      .querySelector(".dropdown")
      .addEventListener("mouseleave", toggleDropdown);
    document
      .querySelector(".dropdown")
      .addEventListener("mouseover", toggleDropdown);

    document.querySelector(".dropdown").addEventListener("click", e => {
      const _d = e.target.closest(".dropdown");
      let _m = document.querySelector(".dropdown-menu", _d);
      if (_d.classList.contains("show")) {
        _m.classList.remove("show");
        _d.classList.remove("show");
      } else {
        _m.classList.add("show");
        _d.classList.add("show");
      }
    });
  }

  var cardSlider = new Swiper(".card-slider", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  var imageSlider = new Swiper(".image-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 50,
    slidesPerView: 5,
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window is <= 767px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window is <= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window is <= 1199px
      1199: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
}, 500);
