export function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function EcoIcon({ type }: { type: string }) {
  const d: Record<string, string> = {
    bridge: "M4 16h24M8 16V8M24 16V8M8 8h16",
    api: "M12 4v8M20 4v8M8 12h16M8 20h16M12 20v8M20 20v8",
    code: "M10 8l-4 4 4 4M22 8l4 4-4 4M14 20l4-8",
    id: "M8 6h16v20H8zM12 12h8M12 16h6",
    wallet: "M6 10h20v14H6zM6 10l4-4h12l4 4M14 17h4",
    gateway: "M4 16h8M20 16h8M12 8v16M20 8v16M12 16h8",
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#67e8f9"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d[type] || d.bridge} />
    </svg>
  );
}

export function FeatureGraphic({ type }: { type: string }) {
  if (type === "quest") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <rect
          x="24"
          y="18"
          width="160"
          height="112"
          rx="6"
          stroke="#67e8f9"
          strokeOpacity="0.35"
        />
        <line
          x1="24"
          y1="58"
          x2="184"
          y2="58"
          stroke="#67e8f9"
          strokeOpacity="0.35"
        />
        <circle cx="44" cy="38" r="8" stroke="#22d3ee" strokeOpacity="0.8" />
        <path d="M40 38h8M44 34v8" stroke="#22d3ee" />
        <rect
          x="40"
          y="76"
          width="72"
          height="8"
          rx="3"
          fill="#22d3ee"
          fillOpacity="0.28"
        />
        <rect
          x="40"
          y="92"
          width="98"
          height="7"
          rx="3"
          fill="#67e8f9"
          fillOpacity="0.18"
        />
        <rect
          x="132"
          y="72"
          width="38"
          height="44"
          rx="5"
          fill="#22d3ee"
          fillOpacity="0.35"
        />
        <circle cx="151" cy="90" r="8" fill="#22d3ee" fillOpacity="0.5" />
        <path d="M151 85v10M146 90h10" stroke="#67e8f9" strokeOpacity="0.7" />
      </svg>
    );
  }
  if (type === "starboard") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <polygon
          points="48,86 80,68 112,86 112,120 80,138 48,120"
          stroke="#67e8f9"
          strokeOpacity="0.38"
        />
        <path
          d="M112 86h58c8 0 14-6 14-14v-8"
          stroke="#22d3ee"
          strokeOpacity="0.8"
          strokeDasharray="3 3"
        />
        <path
          d="M112 102h44c8 0 14-6 14-14"
          stroke="#38bdf8"
          strokeOpacity="0.8"
        />
        <rect x="174" y="44" width="114" height="22" rx="3" stroke="#22d3ee" />
        <rect x="174" y="78" width="118" height="24" rx="3" stroke="#06b6d4" />
        <rect
          x="174"
          y="112"
          width="98"
          height="20"
          rx="3"
          stroke="#67e8f9"
          strokeOpacity="0.5"
          strokeDasharray="2 3"
        />
        <circle cx="292" cy="22" r="9" stroke="#67e8f9" strokeOpacity="0.5" />
        <path d="M288 22h8M292 18v8" stroke="#67e8f9" strokeOpacity="0.65" />
      </svg>
    );
  }
  if (type === "earndrop") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <polygon
          points="144,48 186,72 186,118 144,142 102,118 102,72"
          stroke="#67e8f9"
          strokeOpacity="0.4"
        />
        <path d="M56 95h46M186 95h78" stroke="#67e8f9" strokeOpacity="0.35" />
        <path
          d="M56 95c-12 0-16-8-16-16V58"
          stroke="#22d3ee"
          strokeOpacity="0.7"
          strokeDasharray="3 3"
        />
        <path
          d="M264 95c12 0 16 8 16 16v20"
          stroke="#22d3ee"
          strokeOpacity="0.7"
          strokeDasharray="3 3"
        />
        <circle cx="40" cy="58" r="6" stroke="#67e8f9" strokeOpacity="0.5" />
        <circle cx="280" cy="131" r="6" stroke="#67e8f9" strokeOpacity="0.5" />
        <rect x="136" y="82" width="6" height="8" stroke="#22d3ee" />
        <rect x="148" y="82" width="6" height="8" stroke="#22d3ee" />
        <rect x="136" y="94" width="6" height="8" stroke="#38bdf8" />
        <rect x="148" y="94" width="6" height="8" stroke="#38bdf8" />
      </svg>
    );
  }
  if (type === "passport") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <rect
          x="70"
          y="24"
          width="180"
          height="120"
          rx="8"
          stroke="#67e8f9"
          strokeOpacity="0.32"
          strokeDasharray="3 7"
        />
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <path
            key={n}
            d={`M140 ${44 + n * 12}c-22 0-40 13-40 30`}
            stroke="#67e8f9"
            strokeOpacity="0.6"
          />
        ))}
        <rect x="114" y="76" width="10" height="10" stroke="#22d3ee" />
        <rect x="152" y="94" width="10" height="10" stroke="#22d3ee" />
        <rect x="92" y="102" width="10" height="10" stroke="#22d3ee" />
      </svg>
    );
  }
  if (type === "score") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <circle
          cx="160"
          cy="84"
          r="58"
          stroke="#67e8f9"
          strokeOpacity="0.24"
          strokeDasharray="3 8"
        />
        <polygon
          points="160,34 214,62 204,128 120,118 98,56"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <path d="M160 34L214 62" stroke="#38bdf8" strokeOpacity="0.75" />
        <path d="M120 118L204 128" stroke="#38bdf8" strokeOpacity="0.75" />
        <text x="77" y="76" fill="#67e8f9" fillOpacity="0.65" fontSize="10">
          HUMANITY
        </text>
        <text x="218" y="84" fill="#67e8f9" fillOpacity="0.65" fontSize="10">
          FAME
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
      <rect
        x="28"
        y="42"
        width="264"
        height="86"
        rx="4"
        stroke="#67e8f9"
        strokeOpacity="0.35"
      />
      <polygon
        points="66,84 96,58 126,84 96,110"
        stroke="#67e8f9"
        strokeOpacity="0.5"
      />
      <polygon
        points="194,84 224,58 254,84 224,110"
        stroke="#67e8f9"
        strokeOpacity="0.5"
      />
      <line
        x1="126"
        y1="84"
        x2="194"
        y2="84"
        stroke="#22d3ee"
        strokeWidth="2"
      />
      <circle cx="160" cy="84" r="5" stroke="#38bdf8" />
      <line
        x1="160"
        y1="42"
        x2="160"
        y2="128"
        stroke="#67e8f9"
        strokeOpacity="0.2"
        strokeDasharray="3 4"
      />
      <line x1="228" y1="84" x2="286" y2="84" stroke="#22d3ee" />
      <circle cx="286" cy="84" r="4" fill="#22d3ee" fillOpacity="0.9" />
    </svg>
  );
}
