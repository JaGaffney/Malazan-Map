import React, { Suspense } from "react";
import { MapControls, Stars } from "@react-three/drei";
import { Color } from "three";


import Sea from "../World/Sea";
import Floor from "../World/Floor";
import Hex from "../Hex/Hex";
import Highlight from "../Overlay/Highlight";
import Cam from "./Cam"

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../../state/store"
import Flags from "../Overlay/Flags";
import InstancesTest from "../Hex/InstancesTest";
import FloatingGrid from "../World/FloatingGrid";


export function SceneContainerFast() {
    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();
    return (
        <Provider store={store}>

            <Cam />
            {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}

            <MapControls enableRotate={true} maxDistance={600} dampingFactor={0.1} enableDamping={true} />
            {/* <Controls /> */}
            <pointLight position={[160, 200, 93]} castShadow color={lightColor} intensity={1} shadowMapHeight={512} shadowMapWidth={512} shadowCameraNear={0.1} shadowCameraFar={500} />
            {/* <ambientLight /> */}


            <group position={[-400, 0, -100]}>
                {/* <Hex /> */}
                <InstancesTest />
                <Flags />
                <Highlight />
            </group>

            <Sea />
            <Floor />
            <FloatingGrid />

        </Provider>
    );
}
