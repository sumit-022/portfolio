import React, { Suspense, useRef } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import GalaxyScene from "./galaxy-scene";

const Galaxy = () => {
  return (
    <Canvas resize={{ polyfill: ResizeObserver }}>
      <GalaxyScene />
    </Canvas>
  );
};

export default Galaxy;
