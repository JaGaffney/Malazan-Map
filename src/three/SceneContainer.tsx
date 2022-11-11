import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import { Color } from "three";

import React from "react";
import Hex from "./Hex";

import Sea from "../Sea";
import Border from "./Border";
import Floor from "./Floor";
import FloatingGrid from "./FloatingGrid";
import Highlight from "./Highlight";

import { Provider } from 'react-redux'
import { store } from "../state/store"


let lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();

let mesh = new Mesh(
    new CylinderGeometry(0.3, 0.3, 0.2, 20),
    new MeshBasicMaterial({
        color: lightColor,
        transparent: true,
        opacity: 1,
    })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

export function SceneContainer() {
    return (
        <Provider store={store}>
            <Suspense fallback={null} >
                <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
                <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />

                <PerspectiveCamera makeDefault fov={55} position={[0, 200, 0]} />
                {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}
                <OrbitControls maxDistance={250} dampingFactor={0.05} enableDamping={true} />
                <pointLight position={[165, 33, 93]} castShadow color={lightColor} intensity={5} shadowMapHeight={512} shadowMapWidth={512} shadowCameraNear={0.1} shadowCameraFar={500} />

                <Hex />
                <Highlight />
                {/* makes it better but lags */}
                {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sea />
            <Border />
            <Floor />
            <FloatingGrid /> */}

            </Suspense>

        </Provider>
    );
}
