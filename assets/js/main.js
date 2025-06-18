(function ($) {
   "use strict";

   jQuery(document).ready(function ($) {
      // sidebar collapse active
      function toggleTooltips() {
         if ($(".sidebar").hasClass("collapsed")) {
            $('[data-bs-toggle="tooltip"]').tooltip();
         } else {
            $('[data-bs-toggle="tooltip"]').tooltip("dispose");
         }
      }

      // Initial check
      toggleTooltips();

      $(".sidebar__collapse-btn").click(function () {
         $(".sidebar").toggleClass("collapsed");
         toggleTooltips();
      });

      // sidebar show/hide
      $(".sidebar-toggle").click(function () {
         $(".sidebar, .sidebar__overlay").addClass("show");
      });
      $(".sidebar__close-btn, .sidebar__overlay").click(function () {
         $(".sidebar, .sidebar__overlay").removeClass("show");
      });

      // AOS Active
      AOS.init({
         // Global settings:
         disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
         startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
         initClassName: "aos-init", // class applied after initialization
         animatedClassName: "aos-animate", // class applied on animation
         useClassNames: false, // if true, will add content of data-aos as classes on scroll
         disableMutationObserver: false, // disables automatic mutations' detections (advanced)
         debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
         throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

         // Settings that can be overridden on per-element basis, by data-aos-* attributes:
         offset: 120, // offset (in px) from the original trigger point
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 1000, // values from 0 to 3000, with step 50ms
         easing: "ease-in-out", // default easing for AOS animations
         once: true, // whether animation should happen only once - while scrolling down
         mirror: false, // whether elements should animate out while scrolling past them
         anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
   });
})(jQuery);

// testimonial slider active
var testimonialSlider = new Swiper(".testimonial-slider", {
   loop: true,
   spaceBetween: 20,
   speed: 1000,
   // autoplay: {
   //    delay: 3500,
   // },
});

// service slider active
var serviceSlider = new Swiper(".service__slider", {
   // loop: true,
   slidesPerView: 3,
   spaceBetween: 24,
   speed: 1000,
   // autoplay: {
   //    delay: 3500,
   // },
   navigation: {
      nextEl: ".service__slider-btn-next",
      prevEl: ".service__slider-btn-prev",
   },
   breakpoints: {
      0: {
         spaceBetween: 16,
         slidesPerView: 1,
      },
      576: {
         slidesPerView: 2,
         spaceBetween: 16,
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 16,
      },
      1200: {
         spaceBetween: 24,
      },
   },
});
