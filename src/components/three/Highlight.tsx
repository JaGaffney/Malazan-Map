import React from "react";

import { useSelector } from "react-redux"


export default function Highlight() {
    const activeCord = useSelector((state) => state.activeCord.activeCord)
    const activeID = useSelector((state) => state.activeCord.activeID)

    return (
        activeID !== 0 && activeCord !== null ? (
            <mesh position={[activeCord.x, 10, activeCord.y]} >
                <cylinderBufferGeometry args={[0.4, 0.4, 20, 6]} />
                <meshStandardMaterial envMapIntensity={0.2} emissive={[10, 10, 10]} color={[0, 0, 0]} />
            </mesh>) : null
    );
}
