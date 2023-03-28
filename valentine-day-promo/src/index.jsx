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

function App() {
  // Falling speed
  const [speed, setSpeed] = useState(1);
  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ near: 0.01, far: 110, fov: 30 }}
      >
        {/* Background color */}
        <color attach="background" args={["#ffddd2"]} />

        {/* Performance */}
        <Perf position="top-left" />

        {/* Lights */}
        <ambientLight />
        <spotLight position={[10, 10, 10]} intensity={1} />

        {/* Experience */}
        <Suspense fallback={null}>
          <Experience speed={speed} />
        </Suspense>
      </Canvas>
      ;
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
