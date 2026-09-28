// Shared site JS — footer year + scroll reveal + active nav
//
// Arm the scroll-reveal FIRST: the CSS only hides .reveal elements when
// <html> carries this class, and only this file adds it. If site.js ever
// fails to load or parse again, nothing gets armed and every grid stays
// visible — content must never depend on JS to appear.
document.documentElement.classList.add("reveal-armed");

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

    // Scroll reveal
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    }
  } catch (err) {
    // Never let a runtime error hide content: reveal everything.
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    if (window.console) console.error("fastQuote site.js:", err);
  }
});