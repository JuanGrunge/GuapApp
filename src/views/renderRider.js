import { StagePlotSvg } from "../components/StagePlotSvg";

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
              <th>Tipo</th>
              <th>Modelo / Notas</th>
              <th>48V</th>
              <th>Stand/Clip</th>
              <th>Observaciones</th>
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
        <button class="stage-plot-open" type="button" aria-label="Ampliar stage plot">Ampliar</button>
        ${StagePlotSvg()}
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

  function renderTable(type) {
    const list = content.rider.inputLists[type];
    tbody.innerHTML = list
      .map((row, index) => {
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${row.source}</td>
            <td>${row.type}</td>
            <td>${row.model}</td>
            <td>${row.phantom}</td>
            <td>${row.stand}</td>
            <td>${row.notes}</td>
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
