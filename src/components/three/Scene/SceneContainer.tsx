import React, { useEffect } from "react";
import { Environment, MapControls, PerspectiveCamera, } from "@react-three/drei";

import Sea from "../World/Sea";
import Floor from "../World/Floor";
import FloatingGrid from "../World/FloatingGrid";
import Highlight from "../Overlay/Highlight";
import Building from "../Building/Building";

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../../state/store"
import Flags from "../Overlay/Flags";
import InstanceHexContainer from "../Hex/InstanceHexContainer";
import DayNight from "../World/DayNight";

interface ISceneContainer {

}
export function SceneContainer(props: ISceneContainer) {
    useEffect(() => {
        document.body.style.cursor = 'all-scroll'
    }, [])

    return (
        <Provider store={store}>

            <Environment background={"only"} files={"/textures/bg.hdr"} />
            <Environment background={false} files={"/textures/envmap2.hdr"} />

            <PerspectiveCamera makeDefault fov={45} position={[0, 200, 85]} {...props} />

            <MapControls enableRotate={true} maxDistance={600} dampingFactor={0.1} enableDamping={true} {...props} />
            <DayNight />

            <group position={[-400, 0, -100]}>
                {/* <Hex /> */}
                <InstanceHexContainer />
                <Highlight />
                <Flags />
                {/* <Building /> */}
            </group>

            <Sea />
            <Floor />
            <FloatingGrid />

        </Provider>
    );
}
