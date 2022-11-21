import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { Color } from "three";

import React from "react";
import Hex from "./Hex";

import Sea from "./Sea";
import Border from "./Border";
import Floor from "./Floor";
import FloatingGrid from "./FloatingGrid";
import Highlight from "./Highlight";
import Words from "./Words"

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../state/store"
import { Moonspawn } from "./Moonspawn";


let lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();

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

                <group position={[-110, 0, -100]}>
                    <Hex />
                    <Highlight />
                    <Moonspawn />
                    <Words />
                </group>

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
