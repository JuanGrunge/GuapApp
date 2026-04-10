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

const PLATFORM_ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>`,
  email: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
  </svg>`,
};

function renderPlatformButtons(platforms) {
  return platforms
    .map(
      (p) => `
        <a class="btn btn-icon" href="${p.url}" target="_blank" rel="noopener" aria-label="${p.label}">
          ${PLATFORM_ICONS[p.id] ?? p.label}
        </a>
      `
    )
    .join("");
}

function renderReels(reels) {
  return reels
    .map(
      (url) => `
        <div class="reel-item">
          <blockquote
            class="instagram-media"
            data-instgrm-permalink="${url}?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14">
            <a href="${url}" target="_blank" rel="noopener">Ver en Instagram</a>
          </blockquote>
        </div>`
    )
    .join("");
}

function renderContactItems(items) {
  return items
    .map((item) => {
      if (item.links) {
        const linksHtml = item.links
          .map((link) => {
            const isMailto = link.url.startsWith("mailto:");
            return `<a class="contact-link" href="${link.url}"${isMailto ? "" : ` target="_blank" rel="noopener"`}>${link.label}</a>`;
          })
          .join('<span class="contact-sep">/</span>');
        return `
          <div class="list-item">
            <div class="label">${item.label}</div>
            <div class="value">${item.name}</div>
            <div class="contact-links">${linksHtml}</div>
          </div>
        `;
      }
      const isMailto = item.url?.startsWith("mailto:");
      return `
        <div class="list-item">
          <div class="label">${item.label}</div>
          ${item.url
            ? `<a class="value" href="${item.url}"${isMailto ? "" : ` target="_blank" rel="noopener"`}>${item.value}</a>`
            : `<div class="value">${item.value}</div>`}
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
      <div class="reels-grid">
        ${renderReels(content.dossier.reels)}
      </div>
    </section>

    <section class="card">
      <h2>Contacto</h2>
      <div class="list">
        ${renderContactItems(content.dossier.contact)}
      </div>
    </section>
  `;
}
