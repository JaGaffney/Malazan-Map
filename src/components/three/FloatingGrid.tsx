import React, { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export default function FloatingGrid() {
    const diffuse = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/grid-texture.png");

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(150, 150);
        diffuse.offset.set(0, 0);
    }, [diffuse]);

    return (
        <mesh rotation-x={-Math.PI * 0.5} position={[0, 1.6, 0]}>
            <planeGeometry args={[400, 400]} />
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