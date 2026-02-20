import stageplotImg from "../assets/stageplot-guapa.png";

function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

export function renderRider(container, content) {
  container.innerHTML = `
    <section class="card">
      <h2>Resumen rápido</h2>
      <ul>
        ${renderList(content.rider.summary)}
      </ul>
    </section>

    <section class="card">
      <h2>Requerimientos</h2>
      <div class="list">
        <div class="list-item">
          <div class="label">CRITICAL</div>
          <ul>
            ${renderList(content.rider.requirements.critical)}
          </ul>
        </div>
        <div class="list-item">
          <div class="label">POLICY</div>
          <ul>
            ${renderList(content.rider.requirements.policy)}
          </ul>
        </div>
        <div class="list-item">
          <div class="label">LIMITACIONES</div>
          <ul>
            ${renderList(content.rider.requirements.limitaciones)}
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="section-row">
        <h2>Input List</h2>
        <div class="segmented" data-battery>
          <button class="active" data-type="acoustic">Batería acústica</button>
          <button data-type="electronic">Batería electrónica</button>
        </div>
      </div>
      <p class="muted">${content.rider.note}</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>CH</th>
              <th>Fuente / Instrumento</th>
              <th>Mic/DIs requerido</th>
              <th>Monitoreo</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="total">Total canales a FOH: <span data-total></span></div>
    </section>

    <section class="card">
      <h2>Stage Plot</h2>
      <div class="stage-plot">
        <button class="stage-plot-open" type="button" aria-label="Ampliar stage plot" title="Ampliar">
          <svg class="icon-expand" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 3h6v6h-2V6.41l-4.29 4.3-1.42-1.42L17.59 5H15V3z"/>
            <path d="M9 21H3v-6h2v2.59l4.29-4.3 1.42 1.42L6.41 19H9v2z"/>
          </svg>
        </button>
        <img
          class="stageplot-img"
          src="${stageplotImg}"
          alt="Stage plot GUAPA"
          loading="lazy"
          draggable="false"
        />
      </div>
    </section>
  `;

  const buttons = Array.from(container.querySelectorAll("[data-battery] button"));
  const tbody = container.querySelector("tbody");
  const totalEl = container.querySelector("[data-total]");

  function setActive(type) {
    buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.type === type));
  }

  function getTotal(type, list) {
    const defined = content.rider.totals[type];
    return typeof defined === "number" ? defined : list.length;
  }

  function buildRequirement(row) {
    const mapped = content.rider.micRequiredBySource?.[row.source];
    if (mapped) return mapped;

    const notes = row.notes || "";
    const stand = (row.stand || "").toLowerCase();
    const phantom = (row.phantom || "").toLowerCase();
    const isStereoSide = /\s[LR]$/.test(row.source);

    if (row.type === "DI") {
      if (isStereoSide) return "1 DI";
      if (notes.includes("Estéreo L/R")) return "2 DI (estéreo)";
      if (notes.toLowerCase().includes("mono")) return "1 DI mono";
      return "1 DI";
    }

    if (row.type === "Mic") {
      const base = row.model && row.model !== "—" ? row.model : "Mic dinámico";
      const extras = [];

      if (phantom.includes("sí")) extras.push("48V");
      if (stand.includes("pedestal") || stand.includes("clip")) {
        extras.push(stand.includes("pedestal") ? "pedestal" : "clip");
      }
      if (notes.toLowerCase().includes("condensador") && !extras.includes("condensador")) {
        extras.push("condensador");
      }
      if (notes.toLowerCase().includes("pinza") && !extras.includes("pinza")) {
        extras.push("pinza");
      }

      return extras.length ? `${base} + ${extras.join(" + ")}` : base;
    }

    if (row.type === "Line") {
      if (isStereoSide) return "Línea balanceada";
      return "Línea balanceada";
    }

    return row.type || "—";
  }

  function renderTable(type) {
    const list = content.rider.inputLists[type];
    const monitoringMap = content.rider.monitoringBySource || {};
    tbody.innerHTML = list
      .map((row, index) => {
        const requirement = buildRequirement(row);
        const monitoring = monitoringMap[row.source] ?? "—";
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${row.source}</td>
            <td>${requirement}</td>
            <td>${monitoring}</td>
          </tr>
        `;
      })
      .join("");

    totalEl.textContent = getTotal(type, list);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      setActive(type);
      renderTable(type);
    });
  });

  setActive("acoustic");
  renderTable("acoustic");
}
