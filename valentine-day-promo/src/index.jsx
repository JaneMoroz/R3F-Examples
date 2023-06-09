import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

// Drei helpers

// Perf
import { Perf } from "r3f-perf";

// Canvas
import { Canvas } from "@react-three/fiber";

// Styles
import "./style.css";

// Components
import Experience from "./Experience.jsx";
import Overlay from "./components/Overlay/Overlay";

function App() {
  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ near: 0.01, far: 110, fov: 30 }}
      >
        {/* Background color */}
        <color attach="background" args={["#ffffff"]} />

        {/* Performance */}
        {/* <Perf position="top-left" /> */}

        {/* Lights */}
        {/* <ambientLight />
        <spotLight position={[10, 10, 10]} intensity={1} /> */}

        {/* Experience */}
        <Suspense fallback={null}>
          <Experience speed={1} />
        </Suspense>
      </Canvas>

      {/* Overlay */}
      <Overlay />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
