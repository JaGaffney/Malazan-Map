import React, { useEffect } from "react";
import { Environment, MapControls, } from "@react-three/drei";


import Sea from "../World/Sea";

import Floor from "../World/Floor";
import FloatingGrid from "../World/FloatingGrid";


import Hex from "../Hex/Hex";
import Highlight from "../Overlay/Highlight";

import Building from "../Building/Building";
import Cam from "./Cam"

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../../state/store"
import Flags from "../Overlay/Flags";
import InstanceHexContainer from "../Hex/InstanceHexContainer";
import DayNight from "../World/DayNight";

export function SceneContainer(props) {
    useEffect(() => {
        document.body.style.cursor = 'all-scroll'
    }, [])


    return (
        <Provider store={store}>

            <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
            <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap2.hdr"} />

            <Cam />
            {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}

            <MapControls enableRotate={true} maxDistance={600} dampingFactor={0.1} enableDamping={true} {...props} />
            <DayNight />

            <group position={[-400, 0, -100]}>
                {/* <Hex /> */}
                <InstanceHexContainer />
                <Highlight />
                <Flags />
                <Building />
            </group>


            {/* makes it better but lags */}

            <Sea />
            <Floor />
            <FloatingGrid />

        </Provider>
    );
}
