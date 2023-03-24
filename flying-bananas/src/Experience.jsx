import { useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";

// PostProcessing
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

// Drei helpers
import { Environment } from "@react-three/drei";

// Animation
import { useFrame, useThree } from "@react-three/fiber";

// Three
import * as THREE from "three";

function Banana({ z }) {
  const ref = useRef();

  const { nodes, materials } = useGLTF("/banana-v1-transformed.glb");

  // Get viewport width and height
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  // Set x position to random value
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    // Set random rotation
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.001)
    );

    // Set x position to random value according to viewport width
    ref.current.position.set(data.x * width, (data.y += 0.025), z);

    if (data.y > height) {
      data.y = -height;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.banana.geometry}
      material={materials.skin}
      material-emissive="orange"
    />
  );
}

function App({ count = 100, depth = 80 }) {
  return (
    <>
      <Environment preset="sunset" />
      {Array.from({ length: count }, (_, i) => (
        <Banana key={i} z={-(i / count) * depth - 20} />
      ))}
      <EffectComposer>
        <DepthOfField
          target={[0, 0, depth / 2]}
          focalLength={0.5}
          bokehScale={11}
          height={700}
        />
      </EffectComposer>
    </>
  );
}

export default App;
