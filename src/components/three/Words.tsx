import React from 'react'
import { Billboard, Text, useEnvironment } from "@react-three/drei";
import { useSelector } from 'react-redux';
import { TextureLoader, } from "three";


function Words(props) {
    const city = useSelector((state) => state.activeCord.city)

    let fabricNormal = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/fabric/textures/normal.jpg");
    let fabricDiff = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/fabric/textures/diff.jpg");
    let fabricRoughness = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/fabric/textures/rough.jpg");

    return (
        <>
            <group position={city.location}>
                <mesh position={[0.5, -3, 0]}>
                    <cylinderBufferGeometry args={[0.5, 0.5, 22, 30]} />
                    <meshPhysicalMaterial
                        clearcoat={1}
                        clearCoatRoughness={0.5}
                        color={"white"}
                        map={fabricDiff}
                        envMapIntensity={0.5}
                        roughness={0.5}
                        metalness={0.8}

                    />
                </mesh>

                <Billboard
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false} // Lock the rotation on the z axis (default=false)
                >
                    <mesh position={[15 + city.name.length / 2, 1.5, 0]}>
                        <planeBufferGeometry args={[30 + city.name.length, 9]} />
                        <meshPhysicalMaterial
                            color={"white"}
                            map={fabricDiff}
                            envMapIntensity={0.1}
                            normalMap={fabricNormal}
                            roughnessMap={fabricRoughness}
                            emissive={[0.1, 0.1, 0.1]}
                        />
                    </mesh>

                    <Text position={[17, 1.5, 0]} fontSize={5}>{city.name}</Text>
                </Billboard>
            </group>
        </>
    )
}


export default Words
