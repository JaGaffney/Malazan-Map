
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import { Vector3 } from "three";

function DayNightCycle(props) {
    const light = useRef()
    const lightGroup = useRef();



    //useHelper(light, DirectionalLightHelper, 1, "red");

    const { gl } = useThree();
    useEffect(() => {
        gl.state.lightPos = new Vector3();
    }, [gl]);


    useFrame((state, dt) => {
        if (lightGroup?.current && light.current) {
            lightGroup.current.rotation.z += dt * props.speed;
        }
        if (gl.state.lightPos) {
            light.current.getWorldPosition(gl.state.lightPos)
        }
        console.log(gl.state)
    });



    return (
        <>
            <group ref={lightGroup}>
                <pointLight
                    ref={light}
                    position={props.pos}
                    castShadow={props.willCastShadow}
                    color={props.lightColor}
                    intensity={props.intensity}
                />
            </group>
        </>
    )
}


export default DayNightCycle
