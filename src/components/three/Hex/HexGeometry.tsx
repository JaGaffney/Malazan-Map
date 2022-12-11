import React from 'react'
import { Instance } from "@react-three/drei";

export default function HexGeometry(props) {
    return (
        <Instance
            position={[props.position.x, 1, props.position.y]}
        //onClick={() => console.log(`Hex: x ${props.position.x} y ${props.position.y}, Real: x ${props.realPosition.x}, y ${props.realPosition.y}`)}
        />
    )
}

