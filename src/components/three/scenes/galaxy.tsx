import React, { Suspense } from "react";
import { ResizeObserver } from "@juggle/resize-observer";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Camera from "../camera";
import Orbit from "../orbit";
// import Planet from "../planet";

const Galaxy = () => {
  return (
    <Canvas resize={{ polyfill: ResizeObserver }}>
      <Camera
        position={[0, 0, -45]}
        fov={40}
        near={0.1}
        far={1000}
        name={"per-camera"}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[15, 15, 15]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
      </Camera>
      <Suspense fallback={null}>
        <group rotation={[Math.PI / 3, 0.4, 0]}>
          <Orbit
            xRadius={2}
            yRadius={2}
            color={0x000000}
            position={[0, 0, -0.3]}
          />
          <Orbit
            xRadius={3.5}
            yRadius={3.5}
            color={0x000000}
            position={[0.3, -1.2, -0.5]}
          />
          <Orbit
            xRadius={4.6}
            yRadius={5}
            color={0x000000}
            position={[0.5, -2.3, -0.5]}
          />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Galaxy;
