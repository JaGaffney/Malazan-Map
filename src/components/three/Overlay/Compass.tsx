import { Bounds, Center, PerspectiveCamera, useBounds, Hud } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'



const Compass = (props) => {
    const activeCord = useSelector((state: any) => state.filter.activeCord)
    const activeID = useSelector((state: any) => state.filter.activeData.id)


    const ref = useRef();

    // useFrame(({ camera }) => {
    //     // Move mesh to be flush with camera
    //     console.log(camera.position)
    //     ref.current.position.copy(camera.position);
    //     ref.current.position.x = ref.current.position.x - 400;
    //     ref.current.position.z = ref.current.position.z - 100;
    //     ref.current.quaternion.copy(camera.quaternion);

    //     // Apply offset
    //     ref.current.translateZ(-5);
    // });

    // const bounds = useBounds()
    // console.log(bounds)
    // useEffect(() => {
    //     // Calculate scene bounds
    //     console.log(bounds)
    //     //bounds.refresh().clip().fit()

    //     // Or, focus a specific object or box3
    //     // bounds.refresh(ref.current).clip().fit()
    //     bounds?.refresh(ref).clip().fit()

    //     // Or, move the camera to a specific position, and change its orientation
    //     //bounds.moveTo([0, 10, 10]).lookAt({ target: [5, 5, 0], up: [0, -1, 0] })

    //     // For orthographic cameras, reset has to be used to center the view (fit would only change its zoom to match the bounding box)
    //     // bounds.refresh().reset().clip().fit()
    // }, [activeCord])

    const interpolateFunc = (t: number) => 1 - Math.exp(-5 * t) + 0.007 * t // Matches the default Bounds behavior
    const interpolateFunc1 = (t: number) => -t * t * t + 2 * t * t          // Start smoothly, finish linearly
    const interpolateFunc2 = (t: number) => -t * t * t + t * t + t          // Start linearly, finish smoothly


    return (
        activeID !== 0 && activeCord !== null ? (

            // <Hud>
            //     <PerspectiveCamera makeDefault position={[0, -3, 10]} />
            //     <mesh>
            //         <planeBufferGeometry args={[1, 1]} />
            //         <meshBasicMaterial />
            //     </mesh>
            //     <mesh>
            //         <planeBufferGeometry args={[0.2, 0.8]} />
            //         <meshBasicMaterial color={"red"} />
            //     </mesh>
            // </Hud>

            <Bounds fit clip observe margin={1.2} maxDuration={1} interpolateFunc={interpolateFunc1}>
                {/* 
                <mesh ref={ref} position={[activeCord.x, 2, activeCord.y]}>
                    <boxGeometry args={[10, 50, 10]} />
                    <meshStandardMaterial />
                </mesh> */}
                <Foo activeCord={activeCord} />
            </Bounds>



        ) : null
    );
}

export default Compass


function Foo(props) {
    const ref = useRef();
    const bounds = useBounds()
    useEffect(() => {
        bounds.refresh().fit()
        //     // Calculate scene bounds
        //     console.log(bounds)
        //     //bounds.refresh().fit()

        //     // Or, focus a specific object or box3
        //     bounds.refresh(ref.current).clip().fit()
        //     // bounds.refresh(new THREE.Box3()).clip().fit()

        //     // Or, move the camera to a specific position, and change its orientation
        // bounds.moveTo([props.activeCord.x, 2, props.activeCord.y]).lookAt({ target: [5, 5, 0], up: [0, -1, 0] })

        //     // For orthographic cameras, reset has to be used to center the view (fit would only change its zoom to match the bounding box)
        //     //bounds.refresh().reset().clip().fit()
    }, [])

    return (
        <mesh ref={ref} position={[props.activeCord.x, 2, props.activeCord.y]} onClick={(e) => (e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && bounds.refresh().fit()}>
            <boxGeometry args={[10, 50, 10]} />
            <meshStandardMaterial />
        </mesh>
    )
}