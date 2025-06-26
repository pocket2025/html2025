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

      // date range picker active
      $(function () {
         $(".daterangepicker-active").daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 1901,
            maxYear: parseInt(moment().format("YYYY"), 10),
         });
      });
   });
})(jQuery);

// choice js active
document.addEventListener("DOMContentLoaded", function () {
   const selectElements = document.querySelectorAll("select");

   selectElements.forEach((select) => {
      new Choices(select, {
         allowHTML: true,
         placeholder: true,
      });
   });
});

// image upload
document.addEventListener("DOMContentLoaded", function () {
   const inputs = document.querySelectorAll(".upload-input");

   inputs.forEach((input) => {
      input.addEventListener("change", function () {
         const file = this.files[0];
         if (!file || !file.type.startsWith("image/")) return;

         const reader = new FileReader();
         reader.onload = function (e) {
            const label = input.closest("label");
            const preview = label.querySelector(".preview-img");
            if (preview) {
               preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            }
         };
         reader.readAsDataURL(file);
      });
   });
});
