import React, { Suspense } from "react";
import { MapControls } from "@react-three/drei";
import { Color } from "three";

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../../state/store"

import Sea from "../World/Sea";
import Floor from "../World/Floor";
import Highlight from "../Overlay/Highlight";
import Flags from "../Overlay/Flags";
import InstanceHexContainer from "../Hex/InstanceHexContainer";
import FloatingGrid from "../World/FloatingGrid";
import Cam from "./Cam"

export function SceneContainerStandard(props) {
    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();
    return (
        <Provider store={store}>

            <Cam />
            {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}

            <MapControls enableRotate={true} maxDistance={600} dampingFactor={0.1} enableDamping={true} {...props} />
            {/* <Controls /> */}
            <pointLight position={[160, 200, 93]} castShadow color={lightColor} intensity={1} shadowMapHeight={512} shadowMapWidth={512} shadowCameraNear={0.1} shadowCameraFar={500} />
            {/* <ambientLight /> */}

            <group position={[-400, 0, -100]}>
                <InstanceHexContainer />
                <Flags />
                <Highlight />
            </group>

            <Sea />
            <Floor />
            <FloatingGrid />

        </Provider>
    );
}
