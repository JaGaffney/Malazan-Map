import { useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader, DoubleSide } from "three";

export default function Floor() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });
    const dirt2 = useLoader(TextureLoader, process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    // 473825
    return (
        <mesh position={[0, -5, 60]} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[1800, 1250]} />
            <meshStandardMaterial
                envMap={envMap}
                //map={dirt2} 
                color="#473825"
                envMapIntensity={0.2}
            />
        </mesh>
    );
}
