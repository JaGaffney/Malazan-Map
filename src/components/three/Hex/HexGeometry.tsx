// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Instance } from "@react-three/drei";


interface IHexGeometry {
    position: Array<number>;
    realPosition: Array<number>;
}
const HexGeometry = (props: IHexGeometry) => {
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'all-scroll'
        return () => {
            document.body.style.cursor = 'all-scroll'
        }
    }, [hovered])

    return (
        props.realPosition.c ? (
            // @ts-expect-error
            <Instance
                position={[props.position[0], 1, props.position[1]]}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            //onClick={() => console.log(`Hex: x ${props.position[0]} y ${props.position[1]}, Real: x ${props.realPosition.x}, y ${props.realPosition.y}`)}
            />
        ) : (
            // @ts-expect-error
            <Instance
                position={[props.position[0], 1, props.position[1]]}
            //onClick={() => console.log(`Hex: x ${props.position[0]} y ${props.position[1]}, Real: x ${props.realPosition.x}, y ${props.realPosition.y}`)}
            />
        )
    )
}

export default HexGeometry