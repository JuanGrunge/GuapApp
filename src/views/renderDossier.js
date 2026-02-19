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
    <section class="card">
      <h2>Dossier</h2>
      ${renderParagraphs(content.dossier.description)}
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
