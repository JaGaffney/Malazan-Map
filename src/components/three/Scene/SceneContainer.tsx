import React, { Suspense, useEffect } from "react";
import { Environment, Stars, MapControls, PerspectiveCamera, } from "@react-three/drei";
import { Color } from "three";

import Sea from "../World/Sea";
import Border from "../World/Border";
import Floor from "../World/Floor";
import FloatingGrid from "../World/FloatingGrid";
import Map from "../Map/Map"

import Hex from "../Hex/Hex";
import Highlight from "../Overlay/Highlight";
import Words from "../Overlay/Words"
import Moonspawn from "../Overlay/Moonspawn";
import Building from "../Building/Building";
import Cam from "./Cam"

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../../state/store"
import Flags from "../Overlay/Flags";
import { useFrame } from "@react-three/fiber";
import GhostMap from "../World/GhostMap";

export function SceneContainer(props) {
    useEffect(() => {
        document.body.style.cursor = 'all-scroll'
    }, [])



    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();

    return (
        <Provider store={store}>

            <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
            <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />

            <Cam />
            {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}

            <MapControls enableRotate={navigator.userAgent.search("Firefox") === 67 ? true : false} maxDistance={600} dampingFactor={0.1} enableDamping={true} />
            <pointLight position={[165, 33, 93]} castShadow color={lightColor} intensity={5} shadowMapHeight={512} shadowMapWidth={512} shadowCameraNear={0.1} shadowCameraFar={500} />

            <group position={[-400, 0, -100]}>
                <Hex />
                <Highlight />
                {/* <Moonspawn /> */}
                <Flags />
                <Building />
            </group>

            {/* <Map /> */}

            {/* makes it better but lags */}
            <Stars radius={10} depth={500} count={5000} factor={4} saturation={0} fade speed={1} />
            {/* <GhostMap /> */}
            <Sea />
            <Floor />
            <FloatingGrid />

            {/* <Border /> */}

        </Provider>
    );
}