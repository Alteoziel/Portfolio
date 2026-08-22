export function CircuitField() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="glow" cx="28%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#6ee7a8" stopOpacity="0.22" />
          <stop offset="42%" stopColor="#1a4a36" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#06110d" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="72%">
          <stop offset="50%" stopColor="#06110d" stopOpacity="0" />
          <stop offset="100%" stopColor="#06110d" stopOpacity="0.72" />
        </radialGradient>
      </defs>

      <rect width="1600" height="900" fill="#06110d" />
      <rect width="1600" height="900" fill="url(#glow)" />

      {/* Topographic contours — trails */}
      <g
        fill="none"
        stroke="#2a5a45"
        strokeWidth="1.1"
        opacity="0.45"
        strokeLinejoin="round"
      >
        <ellipse cx="1180" cy="220" rx="340" ry="150" />
        <ellipse cx="1180" cy="220" rx="280" ry="118" />
        <ellipse cx="1180" cy="220" rx="210" ry="84" />
        <ellipse cx="1180" cy="220" rx="140" ry="52" />
        <ellipse cx="420" cy="640" rx="380" ry="170" />
        <ellipse cx="420" cy="640" rx="310" ry="132" />
        <ellipse cx="420" cy="640" rx="230" ry="92" />
        <ellipse cx="420" cy="640" rx="150" ry="54" />
        <path d="M-20 430 C 180 390, 260 470, 480 450 S 820 390, 1020 430 S 1380 510, 1640 470" />
        <path d="M-20 470 C 200 430, 300 510, 520 490 S 860 430, 1060 470 S 1400 550, 1640 510" />
      </g>

      {/* Circuit traces */}
      <g
        fill="none"
        stroke="#6ee7a8"
        strokeWidth="1.35"
        opacity="0.55"
        strokeLinecap="square"
      >
        <path d="M80 120 H 280 V 260 H 420" />
        <path d="M280 120 V 40 H 520 V 180" />
        <path d="M420 260 V 360 H 620 V 300 H 760" />
        <path d="M80 560 H 220 V 720 H 480 V 800" />
        <path d="M220 560 V 480 H 360" />
        <path d="M1320 80 V 200 H 1480 V 340" />
        <path d="M1480 200 H 1560" />
        <path d="M1180 720 H 1380 V 820 H 1540" />
        <path d="M1380 720 V 640 H 1500" />
        <path d="M900 80 H 1040 V 160 H 1180" />
        <path d="M1040 80 V 20" />
      </g>

      {/* Pads and vias */}
      <g fill="#6ee7a8">
        <circle cx="80" cy="120" r="4.5" className="circuit-node" />
        <circle cx="280" cy="120" r="3.5" />
        <circle cx="420" cy="260" r="4.5" className="circuit-node" />
        <circle cx="760" cy="300" r="4.5" className="circuit-node" />
        <circle cx="80" cy="560" r="4.5" />
        <circle cx="480" cy="800" r="4.5" className="circuit-node" />
        <circle cx="1320" cy="80" r="4.5" className="circuit-node" />
        <circle cx="1480" cy="340" r="4.5" />
        <circle cx="1540" cy="820" r="4.5" className="circuit-node" />
        <circle cx="1180" cy="160" r="3.5" />
        <rect x="500" y="164" width="44" height="28" rx="2" fill="none" stroke="#c9b07a" strokeWidth="1.2" opacity="0.7" />
        <rect x="600" y="284" width="52" height="32" rx="2" fill="none" stroke="#c9b07a" strokeWidth="1.2" opacity="0.7" />
        <rect x="1360" y="184" width="48" height="30" rx="2" fill="none" stroke="#c9b07a" strokeWidth="1.2" opacity="0.7" />
      </g>

      <rect width="1600" height="900" fill="url(#vignette)" />
    </svg>
  );
}
