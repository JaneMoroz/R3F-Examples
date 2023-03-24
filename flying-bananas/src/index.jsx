import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import "./style.css";
import Experience from "./Experience.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [4, 2, 6],
    }}
  >
    <Experience />
  </Canvas>
);
