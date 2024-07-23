
import { Billboard, Text } from "@react-three/drei";
import { useSelector } from 'react-redux';

import { Vector3 } from "three";
import AREAS from '../../../data/areas';

interface IAreaWord {
    loc: Array<number>;
    name: string;
    textColor: string;
}
function AreaWord({ loc, name, textColor }: IAreaWord) {
    const newPos: Vector3 = new Vector3(loc[0], loc[1], loc[2])
    const defaultLength: number = 35 + (name.length * 8)
    return (
        <group position={newPos} rotation-x={-Math.PI * 0.5}>

            <mesh position={[0, 4, -5]}>
                <planeGeometry args={[defaultLength, 25, 1, 1]} />
                <meshPhysicalMaterial
                    color={"white"}
                    transmission={0.9}
                    roughness={0.3}
                />
            </mesh>
            <Text color={textColor} position={[0, 5, 0]} characters="abcdefghijklmnopqrstuvwxyz" fontSize={20}>{name}</Text>
        </group>
    )
}

function Areas(props: any) {
    const areas = useSelector((state: any) => state.filter.areas)
    const areaData = AREAS
    return (
        areas ? (
            <group>
                {areaData.map((i, k) => {
                    return (
                        <AreaWord loc={i.loc} name={i.name} textColor={props.textColor} key={k} />
                    )
                })}
            </group>
        ) : (
            null
        )

    )
}

export default Areas
