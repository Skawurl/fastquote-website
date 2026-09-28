// Shared site JS — footer year + data-link wiring. Deliberately minimal:
// content visibility must never depend on JS.
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Wire [data-link] elements
    document.querySelectorAll("[data-link]").forEach(el => {
      const url = LINKS[el.dataset.link];
      if (url) {
        el.href = url;
        if (!url.startsWith("mailto:")) { el.target = "_blank"; el.rel = "noopener"; }
      }
    });

    // Footer year
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  } catch (err) {
    if (window.console) console.error("fastQuote site.js:", err);
  }
});