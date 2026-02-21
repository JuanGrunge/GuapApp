import "./style.css";
import { content } from "./content/content";
import { renderDossier } from "./views/renderDossier";
import { renderRider } from "./views/renderRider";
import Lenis from "lenis";
import logoGuapa from "./assets/logo-guapa.png";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page">
    <header class="header">
      <div class="brand" role="banner">
        <img class="brand-logo" src="${logoGuapa}" alt="GUAPA — Tributo LODVG" />
      </div>
    </header>

    <nav class="tabs" role="tablist" aria-label="Secciones">
      <button class="tab" data-route="#/" role="tab" aria-selected="true">Dossier</button>
      <button class="tab" data-route="#/rider" role="tab" aria-selected="false">Rider</button>
    </nav>

    <main id="view" class="view" role="main"></main>
  </div>
`;

const view = document.querySelector("#view");
const page = document.querySelector(".page");
const tabs = Array.from(document.querySelectorAll(".tab"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;
let slideshowTimer = null;

if (!prefersReducedMotion) {
  lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: true,
    lerp: 0.1,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}

function pauseLenis() {
  if (lenis) lenis.stop();
}

function resumeLenis() {
  if (lenis) lenis.start();
}

function stopSlideshow() {
  if (slideshowTimer) {
    clearInterval(slideshowTimer);
    slideshowTimer = null;
  }
}

function initSlideshow() {
  stopSlideshow();
  if (prefersReducedMotion) return;
  const el = view.querySelector("[data-slideshow]");
  if (!el) return;
  const slides = Array.from(el.querySelectorAll(".slide"));
  const captionEl = el.querySelector("[data-caption]");
  if (slides.length < 2) return;
  slides.forEach((slide, idx) => slide.classList.toggle("is-active", idx === 0));
  let index = 0;
  if (captionEl) {
    captionEl.textContent = slides[0].dataset.name || "";
    captionEl.classList.add("is-visible");
  }
  slideshowTimer = setInterval(() => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
    if (captionEl) {
      captionEl.classList.remove("is-visible");
      const next = slides[index];
      setTimeout(() => {
        captionEl.textContent = next.dataset.name || "";
        captionEl.classList.add("is-visible");
      }, 160);
    }
  }, 4500);
}

const modalBackdrop = document.createElement("div");
modalBackdrop.className = "modal-backdrop";
modalBackdrop.innerHTML = `
  <div class="modal" role="dialog" aria-modal="true" aria-label="Stage plot ampliado">
    <button class="modal-close" type="button" aria-label="Cerrar">×</button>
    <div class="modal-body"></div>
  </div>
`;
document.body.appendChild(modalBackdrop);

const modalBody = modalBackdrop.querySelector(".modal-body");
const modalClose = modalBackdrop.querySelector(".modal-close");

function openModalWithSvg(svg) {
  if (!svg) return;
  modalBody.innerHTML = svg.outerHTML;
  modalBackdrop.classList.add("is-open");
  document.body.classList.add("modal-open");
  pauseLenis();
}

function closeModal() {
  modalBackdrop.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  modalBody.innerHTML = "";
  resumeLenis();
}

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

modalClose.addEventListener("click", closeModal);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
    closeModal();
  }
});

let revealObserver = null;
if (!prefersReducedMotion) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
}

function normalizeHash(hash) {
  if (!hash || hash === "#") return "#/";
  return hash;
}

function setActiveTab(hash) {
  tabs.forEach((btn) => {
    const isActive = btn.dataset.route === hash;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
}

function renderRoute() {
  const hash = normalizeHash(window.location.hash);
  setActiveTab(hash);
  view.classList.toggle("view--dossier", hash !== "#/rider");
  view.classList.toggle("view--rider", hash === "#/rider");
  page.classList.toggle("page--dossier", hash !== "#/rider");
  page.classList.toggle("page--rider", hash === "#/rider");

  if (hash === "#/rider") {
    renderRider(view, content);
    stopSlideshow();
  } else {
    renderDossier(view, content);
    initSlideshow();
  }

  if (!prefersReducedMotion && revealObserver) {
    const revealTargets = Array.from(view.querySelectorAll(".hero, .card, .story-block"));
    revealTargets.forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
  }
}

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const route = btn.dataset.route;
    window.location.hash = route;
  });
});

view.addEventListener("click", (event) => {
  const stagePlot = event.target.closest(".stage-plot");
  if (stagePlot) {
    const img = stagePlot.querySelector("img.stageplot-img");
    if (img) {
      modalBody.innerHTML = `
        <img class="modal-stageplot-img" src="${img.src}" alt="${img.alt || "Stage plot"}" />
      `;
      modalBackdrop.classList.add("is-open");
      document.body.classList.add("modal-open");
      pauseLenis();
      return;
    }

    const svg = stagePlot.querySelector('svg[aria-label="Stage plot GUAPA"]');
    openModalWithSvg(svg);
  }
});

view.addEventListener("load", (event) => {
  if (prefersReducedMotion) return;
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  if (!img.classList.contains("hero-img")) return;
  const hero = img.closest(".hero");
  if (hero) hero.classList.add("is-visible");
}, true);

window.addEventListener("hashchange", renderRoute);
renderRoute();
