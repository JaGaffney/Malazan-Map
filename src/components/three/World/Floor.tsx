import { useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { DoubleSide, TextureLoader } from "three";

export default function Floor() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = useLoader(TextureLoader, process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={[25, -5, 0]}>
            <cylinderBufferGeometry args={[170 + 3.5, 1, 100 * 0.1, 50]} />
            <meshPhysicalMaterial envMap={envMap} map={dirt2} envMapIntensity={0.2} side={DoubleSide} />
        </mesh>
    );
}
