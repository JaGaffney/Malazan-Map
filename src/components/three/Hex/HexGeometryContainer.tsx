import React from 'react'
import { Instances } from "@react-three/drei";

import HexGeometry from './HexGeometry';
import { useSelector } from 'react-redux';

export default function HexGeometryContainer(props) {
    const flatternData = useSelector((state: any) => state.settings.flattern)
    const shadowData = useSelector((state: any) => state.settings.shadows)
    const areaData = useSelector((state: any) => state.settings.areas)

    const tileToPosition = (tileX: number, tileY: number): Array<number> => {
        return [(tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535]
    };

    return (
        // @ts-expect-error
        <Instances
            limit={props.data.length - 1}
            castShadow={flatternData || !shadowData ? false : true}
            receiveShadow={flatternData || !shadowData ? false : true}
            material={props.material}
            geometry={props.geometry}
        >
            {props.data.map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    return (
                        <HexGeometry
                            position={tileToPosition(i.x, i.y)}
                            realPosition={i}
                            key={k}

                        />
                    )
                }
            })}
        </Instances>
    )
}
