import { useEnvironment } from "@react-three/drei";
import React from "react";
import { DoubleSide, TextureLoader } from "three";
import { CIRCLE_CUTOFF, MAX_HEIGHT } from "./contants";

export default function Border() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={[0, MAX_HEIGHT * 0.125, 0]} receiveShadow>
            <cylinderGeometry args={[CIRCLE_CUTOFF + 2.1, CIRCLE_CUTOFF + 2.1, MAX_HEIGHT * 0.25, 50, 1, true]} />
            <meshPhysicalMaterial envMap={envMap} map={dirt2} envMapIntensity={0.2} side={DoubleSide} />
        </mesh>
    );
}
