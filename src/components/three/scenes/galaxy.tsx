import React, { useRef } from "react";
import Orbit from "../orbit";
import Planet from "../planet";
import { Suspense } from "react";
import { Vector3 } from "three";
import nextjslogo from "@/assets/svg/nextjs.svg";
import javascriptlogo from "@/assets/images/javascript.png";
import reactlogo from "@/assets/images/react.png";

const GalaxyScene = () => {
  const spotlightProp = {
    intensity: 0.7,
    color: "#fff",
    position: new Vector3(-12, 3, -15),
    angle: 0.65,
    castShadow: false,
    penumbra: 0.65,
    distance: 140,
    decay: 2.0,
  };

  return (
    <>
      <perspectiveCamera position={[0, 0, -1.3]}>
        <ambientLight intensity={1} />
        <spotLight {...spotlightProp}></spotLight>
        <Suspense fallback={null}>
          <group
            rotation={[(2 * Math.PI) / 3, Math.PI / 6, 0]}
            position={[-0.5, 1, 0]}
          >
            <Planet
              position={[0, -0.5, 1]}
              color={"#ffffff"}
              name={"planet1"}
              rotation={[-Math.PI / 6, Math.PI / 6, (2 * Math.PI) / 7]}
              orbit={{
                xRadius: 2,
                yRadius: 2,
                position: [0, 0, 0],
              }}
              texture={[nextjslogo]}
            />
            <Planet
              position={[4, -0.5, 1]}
              color={"#ff0000"}
              name={"planet2"}
              rotation={[-Math.PI / 6, Math.PI / 6, (2 * Math.PI) / 7]}
              orbit={{
                xRadius: 3,
                yRadius: 3,
                position: [0, 0, 0],
              }}
              texture={[javascriptlogo]}
            />
            <Planet
              position={[8, -0.5, 1]}
              color={"#0000ff"}
              name={"planet3"}
              orbit={{
                xRadius: 4,
                yRadius: 4,
                position: [0, 0, 0],
              }}
              texture={[reactlogo]}
            />
            <Orbit
              xRadius={2}
              yRadius={2}
              color={0x000000}
              position={[0, 0, 0]}
            ></Orbit>
            <Orbit
              xRadius={3}
              yRadius={3}
              color={0x000000}
              position={[0, 0, 0]}
            />
            <Orbit
              xRadius={4}
              yRadius={4}
              color={0x000000}
              position={[0, 0, 0]}
            />
          </group>
        </Suspense>
      </perspectiveCamera>
    </>
  );
};

export default GalaxyScene;
