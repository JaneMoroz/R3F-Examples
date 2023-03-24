import React from "react";
import ReactDOM from "react-dom/client";

// Canvas
import { Canvas } from "@react-three/fiber";

// Styles
import "./style.css";

// Experience
import Experience from "./Experience.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas>
    <Experience />
  </Canvas>
);
