
import { Text } from "@react-three/drei";
import { useSelector } from 'react-redux';

import { Vector3 } from "three";
import AREAS from '../../../data/areas';
import { useEffect } from "react";

interface IAreaWord {
    loc: Array<number>;
    name: string;
}
function AreaWord({ loc, name }: IAreaWord) {
    const newPos: Vector3 = new Vector3(loc[0], loc[1], loc[2])
    const defaultLength: number = 10 + (name.length * 6)
    return (
        <group position={newPos} rotation-x={-Math.PI * 0.5}>

            <mesh position={[0, 4, -1]}>
                <planeGeometry args={[defaultLength, 16, 1, 1]} />
                <meshPhysicalMaterial
                    color={"black"}
                    transparent={true}
                    transmission={0.9}
                    roughness={0.5}
                    opacity={0.5}
                    metalness={0.5}
                    reflectivity={1}
                />
            </mesh>
            <Text color={"white"} position={[0, 5, 0]} characters="abcdefghijklmnopqrstuvwxyz" fontSize={10}>{name}</Text>
        </group>
    )
}

function Areas(props: any) {
    const areas: boolean = useSelector((state: any) => state.filter.areas)
    const areaData = AREAS

    return (

        <>
            {areaData.map((i, k) => {
                return (
                    areas ? (
                        <AreaWord loc={i.loc} name={i.name} key={k} />
                    ) :

                        <Text color={"white"} position={[0, -5, 0]} characters="abcdefghijklmnopqrstuvwxyz" fontSize={1}>{""}</Text>

                )
            })}
        </>
    )
}

export default Areas
