import { useEnvironment, useTexture } from "@react-three/drei";
import React, { useEffect } from "react";

export default function StaticMap() {
    // const ghostmap = useLoader(TextureLoader, process.env.PUBLIC_URL + "/ghostmap.png");
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const staticMap = useTexture({
        map: process.env.PUBLIC_URL + "/map-crop.png",
        normal: process.env.PUBLIC_URL + "/NormalMap.png",
        displacement: process.env.PUBLIC_URL + "/test.png",
    })

    useEffect(() => {
        document.body.style.cursor = 'all-scroll'

        return () => {
            document.body.style.cursor = 'all-scroll'
        }
    }, [])

    return (
        <mesh position={[-1, 4, 68]} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[800, 350, 1024, 1024]} />
            <meshStandardMaterial
                // metalness={0.1}
                map={staticMap.map}
                normalMap={staticMap.normal}
                displacementMap={staticMap.displacement}
                displacementScale={3}
            />
        </mesh>
    );
}
