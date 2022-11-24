import React from "react";
import { useSelector } from "react-redux"
import { MeshStandardMaterial } from "three"
import { IRootState } from "../../state/features/engine";


export default function Highlight() {
    const activeCord = useSelector((state: IRootState) => state.activeCord.activeCord)
    const activeID = useSelector((state: IRootState) => state.activeCord.activeID)

    const mat = new MeshStandardMaterial({ emissive: [10, 10, 10], color: [0, 0, 0] })

    return (
        activeID !== 0 && activeCord !== null ? (
            <group>
                <mesh position={[activeCord.x, 8, activeCord.y]} material={mat}>
                    <cylinderBufferGeometry args={[0.7, 0, 15, 6]} />
                </mesh>
                <mesh position={[activeCord.x, 17, activeCord.y]} material={mat}>
                    <sphereBufferGeometry args={[2, 16, 8]} />
                </mesh>
            </group>
        ) : null
    );
}
