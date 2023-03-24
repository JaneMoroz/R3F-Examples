import { useRef, useState } from "react";

// Drei helpers
import { OrbitControls } from "@react-three/drei";

// Perf
import { Perf } from "r3f-perf";

// Animation
import { useFrame, useThree } from "@react-three/fiber";

// Three
import * as THREE from "three";

function Box({ z }) {
  const ref = useRef();

  // Get viewport width and height
  const { viewport } = useThree();

  // Set x position to random value
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(viewport.height),
  });

  useFrame((state) => {
    // Set x position to random value according to viewport width
    ref.current.position.set(data.x * viewport.width, (data.y += 0.1), z);

    if (data.y > viewport.height / 1.5) {
      data.y = -viewport.height / 1.5;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
}

function App({ count = 100 }) {
  return (
    <>
      <Perf position="top-left" />
      {Array.from({ length: count }, (_, i) => (
        <Box key={i} z={-i} />
      ))}
    </>
  );
}

export default App;
