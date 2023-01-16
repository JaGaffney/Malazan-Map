import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from "three";
import Hex from './Hex/Hex';
import Flags from './Overlay/Flags';
import Highlight from './Overlay/Highlight';

function Cam(props) {
    const [pos, setPos] = useState([-400, 0, -100])
    // need to do it this way in order to access redux for the camera
    const activeCord = useSelector((state: any) => state.filter.activeCord)

    // const vec = new Vector3()
    //console.log(activeCord)
    // useFrame((state) => {
    //     if (activeCord.x !== 0) {
    //         console.log(state)
    //         state.camera.position.lerp({ x: activeCord.x, y: activeCord.y, z: 85 }, 0.5)
    //         // state.mouse.x
    //         // state.mouse.y
    //     }
    // })

    // useEffect(() => {
    //     if (activeCord.x !== 0) {
    //         setPos([activeCord.x - 400, 0, -100,])
    //     }



    // }, [activeCord])



    return (<>
        <PerspectiveCamera makeDefault fov={45} position={[0, 200, 85]} />


        {/* <group position={pos}>
            <Hex />
            <Flags />
            <Highlight />
        </group> */}
        {/* <OrbitControls enableRotate={false} maxDistance={600} dampingFactor={0.1} enableDamping={true} target-y={activeCord.y} /> */}

    </>
    )
}


export default Cam
