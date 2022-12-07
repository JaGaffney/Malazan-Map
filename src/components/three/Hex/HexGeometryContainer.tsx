import React from 'react'
import { Instances } from "@react-three/drei";
import { Vector2 } from "three";

import HexGeometry from './HexGeometry';

export default function HexGeometryContainer(props) {
    //const activeTile = new Vector2()
    const tileToPosition = (tileX: number, tileY: number): Vector2 => {
        return new Vector2((tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535)
        // return new Vector2(tileX * 2, tileY * 2)
    };

    return (
        // @ts-expect-error
        <Instances limit={props.data.length - 1} castShadow receiveShadow material={props.material} geometry={props.geometry}>
            {props.data.map((i, k) => {
                return (
                    <HexGeometry
                        position={tileToPosition(i.x, i.y)}
                        key={k}
                    />
                )
            })}
        </Instances>
    )
}
