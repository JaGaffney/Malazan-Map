
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
    return (
        <group position={newPos}>
            <Billboard
                follow={true}
                lockX={false}
                lockY={false}
                lockZ={false} // Lock the rotation on the z axis (default=false)
            >
                <Text color={textColor} position={[0, 3, 0]} characters="abcdefghijklmnopqrstuvwxyz" fontSize={20}>{name}</Text>
            </Billboard>
        </group>
    )
}

function Areas(props: any) {
    const areas = useSelector((state: any) => state.filter.areas)
    const areaData = AREAS
    console.log(areas)
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
