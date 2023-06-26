import React from "react";
import { useSelector } from "react-redux"

export default function Highlight() {
    const activeCord = useSelector((state: any) => state.filter.activeCord)
    const activeID = useSelector((state: any) => state.filter.activeData.id)

    return (
        activeID !== 0 && activeCord !== null ? (
            <group>
                <mesh position={[activeCord.x, 8, activeCord.y]}>
                    <cylinderBufferGeometry args={[1.5, 0, 15, 6]} />
                    <meshPhysicalMaterial
                        clearcoat={1}
                        clearCoatRoughness={0.5}
                        color={"white"}
                        envMapIntensity={0.5}
                        roughness={0.5}
                        metalness={0.8} />
                </mesh>
                <mesh position={[activeCord.x, 17, activeCord.y]}>
                    <sphereBufferGeometry args={[4, 16, 16]} />
                    <meshPhysicalMaterial
                        clearcoat={1}
                        clearCoatRoughness={0.5}
                        color={"red"}
                        envMapIntensity={0.5}
                        roughness={0.5}
                        metalness={0.8} />
                </mesh>
            </group>
        ) : null
    );
}
