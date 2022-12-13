import { useLoader } from '@react-three/fiber';
import React from 'react'
import { useSelector } from "react-redux"

import { TextureLoader } from "three";

export default function Moonspawn() {
    const moon = useSelector((state: any) => state.filter.moon)

    const moonTexture = useLoader(TextureLoader, process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={moon}>
            <sphereGeometry args={[0.6, 6, 6]} />
            <meshPhysicalMaterial map={moonTexture} />
        </mesh>
    )
}
