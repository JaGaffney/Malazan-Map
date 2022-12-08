import React from 'react'

import { useSelector } from 'react-redux'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

function Cam(props) {
    // need to do it this way in order to access redux for the camera
    const activeCord = useSelector((state) => state.activeCord.activeCord)

    return (<>
        <PerspectiveCamera makeDefault fov={45} position={[0, 200, 85]} />
        {/* <OrbitControls enableRotate={false} maxDistance={600} dampingFactor={0.1} enableDamping={true} target={[activeCord.x, 0, 0]} /> */}

    </>
    )
}


export default Cam
