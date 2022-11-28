import React from 'react'
import { Billboard, Text, useEnvironment } from "@react-three/drei";
import { useSelector } from 'react-redux';
import { TextureLoader, } from "three";


function Words(props) {
    const calculateColorCityType = (cityType: number): string => {
        switch (cityType) {
            case (1):
                return "#b91c1c"
            case (2):
                return "#296bb1"
            default:
                return "#2c384b"
        }
    }
    const calculateColorOwner = (owner: string): string => {
        switch (owner) {
            case ("malazan"):
                return "#7f1d1d"
            case ("Anomander Rake"):
                return "#4c1d95"
            case ("Army of the Apocalpse"):
                return "#92400e"
            default:
                return "#2c384b"
        }
    }

    const city = useSelector((state) => state.activeCord.city)

    let fabricNormal = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/fabric/textures/normal.jpg");
    let fabricDiff = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/fabric/textures/diff.jpg");
    let fabricRoughness = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/fabric/textures/rough.jpg");

    const defaultLength = 30 + (city.name.length / 2)
    const defaultColorType = calculateColorCityType(city.type)
    const defaultColorOwner = calculateColorOwner(city.owner)

    return (
        <>
            <group position={city.location}>
                <mesh position={[0.5, -9, 0]}>
                    <cylinderBufferGeometry args={[0.4, 0.1, 10, 10]} />
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
                    <mesh position={[defaultLength / 2, 1.5, 0]}>
                        <planeBufferGeometry args={[defaultLength, 9]} />
                        <meshBasicMaterial
                            color={defaultColorOwner}
                        />
                    </mesh>
                    <mesh position={[defaultLength / 2, 1.5, -0.2]}>
                        <planeBufferGeometry args={[defaultLength + 2, 11]} />
                        <meshBasicMaterial
                            color={defaultColorType}
                        />
                    </mesh>

                    <Text position={[defaultLength / 2, 1.5, 0]} fontSize={5}>{city.name}</Text>
                </Billboard>
            </group>
        </>
    )
}


export default Words
