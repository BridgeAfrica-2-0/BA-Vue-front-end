 var v = document.getElementById("Test_Video");


var v2 = document.getElementById("Test_Video2");

var v3 = document.getElementById("Test_Video3");
 
// v.playbackRate = 0.8;
// v2.playbackRate = 0.8;
// v3.playbackRate = 0.8;



const scrollElements = document.querySelectorAll(".js-scroll");


const scrollElements2 = document.querySelectorAll(".hidde");




const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    console.log(document.documentElement.clientHeight);

    return (
        elementTop <=
        (30) / dividend
        //( 100) / dividen
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");





};

const displayScrollElement2 = (element) => {
    element.classList.add("js-scrolll");





};

const hideScrollElement2 = (element) => {
    element.classList.remove("js-scrolll");

};


const hideScrollElement = (element) => {
    element.classList.remove("scrolled");

};


const handleScrollAnimation = () => {

    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);



        } else if (elementOutofView(el)) {
            hideScrollElement(el);



        }
    });


    scrollElements2.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement2(el);




        } else if (elementOutofView(el)) {
            hideScrollElement2(el);




        }
    })

}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});






!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
   
      $('#preloader').delay(10).fadeOut('slow', function() {   
        $(this).remove();
      });
   
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }  
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu orangee"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu orangee icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu orangee icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
       //
       
      
       main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
     //   $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  // $(window).on('load', function() {
  //   var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item'
  //   });

  //   $('#portfolio-flters li').on('click', function() {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');

  //     portfolioIsotope.isotope({
  //       filter: $(this).data('filter')
  //     });
  //     aos_init();
  //   });

//     // Initiate venobox (lightbox feature used in portofilo)
//     $(document).ready(function() {
//       $('.venobox').venobox({
//         'share': false
//       });
//     });
//   });

//   // Portfolio details carousel
//   $(".portfolio-details-carousel").owlCarousel({
//     autoplay: true,
//     dots: true,
//     loop: true,
//     items: 1
//   });

//   // Init AOS
//   function aos_init() {
//     AOS.init({
//       duration: 100,
//       once: true
//     });
//   }
//   $(window).on('load', function() {
//     aos_init();
//   });     

// })(jQuery);
})