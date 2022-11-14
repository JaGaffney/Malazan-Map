import { useEnvironment } from "@react-three/drei";
import React from "react";
import { TextureLoader } from "three";

import { useSelector } from "react-redux"


export default function Highlight() {
    const activeCord = useSelector((state) => state.activeCord.activeCord)

    return (
        <mesh position={[activeCord.x, 1, activeCord.y]} >
            <cylinderBufferGeometry args={[0.4, 0.4, 30, 6]} />
            <meshStandardMaterial envMapIntensity={0.2} emissive={[10, 10, 10]} color={[0, 0, 0]} />
        </mesh>
    );
}
