"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useMemo, useRef } from "react"

type NodeSeed = {
  axis: THREE.Vector3
  orbit: number
  phase: number
  speed: number
  swirl: number
  size: number
  hue: number
}

function buildNodeSeeds(count: number): NodeSeed[] {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2
    const tilt = (Math.random() - 0.5) * Math.PI
    const axis = new THREE.Vector3(Math.cos(angle), Math.sin(tilt), Math.sin(angle))
    axis.normalize()

    return {
      axis,
      orbit: 1.6 + Math.random() * 4.4,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 1.2,
      swirl: 0.35 + Math.random() * 1.5,
      size: 0.12 + Math.random() * 0.2,
      hue: 168 + Math.random() * 60,
    }
  })
}

function FluidNucleus({ seeds, reducedMotion }: { seeds: NodeSeed[]; reducedMotion: boolean }) {
  const nodesRef = useRef<THREE.InstancedMesh>(null)

  const matrix = useMemo(() => new THREE.Matrix4(), [])
  const pos = useMemo(() => new THREE.Vector3(), [])
  const scale = useMemo(() => new THREE.Vector3(), [])
  const spin = useMemo(() => new THREE.Euler(), [])
  const quat = useMemo(() => new THREE.Quaternion(), [])
  const tempColor = useMemo(() => new THREE.Color(), [])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (reducedMotion || !nodesRef.current) {
      return
    }

    const nodeCount = seeds.length

    for (let i = 0; i < nodeCount; i += 1) {
      const seed = seeds[i]
      const breath = 0.6 + Math.sin(time * (seed.speed * 0.85) + seed.phase) * 0.22
      const spinA = time * seed.speed + seed.phase
      const spinB = time * (seed.speed * 0.75) + seed.phase * 1.6
      const axis = seed.axis
      const radius = seed.orbit * (1 + breath * 0.16)
      const x = axis.x * Math.cos(spinA) * radius + Math.sin(spinB * seed.swirl) * seed.swirl * 0.35
      const y = axis.y * Math.cos(spinB) * radius + Math.cos(spinA * 0.85) * 0.6
      const z = axis.z * Math.sin(spinA) * radius + Math.sin(spinA) * seed.swirl * 0.25

      pos.set(x, y, z)

      scale.setScalar(seed.size * (1 + breath * 0.35))
      spin.set(time * 0.2 + seed.phase, time * -0.2 + seed.phase, time * 0.2)
      matrix.compose(pos, quat.setFromEuler(spin), scale)
      nodesRef.current.setMatrixAt(i, matrix)

      if (nodesRef.current.instanceColor) {
        const hue = (seed.hue + breath * 24 + time * 10) / 360
        tempColor.setHSL(hue % 1, 0.98, 0.65)
        nodesRef.current.instanceColor.setXYZ(i, tempColor.r, tempColor.g, tempColor.b)
      }
    }

    nodesRef.current.instanceMatrix.needsUpdate = true
    if (nodesRef.current.instanceColor) {
      nodesRef.current.instanceColor.needsUpdate = true
    }
  })

  return (
    <>
      <instancedMesh ref={nodesRef} args={[undefined, undefined, seeds.length]} frustumCulled={false}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          toneMapped={false}
          vertexColors
          roughness={0.22}
          metalness={0.85}
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>
    </>
  )
}

export default function HeroFluidCanvas({ reducedMotion }: { reducedMotion: boolean }) {
  const seedCount = reducedMotion ? 26 : 76
  const seeds = useMemo(() => buildNodeSeeds(seedCount), [seedCount, reducedMotion])

  return (
    <Canvas
      dpr={reducedMotion ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0, 7.2], fov: 45, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#06080f"]} />
      <fog attach="fog" args={["#06080f", 6, 16]} />
      <ambientLight intensity={0.45} />
      <directionalLight intensity={1} position={[2, 2.5, 5]} color="#67e8f9" />
      <pointLight intensity={1.8} position={[-3, -2, 3]} color="#22d3ee" />
      <pointLight intensity={1.2} position={[3, 1.5, -2]} color="#06b6d4" />
      <FluidNucleus seeds={seeds} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
