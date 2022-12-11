import React, { useRef } from 'react'
import { Instances } from "@react-three/drei";
import { Vector2 } from "three";

import HexGeometry from './HexGeometry';
import { useSelector } from 'react-redux';

export default function HexGeometryContainer(props) {
    const flatternData = useSelector((state) => state.settings.flattern)
    const shadowData = useSelector((state) => state.settings.shadows)
    const areaData = useSelector((state) => state.settings.areas)


    const ref = useRef()
    //const activeTile = new Vector2()
    const tileToPosition = (tileX: number, tileY: number): Vector2 => {
        return new Vector2((tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535)
        // return new Vector2(tileX * 2, tileY * 2)
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
            {props.data.map((i, k) => {
                if (areaData.includes(i.a)) {
                    return (
                        <HexGeometry
                            position={tileToPosition(i.x, i.y)}
                            realPosition={i}
                            key={k}
                            ref={ref}
                        />
                    )
                }

            })}
        </Instances>
    )
}
