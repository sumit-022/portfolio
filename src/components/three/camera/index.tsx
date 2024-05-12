import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { PerspectiveCamera } from "three";

import { useThree } from "@react-three/fiber";

const CustomCamera = function (props: any) {
  const cameraRef = useRef<PerspectiveCamera>(null);
  

  return <perspectiveCamera ref={cameraRef} {...props} />;
};

export default CustomCamera;
