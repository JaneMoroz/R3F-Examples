import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";

// Canvas
import { Canvas } from "@react-three/fiber";

// Styles
import "./style.css";

// Experience
import Experience from "./Experience.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas>
    <ambientLight intensity={0.2} />
    <spotLight position={[10, 10, 10]} intensity={2} />
    <Suspense fallback={null}>
      <Experience />
    </Suspense>
  </Canvas>
);
