/* =========================================
   IELTS Coaching Site — main.js
   Purpose: small UX helpers only
   ========================================= */

(function () {
  "use strict";

  /* ---------- Footer year (backup if inline JS removed) ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Smooth scroll for internal anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({
        behaviour: "smooth",
        block: "start"
      });
    });
  });

  /* ---------- Simple form guard (future use) ---------- */
  const forms = document.querySelectorAll("form[data-guard]");
  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      const requiredFields = form.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add("field-error");
        } else {
          field.classList.remove("field-error");
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Please complete all required fields.");
      }
    });
  });

  /* ---------- Console sanity check (remove in production if you want) ---------- */
  if (window.location.hostname === "localhost") {
    console.log("IELTS Coaching site loaded successfully.");
  }

})();

