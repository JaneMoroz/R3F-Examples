// PostProcessing
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

// Drei helpers
import { Environment } from "@react-three/drei";

// Bananas
import Bananas from "./Bananas";

function App({ count = 100, depth = 80 }) {
  return (
    <>
      <Environment preset="sunset" />
      {Array.from({ length: count }, (_, i) => (
        <Bananas key={i} z={-(i / count) * depth - 20} />
      ))}
      <EffectComposer multisampling={0}>
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
