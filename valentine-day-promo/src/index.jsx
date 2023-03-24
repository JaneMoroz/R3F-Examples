import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// Drei helpers
import { OrbitControls } from "@react-three/drei";

// Perf
import { Perf } from "r3f-perf";

// Canvas
import { Canvas } from "@react-three/fiber";

// Styles
import "./style.css";

// Components
import Experience from "./Experience.jsx";

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, 2, 6],
        }}
      >
        {/* Performance */}
        <Perf position="top-left" />

        {/* Controls */}
        <OrbitControls />

        {/* Lights */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Experience */}
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      ;
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
