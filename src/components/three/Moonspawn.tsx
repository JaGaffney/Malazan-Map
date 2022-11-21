import React from 'react'
import { useSelector } from "react-redux"

import { TextureLoader } from "three";

export const Moonspawn = () => {
    const moon = useSelector((state) => state.activeCord.moon)

    const moonTexture = new TextureLoader().load(process.env.PUBLIC_URL + "/textures/dirt2.jpg");

    return (
        <mesh position={moon}>
            <sphereGeometry args={[0.6, 6, 6]} />
            <meshPhysicalMaterial map={moonTexture} />
        </mesh>
    )
}
