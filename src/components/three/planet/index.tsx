import { Mesh, Color } from "three";
import { useEffect, useRef } from "react";
import { useTexture, Decal } from "@react-three/drei";

const Planet = ({
  orbit,
  texture,
  ...props
}: {
  texture: string[];
  orbit: {
    xRadius: number;
    yRadius: number;
    position: [number, number, number];
  };
  [key: string]: any;
}) => {
  const mesh = useRef<Mesh>(null);
  const [decal] = useTexture(texture);

  useEffect(() => {
    if (mesh.current) {
      const { xRadius, yRadius, position } = orbit;
      const orbitSpeed = Math.random() * 0.01 + 0.01;
      let angle = Math.random() * Math.PI * 2;

      const update = () => {
        if (!mesh.current) return;
        angle += orbitSpeed;
        mesh.current.position.set(
          xRadius * Math.cos(angle) + position[0],
          yRadius * Math.sin(angle) + position[1],
          position[2]
        );
      };

      const animate = () => {
        update();
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [orbit]);

  return (
    <mesh ref={mesh} {...props}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshPhongMaterial color={new Color(props.color)} />
      <Decal
        position={[0, 0, 0]}
        rotation={[-Math.PI / 6, (3 * Math.PI) / 6, -Math.PI / 2]}
        scale={0.8}
        map={decal}
      />
    </mesh>
  );
};

export default Planet;
