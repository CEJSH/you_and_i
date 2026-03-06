"use client";

import { motion, type MotionValue, useMotionValue, useTransform } from "framer-motion";

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

const CENTER_X = 50;
const CENTER_Y = 50;

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

function useConvergedCoord(
  original: number,
  center: number,
  convergeFactor: MotionValue<number>,
) {
  return useTransform(convergeFactor, (f: number) => original + (center - original) * f);
}

function ConvergedNode({
  node,
  index,
  convergeFactor,
}: {
  node: (typeof networkBgNodes)[number];
  index: number;
  convergeFactor: MotionValue<number>;
}) {
  const cx = useConvergedCoord(node.x, CENTER_X, convergeFactor);
  const cy = useConvergedCoord(node.y, CENTER_Y, convergeFactor);

  return (
    <motion.circle
      key={index}
      cx={cx}
      cy={cy}
      r={node.r}
      fill="#070a12"
      stroke="#67e8f9"
      strokeOpacity={node.primary ? "0.4" : "0.12"}
      strokeWidth={node.primary ? "0.5" : "0.3"}
    />
  );
}

function ConvergedEdge({
  edgeIndex,
  a,
  b,
  convergeFactor,
}: {
  edgeIndex: number;
  a: number;
  b: number;
  convergeFactor: MotionValue<number>;
}) {
  const x1 = useConvergedCoord(networkBgNodes[a].x, CENTER_X, convergeFactor);
  const y1 = useConvergedCoord(networkBgNodes[a].y, CENTER_Y, convergeFactor);
  const x2 = useConvergedCoord(networkBgNodes[b].x, CENTER_X, convergeFactor);
  const y2 = useConvergedCoord(networkBgNodes[b].y, CENTER_Y, convergeFactor);

  return (
    <motion.line
      key={edgeIndex}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#67e8f9"
      strokeOpacity="0.08"
      strokeWidth="0.3"
    />
  );
}

export default function NetworkBg({
  reduceMotion,
  active = true,
  convergeFactor: convergeFactorProp,
}: {
  reduceMotion: boolean;
  active?: boolean;
  convergeFactor?: MotionValue<number>;
}) {
  const defaultConverge = useMotionValue(0);
  const convergeFactor = convergeFactorProp ?? defaultConverge;
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {networkBgEdges.map(([a, b], i) => (
        <ConvergedEdge
          key={i}
          edgeIndex={i}
          a={a}
          b={b}
          convergeFactor={convergeFactor}
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
        <ConvergedNode
          key={i}
          node={n}
          index={i}
          convergeFactor={convergeFactor}
        />
      ))}
    </svg>
  );
}
