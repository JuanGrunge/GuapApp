export function StagePlotSvg() {
  return `
    <svg viewBox="0 0 800 420" width="100%" height="auto" role="img" aria-label="Stage plot GUAPA">
      <rect x="40" y="30" width="720" height="340" rx="24" fill="#0b0c10" stroke="rgba(233,236,241,0.25)" />

      <rect x="330" y="60" width="140" height="70" rx="12" fill="#121520" stroke="rgba(233,236,241,0.2)" />
      <text x="400" y="98" fill="#E9ECF1" font-size="14" text-anchor="middle">Batería (voz)</text>

      <rect x="120" y="210" width="140" height="70" rx="12" fill="#121520" stroke="rgba(233,236,241,0.2)" />
      <text x="190" y="248" fill="#E9ECF1" font-size="14" text-anchor="middle">Bajo</text>

      <rect x="280" y="210" width="140" height="70" rx="12" fill="#121520" stroke="rgba(233,236,241,0.2)" />
      <text x="350" y="248" fill="#E9ECF1" font-size="14" text-anchor="middle">Teclas</text>

      <rect x="500" y="210" width="160" height="70" rx="12" fill="#121520" stroke="rgba(233,236,241,0.2)" />
      <text x="580" y="240" fill="#E9ECF1" font-size="14" text-anchor="middle">Guitarra</text>
      <text x="580" y="262" fill="#A7B0BE" font-size="12" text-anchor="middle">CQ-18T (IEM)</text>

      <rect x="330" y="300" width="140" height="70" rx="12" fill="#121520" stroke="rgba(233,236,241,0.2)" />
      <text x="400" y="338" fill="#E9ECF1" font-size="14" text-anchor="middle">Voz principal</text>

      <text x="400" y="390" fill="#A7B0BE" font-size="12" text-anchor="middle">Escenario</text>
    </svg>
  `;
}
