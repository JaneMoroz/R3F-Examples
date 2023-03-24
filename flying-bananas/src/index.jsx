import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";

// Perf
import { Perf } from "r3f-perf";

// Canvas
import { Canvas } from "@react-three/fiber";

// Styles
import "./style.css";

// Experience
import Experience from "./Experience.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
    <color attach="background" args={["#ffbf40"]} />

    {/* Perf */}
    <Perf position="top-left" />

    {/* Lights */}
    {/* <ambientLight intensity={0.2} /> */}
    <spotLight position={[10, 10, 10]} intensity={1} />

    {/* Experience */}
    <Suspense fallback={null}>
      <Experience />
    </Suspense>
  </Canvas>
);
