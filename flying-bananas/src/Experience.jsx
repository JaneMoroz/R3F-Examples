// PostProcessing
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

// Drei helpers
import { Environment } from "@react-three/drei";

// Bananas
import Banana from "./Banana";

function Experience({ count = 100, depth = 80, speed }) {
  return (
    <>
      <Environment preset="sunset" />
      {Array.from({ length: count }, (_, i) => (
        <Banana key={i} z={-(i / count) * depth - 20} speed={speed} />
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

export default Experience;
