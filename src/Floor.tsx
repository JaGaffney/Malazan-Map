import { useEnvironment } from "@react-three/drei";
import React from "react";
import { DoubleSide, TextureLoader } from "three";
import { CIRCLE_CUTOFF, MAX_HEIGHT } from "./contants";

export default function Floor() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={[0, -MAX_HEIGHT * 0.05, 0]} receiveShadow>
            <cylinderBufferGeometry args={[CIRCLE_CUTOFF + 3.5, CIRCLE_CUTOFF + 3.5, MAX_HEIGHT * 0.1, 50]} />
            <meshPhysicalMaterial envMap={envMap} map={dirt2} envMapIntensity={0.2} side={DoubleSide} />
        </mesh>
    );
}
