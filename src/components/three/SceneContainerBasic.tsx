import React, { Suspense } from "react";
import { MapControls } from "@react-three/drei";


import Sea from "./World/Sea";
import Floor from "./World/Floor";
import Hex from "./Hex/Hex";
import Highlight from "./Overlay/Highlight";
import Cam from "./Cam"

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../state/store"


export function SceneContainerBasic() {
    return (
        <Provider store={store}>

            <Cam />
            {/* <OrbitControls target={[5, 5, 5]} maxPolarAngle={Math.PI * 0.5} /> */}

            <MapControls enableRotate={navigator.userAgent.search("Firefox") === 67 ? true : false} maxDistance={600} dampingFactor={0.1} enableDamping={true} />

            <group position={[-400, 0, -100]}>
                <Hex />
                <Highlight />
            </group>

            <Sea />
            <Floor />

        </Provider>
    );
}
