import heroGuapa from "../assets/hero-guapa.png";

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
  const summary = content.dossier.description.slice(0, 2);
  const remaining = content.dossier.description.slice(2);

  container.innerHTML = `
    <section class="hero" aria-label="Portada dossier GUAPA">
      <img class="hero-img" src="${heroGuapa}" alt="Portada: La Oreja de Van Gogh — GUAPA" loading="eager" draggable="false" />
    </section>

    <section class="card">
      <h2>Dossier</h2>
      ${renderParagraphs(summary)}
      <ul class="highlights">
        <li>Homenaje delicado a un repertorio que cruza generaciones.</li>
        <li>Voces y ejecución que evocan el sonido original.</li>
        <li>Experiencia sensorial cuidada en escena.</li>
      </ul>
      <button class="btn btn-ghost" id="dossier-toggle" aria-expanded="false" aria-controls="dossier-more">Leer más</button>
      <div id="dossier-more" class="collapse" hidden>
        ${renderParagraphs(remaining)}
      </div>
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
