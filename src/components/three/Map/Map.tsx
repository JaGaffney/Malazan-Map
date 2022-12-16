import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Vector3 } from "three";
import React, { useRef } from 'react'
import { Billboard, OrbitControls } from '@react-three/drei';


const Map = (props) => {
    const moonTexture = useLoader(TextureLoader, process.env.PUBLIC_URL + "/images/map.jpg");

    const myMesh = useRef();
    // useFrame(({ clock }) => {
    //     const a = clock.getElapsedTime();
    //     myMesh.current.rotation.y = a;
    // });

    return (
        <>
            <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} />
            <group>

                <mesh ref={myMesh}>
                    <sphereGeometry args={[15, 64, 64]} />
                    <meshPhysicalMaterial map={moonTexture} />
                </mesh>
            </group>

        </>
    )
}

export default Map

