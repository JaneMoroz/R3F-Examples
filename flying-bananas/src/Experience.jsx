// Drei helpers
import { OrbitControls } from "@react-three/drei";

// Perf
import { Perf } from "r3f-perf";

function App() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[10, 15, 6]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}

export default App;
