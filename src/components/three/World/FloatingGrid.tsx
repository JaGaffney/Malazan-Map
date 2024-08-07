import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export default function FloatingGrid() {
    // @ts-expect-error
    const diffuse: any = useLoader(TextureLoader, "/textures/grid-texture.png");

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(150, 150);
        diffuse.offset.set(0, 0);
    }, [diffuse]);

    return (
        <mesh rotation-x={-Math.PI * 0.5} position={[0, 1.6, 60]}>
            <planeGeometry args={[1700, 1250]} />
            <meshBasicMaterial
                color={[1, 10, 1]}
                opacity={1}
                map={diffuse}
                alphaMap={diffuse}
                transparent={true}
            />
        </mesh>
    )
}