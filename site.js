// Shared site JS — footer year + scroll reveal + active nav
document.addEventListener("DOMContentLoaded", () => {
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
});
<script data-goatcounter="https://fast-quote.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>