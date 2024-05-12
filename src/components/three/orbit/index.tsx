import { useEffect, useRef } from "react";
import {
  Color,
  Mesh,
  Line,
  LineBasicMaterial,
  EllipseCurve,
  BufferGeometry,
  Float32BufferAttribute,
} from "three";

const Orbit = (props: any) => {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const curve = new EllipseCurve(
      0,
      0,
      props.xRadius,
      props.yRadius,
      0,
      Math.PI * 2,
      false,
      0
    );

    const points = curve.getPoints(100); // Increase number of points for smoother curve
    const geometry = new BufferGeometry().setFromPoints(points); // Create BufferGeometry from points
    const material = new LineBasicMaterial({ color: props.color });
    const ellipse = new Line(geometry, material);

    mesh.add(ellipse);

    return () => {
      mesh.remove(ellipse);
    };
  }, [props.color, props.radius]);

  return (
    <mesh {...props} ref={meshRef}>
      <meshStandardMaterial
        color={new Color(props.color)}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

export default Orbit;
