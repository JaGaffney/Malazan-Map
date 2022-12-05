import { useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { DoubleSide, TextureLoader } from "three";

export default function Border() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = useLoader(TextureLoader, process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={[25, 1, 0]}>
            <cylinderGeometry args={[170, 170, 2, 50, 50, 1, true]} />
            <meshPhysicalMaterial envMap={envMap} map={dirt2} envMapIntensity={0.2} side={DoubleSide} />
        </mesh>
    );
}
