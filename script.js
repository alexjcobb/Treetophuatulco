document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}
// GA4 booking-link tracking
document.querySelectorAll(
  'a[href*="explorehuatulco.com/Escapia/Details/2104-279857"]'
).forEach(function(link) {
  link.addEventListener("click", function() {
    if (typeof gtag === "function") {
      gtag("event", "booking_click", {
        link_url: this.href,
        link_text: this.textContent.trim()
      });
    }
  });
});

// GA4 email-link tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
  link.addEventListener("click", function() {
    if (typeof gtag === "function") {
      gtag("event", "email_click", {
        link_url: this.href,
        link_text: this.textContent.trim()
      });
    }
  });
});

// GA4 phone-link tracking
document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
  link.addEventListener("click", function() {
    if (typeof gtag === "function") {
      gtag("event", "phone_click", {
        link_url: this.href,
        link_text: this.textContent.trim()
      });
    }
  });
});

// GA4 Instagram-link tracking
document.querySelectorAll(
  'a[href*="instagram.com/treetophuatulco"]'
).forEach(function(link) {
  link.addEventListener("click", function() {
    if (typeof gtag === "function") {
      gtag("event", "instagram_click", {
        link_url: this.href,
        link_text: this.textContent.trim()
      });
    }
  });
});

