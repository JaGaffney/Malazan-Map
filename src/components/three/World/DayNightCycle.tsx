
// @ts-ignore
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import { Vector3 } from "three";

function DayNightCycle(props: any) {
    const light: any = useRef()
    const lightGroup: any = useRef();

    const { gl } = useThree();
    useEffect(() => {
        // @ts-expect-error
        gl.state.lightPos = new Vector3();
    }, [gl]);


    useFrame((state, dt) => {
        if (lightGroup?.current && light.current) {
            lightGroup.current.rotation.z += dt * props.speed;
        }
        // @ts-expect-error
        if (gl.state.lightPos) {
            // @ts-expect-error
            light.current.getWorldPosition(gl.state.lightPos)
        }
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
