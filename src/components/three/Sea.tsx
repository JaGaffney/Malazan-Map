import { useEnvironment } from "@react-three/drei";
import React from "react";
import { Color, RepeatWrapping, TextureLoader, Vector2 } from "three";

export default function Sea() {
    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    let seaTexture = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/water.jpg");
    seaTexture.repeat = new Vector2(1, 1);
    seaTexture.wrapS = RepeatWrapping;
    seaTexture.wrapT = RepeatWrapping;

    return (
        <mesh position={[25, -4, 0]}>
            <cylinderBufferGeometry args={[170, 1, 100 * 0.1, 50]} />
            <meshPhysicalMaterial
                envMap={envMap}
                flatShading={true}
                color={new Color("#55aaff").convertSRGBToLinear().multiplyScalar(3)}
                ior={1.4}
                transmission={1}
                transparent={true}
                thickness={0.1}
                envMapIntensity={0.2}
                roughness={1}
                metalness={0.025}
                roughnessMap={seaTexture}
                metalnessMap={seaTexture}
            />
            {/* <meshBasicMaterial color={new Color("#006994")} /> */}
        </mesh>
    );
}
