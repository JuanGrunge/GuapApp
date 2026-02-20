export const content = {
  band: {
    name: "GUAPA",
    subtitle: "Tributo LODVG",
    country: "Chile",
    members: 5,
  },
  dossier: {
    description: [
      "Guapa es un viaje íntimo a través de las melodías que marcaron nuestras vidas. Revive con delicadeza y pasión la esencia de una de las bandas más emblemáticas del pop en español.",
      "Cada acorde, cada palabra y cada emoción se entrelazan para rendir homenaje a un repertorio que ha trascendido generaciones: canciones que hablan del amor, la nostalgia y los sueños, interpretadas con una entrega que conmueve desde el primer instante.",
      "Con una puesta en escena cuidada hasta el detalle, voces que evocan la calidez y dulzura de Amaia Montero, y una banda que recrea con precisión el sonido original, este tributo logra algo más que un concierto: ofrece una experiencia sensorial y emotiva, donde la música se convierte en recuerdo y el recuerdo, en celebración.",
      "Guapa no solo revive las canciones que todos amamos, sino también el espíritu que las hizo eternas.",
    ],
    platforms: [
      {
        id: "whatsapp",
        label: "WhatsApp",
        url: "http://wa.me/56948479930",
      },
      {
        id: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/guapatributochile",
      },
      {
        id: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/@GuapaTributoLaOrejadeVanGogh",
      },
      {
        id: "email",
        label: "Email",
        url: "mailto:guapatributochile@gmail.com",
      },
    ],
    contact: {
      general: [
        {
          label: "Producción / Booking",
          value: "Samuel: +56 9 8511 7520",
          url: "http://wa.me/56985117520",
        },
        {
          label: "Producción / Booking",
          value: "Marcela: +56 9 4847 9930",
          url: "http://wa.me/56948479930",
        },
        {
          label: "Correo",
          value: "guapatributochile@gmail.com",
          url: "mailto:guapatributochile@gmail.com",
        },
      ],
      technical: [
        {
          label: "Responsable",
          value: "Samuel Cornejo (Guitarrista y técnico de monitoreo)",
        },
        {
          label: "Contacto",
          value: "sa.cornejo@hotmail.com / +56 9 8511 7520",
          url: "mailto:sa.cornejo@hotmail.com",
        },
      ],
    },
  },
  rider: {
    summary: [
      "Consola de monitoreo interno: Allen & Heath CQ-18T.",
      "Cada músico (excepto vocalista) usa in-ear cableado desde la CQ-18T.",
      "La vocalista requiere in-ear inalámbrico para recibir mandos desde la CQ-18T.",
      "FOH recibe todas las señales del show y maneja la mezcla para PA.",
      "FOH puede enviar 2–5 monitores de piso si el venue dispone.",
    ],
    requirements: {
      critical: [
        "FOH controla PA.",
        "La banda usa CQ-18T solo para monitoreo interno.",
        "Vocalista debe tener in-ear inalámbrico para monitoreo desde CQ-18T.",
      ],
      policy: [
        "GUAPA requiere referencia de piso si el venue dispone.",
        "En wedges deben estar siempre Voz principal, Teclados y Bajo.",
        "Distribución de wedges: 3 wedges = uno por señal; 2 wedges = dos mezclas repartiendo 3 señales; 1 wedge = una mezcla con las 3 señales.",
      ],
      limitaciones: [
        "Si no hay wedges o FOH no puede mezclar señales en wedges, se declara la limitación en la coordinación previa.",
        "El show se ejecuta con monitoreo in-ear vía CQ-18T según lo posible.",
      ],
    },
    totals: {
      acoustic: 17,
      electronic: 11,
    },
    note: "Orden sugerido, confirmar con FOH",
    inputLists: {
      acoustic: [
        { source: "Kick", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Snare", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Hi-hat", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Tom 1", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Tom 2", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Floor Tom", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Overhead L", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Overhead R", type: "Mic", model: "—", phantom: "—", stand: "—", notes: "Batería acústica" },
        { source: "Voz baterista", type: "Mic", model: "—", phantom: "—", stand: "Sí", notes: "Pedestal" },
        { source: "Bajo", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Bajo mono" },
        { source: "Teclados L", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Teclados R", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Guitarra L", type: "Line", model: "CQ-18T", phantom: "—", stand: "—", notes: "Salida L/R" },
        { source: "Guitarra R", type: "Line", model: "CQ-18T", phantom: "—", stand: "—", notes: "Salida L/R" },
        { source: "Voz principal", type: "Mic", model: "—", phantom: "—", stand: "Sí", notes: "Pedestal" },
        { source: "Playback L", type: "Line", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Playback R", type: "Line", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" }
      ],
      electronic: [
        { source: "Drum kit L", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Drum kit R", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Voz baterista", type: "Mic", model: "—", phantom: "—", stand: "Sí", notes: "Pedestal" },
        { source: "Bajo", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Bajo mono" },
        { source: "Teclados L", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Teclados R", type: "DI", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Guitarra L", type: "Line", model: "CQ-18T", phantom: "—", stand: "—", notes: "Salida L/R" },
        { source: "Guitarra R", type: "Line", model: "CQ-18T", phantom: "—", stand: "—", notes: "Salida L/R" },
        { source: "Voz principal", type: "Mic", model: "—", phantom: "—", stand: "Sí", notes: "Pedestal" },
        { source: "Playback L", type: "Line", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" },
        { source: "Playback R", type: "Line", model: "—", phantom: "—", stand: "—", notes: "Estéreo L/R" }
      ]
    },
    micRequiredBySource: {
      "Kick": "Mic dinámico (bombo)",
      "Snare": "Mic dinámico",
      "Hi-hat": "Mic condensador (lápiz)",
      "Tom 1": "Mic dinámico (pinza)",
      "Tom 2": "Mic dinámico (pinza)",
      "Floor Tom": "Mic dinámico (pinza)",
      "Overhead L": "Mic condensador (overhead)",
      "Overhead R": "Mic condensador (overhead)",
      "Voz baterista": "Mic dinámico + pedestal"
    },
    monitoringBySource: {
      "Voz baterista": "In-ear (cableado)",
      "Bajo": "In-ear (cableado) + monitor piso (requerido)",
      "Teclados L": "In-ear (cableado) + monitor piso (requerido)",
      "Teclados R": "In-ear (cableado) + monitor piso (requerido)",
      "Guitarra": "In-ear (cableado)",
      "Voz principal": "In-ear inalámbrico + monitor piso (requerido)",
      "Kick": "—",
      "Snare": "—",
      "Hi-hat": "—",
      "Tom 1": "—",
      "Tom 2": "—",
      "Floor Tom": "—",
      "Overhead L": "—",
      "Overhead R": "—",
      "Drum kit L": "—",
      "Drum kit R": "—",
      "Playback L": "—",
      "Playback R": "—",
      "Guitarra L": "In-ear (cableado)",
      "Guitarra R": "In-ear (cableado)"
    }
  }
};
