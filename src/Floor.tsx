import { useEnvironment } from "@react-three/drei";
import React from "react";
import { DoubleSide, TextureLoader } from "three";
import { CIRCLE_CUTOFF, MAX_HEIGHT } from "./contants";

export default function Floor() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={[60, -5, 60]} receiveShadow>
            <cylinderBufferGeometry args={[100 + 3.5, 1, 100 * 0.1, 50]} />
            <meshPhysicalMaterial envMap={envMap} map={dirt2} envMapIntensity={0.2} side={DoubleSide} />
        </mesh>
    );
}
