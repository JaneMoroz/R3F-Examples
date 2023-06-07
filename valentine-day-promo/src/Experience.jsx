// PostProcessing
import { Effects } from "./components/PostProcessing/Effects";

// Drei helpers
import { Environment } from "@react-three/drei";

// Rose
import Rose from "./components/Rose/Rose";

function Experience({ count = 80, depth = 80, speed }) {
  return (
    <>
      {/* Environment */}
      {/* <Environment preset="sunset" /> */}

      {/* Roses */}
      {/* {Array.from({ length: count }, (_, i) => (
        <Rose key={i} z={-(i / count) * depth - 20} speed={speed} />
      ))} */}

      {/* Effects */}
      {/* <Effects depth={depth} /> */}
    </>
  );
}

export default Experience;
