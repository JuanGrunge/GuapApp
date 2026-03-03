import heroGuapa from "../assets/hero-guapa.webp";
import guapa01 from "../assets/dossier/guapa-01.webp";
import guapa02Webm from "../assets/dossier/guapa-02.webm";
import imgJuan from "../assets/dossier/guapa-03-juan.webp";
import imgNano from "../assets/dossier/guapa-03-nano.webp";
import imgMarce from "../assets/dossier/guapa-03-marce.webp";
import imgSamuel from "../assets/dossier/guapa-03-samuel.webp";
import imgNacho from "../assets/dossier/guapa-03-nacho.webp";

function renderParagraphs(paragraphs) {
  return paragraphs.map((p) => `<p>${p}</p>`).join("");
}

function renderPlatformButtons(platforms) {
  return platforms
    .map(
      (p) => `
        <a class="btn" href="${p.url}" target="_blank" rel="noopener">${p.label}</a>
      `
    )
    .join("");
}

function renderContactItems(items) {
  return items
    .map((item) => {
      if (item.url) {
        return `
          <div class="list-item">
            <div class="label">${item.label}</div>
            <a class="value" href="${item.url}" target="_blank" rel="noopener">${item.value}</a>
          </div>
        `;
      }

      return `
        <div class="list-item">
          <div class="label">${item.label}</div>
          <div class="value">${item.value}</div>
        </div>
      `;
    })
    .join("");
}

export function renderDossier(container, content) {
  container.innerHTML = `
    <section class="hero" aria-label="Portada dossier GUAPA">
      <img class="hero-img" src="${heroGuapa}" alt="Portada: La Oreja de Van Gogh — GUAPA" loading="eager" fetchpriority="high" decoding="async" draggable="false" />
    </section>

    <section class="dossier-story">
      <article class="story-block story-block--left story-block--hero">
        <div class="story-text">
          <div class="eyebrow">01 — Experiencia</div>
          <p class="story-p">${content.dossier.description[0]}</p>
        </div>
        <div class="story-media story-media--img" aria-label="Imagen 1">
          <img class="story-img" src="${guapa01}" alt="GUAPA — Foto 01" loading="lazy" decoding="async" />
        </div>
      </article>

      <article class="story-block story-block--right story-block--feature">
        <div class="story-text">
          <div class="eyebrow">02 — Repertorio</div>
          <p class="story-p">${content.dossier.description[1]}</p>
        </div>
        <div class="story-media story-media--img" aria-label="Imagen 2">
          <video
            class="story-img"
            autoplay loop muted playsinline
            aria-label="GUAPA — Clip 02"
          >
            <source src="${guapa02Webm}" type="video/webm" />
          </video>
        </div>
      </article>

      <article class="story-block story-block--left story-block--carousel-feature">
        <div class="story-text">
          <div class="eyebrow">03 — Puesta en escena</div>
          <p class="story-p">${content.dossier.description[2]}</p>
          <p class="story-p">${content.dossier.description[3]}</p>
        </div>
        <div class="story-media story-media--img story-media--slideshow" data-slideshow aria-label="Imagen 3 slideshow">
          <img class="story-img slide is-active" src="${imgJuan}" alt="Juan — GUAPA" data-name="Juan" />
          <img class="story-img slide" src="${imgNano}" alt="Nano — GUAPA" data-name="Nano" />
          <img class="story-img slide" src="${imgMarce}" alt="Marcela — GUAPA" data-name="Marcela" />
          <img class="story-img slide" src="${imgSamuel}" alt="Samuel — GUAPA" data-name="Samuel" />
          <img class="story-img slide" src="${imgNacho}" alt="Nacho — GUAPA" data-name="Nacho" />
          <div class="slide-caption" data-caption></div>
        </div>
      </article>
    </section>

    <section class="card">
      <h2>Plataformas</h2>
      <div class="buttons">
        ${renderPlatformButtons(content.dossier.platforms)}
      </div>
    </section>

    <section class="card">
      <h2>Contacto</h2>
      <div class="list">
        ${renderContactItems(content.dossier.contact.general)}
      </div>
      <div class="list" style="margin-top: 12px;">
        ${renderContactItems(content.dossier.contact.technical)}
      </div>
    </section>
  `;
}
