import { Sparkles, useEnvironment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import { useSelector } from "react-redux";
import { Color, RepeatWrapping, TextureLoader, Vector2 } from "three";

export default function Sea() {
    const dayNightData = useSelector((state: any) => state.settings.dayNight)
    const nightData = useSelector((state: any) => state.settings.night)


    const envMap = useEnvironment({ files: "/textures/envmap5.hdr" });

    // @ts-expect-error
    let seaTexture = useLoader(TextureLoader, "/textures/water.jpg");
    seaTexture.repeat = new Vector2(1, 1);
    seaTexture.wrapS = RepeatWrapping;
    seaTexture.wrapT = RepeatWrapping;

    return (
        <>


            <mesh position={[0, -3, 50]} rotation-x={-Math.PI * 0.5}>
                <planeGeometry args={[1800, 1250]} />
                <meshPhysicalMaterial
                    envMap={envMap}
                    flatShading={true}
                    color={nightData ? new Color("#55aaff").convertSRGBToLinear().multiplyScalar(0.5) : new Color("#55aaff").convertSRGBToLinear().multiplyScalar(3)}
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
        </>
    );
}
