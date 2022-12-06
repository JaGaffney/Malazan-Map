import { useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { DoubleSide, TextureLoader } from "three";

export default function Floor() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = useLoader(TextureLoader, process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={[0, -5, 60]} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[1000, 500]} />
            <meshPhysicalMaterial envMap={envMap} map={dirt2} envMapIntensity={0.2} side={DoubleSide} />
        </mesh>
    );
}
