import { useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";

// Animation
import { useFrame, useThree } from "@react-three/fiber";

// Three
import * as THREE from "three";

const Bananas = ({ z }) => {
  const ref = useRef();

  const { nodes, materials } = useGLTF("/banana-v1-transformed.glb");

  // Get viewport width and height
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  // Local component state
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  // useFrame executes 60 times per second
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
};

export default Bananas;
