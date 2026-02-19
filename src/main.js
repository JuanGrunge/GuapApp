import "./style.css";
import { content } from "./content/content";
import { renderDossier } from "./views/renderDossier";
import { renderRider } from "./views/renderRider";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page">
    <header class="header">
      <div class="title">${content.band.name}</div>
      <div class="subtitle">${content.band.subtitle || "Tributo"}</div>
    </header>

    <nav class="tabs" role="tablist" aria-label="Secciones">
      <button class="tab" data-route="#/" role="tab" aria-selected="true">Dossier</button>
      <button class="tab" data-route="#/rider" role="tab" aria-selected="false">Rider</button>
    </nav>

    <main id="view" class="view" role="main"></main>
  </div>
`;

const view = document.querySelector("#view");
const tabs = Array.from(document.querySelectorAll(".tab"));

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

  if (hash === "#/rider") {
    renderRider(view, content);
  } else {
    renderDossier(view, content);
  }
}

tabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const route = btn.dataset.route;
    window.location.hash = route;
  });
});

window.addEventListener("hashchange", renderRoute);
renderRoute();
