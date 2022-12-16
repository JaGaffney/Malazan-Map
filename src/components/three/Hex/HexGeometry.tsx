import React from 'react'
import { Instance } from "@react-three/drei";

const HexGeometry = (props) => {
    return (
        // @ts-expect-error
        <Instance
            position={[props.position[0], 1, props.position[1]]}
        //onClick={() => console.log(`Hex: x ${props.position[0]} y ${props.position[1]}, Real: x ${props.realPosition.x}, y ${props.realPosition.y}`)}
        />
    )
}

export default HexGeometry