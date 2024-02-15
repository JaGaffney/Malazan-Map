import React, { useEffect, useState } from 'react'
import { Billboard, Text } from "@react-three/drei";
import { useDispatch } from 'react-redux';
import { updateActiveCity } from '../../../state/features/engine';
import { tileToPosition } from '../../utils/helpers';
import { calculateColorCityType } from '../../utils/color';

import { MeshBasicMaterial } from "three";

function Words(props) {
    const dispatch = useDispatch()

    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'all-scroll'

        return () => {
            document.body.style.cursor = 'all-scroll'
        }
    }, [hovered])



    const city = props.data

    const defaultLength = 30 + (city.name.length / 2)
    const defaultColorType = calculateColorCityType(city.type)

    const convertedPosition = tileToPosition(city.loc[0], city.loc[2])
    const newPos = [convertedPosition[0], city.loc[1], convertedPosition[1]]

    const triangleArray = new Float32Array([200, 200, 10, 10, 20, 30, 200, 10, 1]);

    const flagStandardMaterial = new MeshBasicMaterial({ color: defaultColorType.hex })

    return (
        <>
            <group position={newPos}
                onClick={() => dispatch(updateActiveCity(props.cityKey))}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <mesh position={[0.5, -9, 0]}>
                    <cylinderBufferGeometry args={[0.4, 0.1, 10, 10]} />
                    <meshPhysicalMaterial
                        clearcoat={1}
                        clearCoatRoughness={0.5}
                        color={"white"}
                        envMapIntensity={0.5}
                        roughness={0.5}
                        metalness={0.8}

                    />
                </mesh>

                <mesh>
                    <bufferGeometry attach="geometry">
                        <bufferAttribute
                            attachObject={["attributes", "position"]}
                            count={3}
                            array={triangleArray}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial
                        attach="material"
                        color="#5243aa"
                        wireframe={true}
                    />
                </mesh>

                <Billboard
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false} // Lock the rotation on the z axis (default=false)
                >
                    <mesh position={[defaultLength / 2, 1.5, 1]}>
                        <planeBufferGeometry args={[defaultLength - 5, 7]} />
                        <meshBasicMaterial
                            color={defaultColorType.hexOverlay}
                        />
                    </mesh>
                    <mesh position={[defaultLength / 2, 1.5, 0]} material={flagStandardMaterial}>
                        <planeBufferGeometry args={[defaultLength + 2, 11]} />
                    </mesh>


                    <group >
                        <mesh position={[defaultLength / 2, 6, 0]} material={flagStandardMaterial}>
                            <planeBufferGeometry args={[defaultLength + 14, 2]} />
                        </mesh>
                        <mesh position={[defaultLength / 2, 1.5, 0]} material={flagStandardMaterial}>
                            <planeBufferGeometry args={[defaultLength + 10, 3]} />
                        </mesh>
                        <mesh position={[defaultLength / 2, -3, 0]} material={flagStandardMaterial}>
                            <planeBufferGeometry args={[defaultLength + 14, 2]} />
                        </mesh>
                    </group>


                    <Text color={"#f0fdf4"} position={[defaultLength / 2, 1.5, 2]} characters="abcdefghijklmnopqrstuvwxyz0123456789!" fontSize={5}>{city.name}</Text>
                </Billboard>
            </group>
        </>
    )
}


export default Words
