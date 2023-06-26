import { useEnvironment, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

export default function GhostMap() {
    // const ghostmap = useLoader(TextureLoader, process.env.PUBLIC_URL + "/ghostmap.png");
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const ghostmap = useTexture({
        map: process.env.PUBLIC_URL + "/ghost/ghostmap.png",
        // normal: process.env.PUBLIC_URL + "/NormalMap.png",
        // displacement: process.env.PUBLIC_URL + "/DisplacementMap.png",
    })

    return (
        <mesh position={[0, -3.8, 60]} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[800, 325]} />
            {/* <planeGeometry args={[1000, 500]} /> */}
            {/* <meshBasicMaterial map={ghostmap}  /> */}
            <meshPhongMaterial
                // envMap={envMap}
                // envMapIntensity={0.5}
                map={ghostmap.map}
                // color={[1, 10, 1]}
                opacity={1}
                // alphaMap={ghostmap.displacement}
                transparent={false}
            // normalMap={ghostmap.normal}
            // displacementMap={ghostmap.displacement}

            />
        </mesh>
    );
}
