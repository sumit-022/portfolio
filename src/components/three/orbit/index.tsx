import { useEffect, useRef } from "react";
import {
  Color,
  Mesh,
  Line,
  EllipseCurve,
  BufferGeometry,
  PointsMaterial,
  LineBasicMaterial,
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
    //center the ellipse
    geometry.translate(0, 0, 0);
    //point material
    const material = new PointsMaterial({ color: props.color });
    const ellipse = new Line(geometry, material);

    mesh.add(ellipse);

    return () => {
      mesh.remove(ellipse);
    };
  }, [props.color, props.radius]);

  return (
    <mesh {...props} ref={meshRef}>
      {/* Particles */}
      <points>
        <pointsMaterial color={new Color(0xff0000)} size={0.1} />
      </points>
    </mesh>
  );
};

export default Orbit;
