import React, { Suspense } from "react";
import { MapControls } from "@react-three/drei";
import { Color } from "three";


import Sea from "./World/Sea";
import Floor from "./World/Floor";
import Hex from "./Hex/Hex";
import Highlight from "./Overlay/Highlight";
import Cam from "./Cam"

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../state/store"
import Flags from "./Overlay/Flags";
import Controls from "./Controls";


export function SceneContainerBasic() {
    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();
    return (
        <Provider store={store}>

            <Cam />
            {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}

            <MapControls enableRotate={navigator.userAgent.search("Firefox") === 67 ? true : false} maxDistance={600} dampingFactor={0.1} enableDamping={true} />
            {/* <Controls /> */}
            <pointLight position={[165, 33, 93]} color={lightColor} intensity={5} shadowMapHeight={512} shadowMapWidth={512} shadowCameraNear={0.1} shadowCameraFar={500} />

            <group position={[-400, 0, -100]}>
                <Hex />
                <Flags />
                <Highlight />
            </group>

            <Sea />
            <Floor />

        </Provider>
    );
}
