import { useTexture } from "@react-three/drei";
import React, { useEffect } from "react";

export default function StaticMap() {
    const staticMap = useTexture({
        map: "/map-crop.png",
        normal: "/NormalMap.png",
        displacement: "/displacement.png",
    })

    useEffect(() => {
        document.body.style.cursor = 'all-scroll'

        return () => {
            document.body.style.cursor = 'all-scroll'
        }
    }, [])

    return (
        <mesh position={[-1, 0, 68]} rotation-x={-Math.PI * 0.5}>
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
