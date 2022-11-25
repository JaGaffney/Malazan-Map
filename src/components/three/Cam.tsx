import React from 'react'

import { useSelector } from 'react-redux'
import { PerspectiveCamera } from '@react-three/drei'

function Cam(props) {
    // need to do it this way in order to access redux for the camera
    const activeCord = useSelector((state) => state.activeCord.activeCord)

    return (
        <PerspectiveCamera makeDefault fov={45} position={[0, 200, 85]} />
    )
}


export default Cam
