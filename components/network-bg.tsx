"use client";

import { motion } from "framer-motion";

const networkBgNodes = [
  { x: 50, y: 15, r: 6, primary: true },
  { x: 20, y: 40, r: 4 },
  { x: 80, y: 40, r: 4 },
  { x: 10, y: 70, r: 3 },
  { x: 35, y: 80, r: 3 },
  { x: 55, y: 65, r: 3 },
  { x: 75, y: 75, r: 3 },
  { x: 90, y: 60, r: 3 },
  { x: 30, y: 55, r: 2.5 },
  { x: 65, y: 50, r: 2.5 },
];

const networkBgEdges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [1, 8],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 9],
  [8, 3],
  [8, 4],
  [9, 5],
  [9, 6],
  [4, 5],
  [6, 7],
];

export default function NetworkBg({
  reduceMotion,
  active = true,
}: {
  reduceMotion: boolean;
  active?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {networkBgEdges.map(([a, b], i) => (
        <line
          key={i}
          x1={networkBgNodes[a].x}
          y1={networkBgNodes[a].y}
          x2={networkBgNodes[b].x}
          y2={networkBgNodes[b].y}
          stroke="#67e8f9"
          strokeOpacity="0.08"
          strokeWidth="0.3"
        />
      ))}
      {[0, 2, 4, 7].map((ei) => (
        <motion.circle
          key={`p${ei}`}
          r="0.8"
          fill="#67e8f9"
          fillOpacity="0.5"
          animate={
            reduceMotion || !active
              ? undefined
              : {
                  cx: [
                    networkBgNodes[networkBgEdges[ei][0]].x,
                    networkBgNodes[networkBgEdges[ei][1]].x,
                  ],
                  cy: [
                    networkBgNodes[networkBgEdges[ei][0]].y,
                    networkBgNodes[networkBgEdges[ei][1]].y,
                  ],
                  opacity: [0, 0.6, 0.6, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 3,
                  repeat: Infinity,
                  delay: ei * 0.7,
                  ease: "linear",
                }
          }
        />
      ))}
      {networkBgNodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#070a12"
          stroke="#67e8f9"
          strokeOpacity={n.primary ? "0.4" : "0.12"}
          strokeWidth={n.primary ? "0.5" : "0.3"}
        />
      ))}
    </svg>
  );
}
