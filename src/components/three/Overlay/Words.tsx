import React, { useEffect, useState } from 'react'
import { Billboard, Text } from "@react-three/drei";
import { useDispatch } from 'react-redux';
import { updateActiveCity } from '../../../state/features/engine';
import { tileToPosition } from '../../utils/helpers';
import { calculateColorCityType } from '../../utils/color';

import { MeshBasicMaterial, Vector3 } from "three";
import { ICityData } from '../../../data/city';

interface IWords {
    data: ICityData;
    cityKey: number;
}
function Words(props: IWords) {
    const dispatch = useDispatch()

    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'all-scroll'

        return () => {
            document.body.style.cursor = 'all-scroll'
        }
    }, [hovered])



    const city: ICityData = props.data

    const defaultLength: number = 30 + (city.name.length / 2)
    const defaultColorType = calculateColorCityType(city.type)

    const convertedPosition: Array<number> = tileToPosition(city.loc[0], city.loc[2])
    const newPos: Vector3 = new Vector3(convertedPosition[0], city.loc[1], convertedPosition[1])

    const flagStandardMaterial: MeshBasicMaterial = new MeshBasicMaterial({ color: defaultColorType.hex })

    return (
        <group position={newPos}
            onClick={() => dispatch(updateActiveCity(props.cityKey))}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <mesh position={[0, -9, 0]}>
                <cylinderBufferGeometry args={[1, 1, 10, 10]} />
                <meshBasicMaterial
                    color={"white"}
                />
            </mesh>

            <Billboard
                follow={true}
                lockX={false}
                lockY={false}
                lockZ={false} // Lock the rotation on the z axis (default=false)
            >
                <mesh position={[0, 1, 0]} material={flagStandardMaterial} renderOrder={1}>
                    <planeBufferGeometry args={[defaultLength - 4, 9]} />
                </mesh>

                <mesh position={[0, 1, 0]} >
                    <meshBasicMaterial color={"white"} />
                    <planeGeometry args={[defaultLength - 3, 10]} />
                </mesh>

                <Text color={"#f0fdf4"} position={[0, 1.2, 2]} characters="abcdefghijklmnopqrstuvwxyz0123456789!" fontSize={4}>{city.name}</Text>
            </Billboard>

        </group>
    )
}

export default Words
