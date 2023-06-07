import { useLoader, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  LUT,
  Vignette,
  DepthOfField,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

export function Effects({ depth }) {
  // KTX2Loader
  const gl = useThree((state) => state.gl);

  const CustomKTX2Loader = (path) =>
    useLoader(KTX2Loader, path, (loader) => {
      loader
        .setTranscoderPath(
          `https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/basis/`
        )
        .detectSupport(gl);
    });

  // LUTs
  const lut = CustomKTX2Loader("/LUT/W-9130-STD.ktx2");

  return (
    <EffectComposer dithering stencilBuffer={true}>
      <LUT lut={lut} />
      <Vignette
        offset={0.2}
        darkness={0.85}
        blendFunction={BlendFunction.NORMAL}
      />
      <DepthOfField
        target={[0, 0, depth / 2]}
        focalLength={0.5}
        bokehScale={11}
        height={700}
      />
      <BrightnessContrast
        brightness={0} // brightness. min: -1, max: 1
        contrast={0} // contrast: min -1, max: 1
      />
    </EffectComposer>
  );
}
