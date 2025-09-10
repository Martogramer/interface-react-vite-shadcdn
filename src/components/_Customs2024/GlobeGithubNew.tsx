"use client";
import { lazy, Suspense } from "react";
import React from "react";

const World = lazy(() =>
  import("../ui/globe").then((m) => ({ default: m.World }))
);

type GlobeDemoProps = {
  className?: string;
  variant?: "embed" | "fullscreen";
  background?: boolean;
};

export function GlobeDemo({
  className = "",
  variant = "embed",
  background = false,
}: GlobeDemoProps) {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[Math.floor(Math.random()*colors.length)] },
    { order: 1, startLat: 28.6139,  startLng: 77.209,    endLat: 3.139,   endLng: 101.6869, arcAlt: 0.2, color: colors[Math.floor(Math.random()*colors.length)] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[Math.floor(Math.random()*colors.length)] },
    { order: 2, startLat: 1.3521,   startLng: 103.8198, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.3, color: colors[Math.floor(Math.random()*colors.length)] },
  ];

  // Contenedor según variante
  const base =
    variant === "fullscreen"
      ? "relative w-full h-screen"
      : "relative w-full h-full"; // el padre define la altura (p. ej. aspect-square)

  const bg = background ? "bg-[#030712]" : "";

  return (
    <div className={`${base} ${bg} overflow-visible ${className}`}>
      {/* El World ocupa todo el contenedor que define el padre */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <World data={sampleArcs} globeConfig={globeConfig} />
        </Suspense>
      </div>
      {/* Si alguna vez querés overlays de texto, van aquí */}
    </div>
  );
}
