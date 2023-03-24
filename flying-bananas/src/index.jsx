import React, { useState } from "react";
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

// Overlay
import Overlay from "./Overlay/Overlay";

// Speed Control Styled component
import { Control } from "./Overlay/styles";

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      {/* Bananas background canvas */}
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ near: 0.01, far: 110, fov: 30 }}
      >
        <color attach="background" args={["#ffbf40"]} />

        {/* Perf */}
        <Perf position="top-left" />

        {/* Lights */}
        {/* <ambientLight intensity={0.2} /> */}
        <spotLight position={[10, 10, 10]} intensity={1} />

        {/* Experience */}
        <Suspense fallback={null}>
          <Experience speed={speed} />
        </Suspense>
      </Canvas>

      {/* Overlay */}
      <Overlay />

      {/* Speed Control */}
      <Control>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </Control>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
