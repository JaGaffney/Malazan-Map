import { MapControls, PerspectiveCamera } from "@react-three/drei";

import Highlight from "../Overlay/Highlight";

// have to do this to get the three js canvas elements to also access the redux state
import { Provider } from 'react-redux'
import { store } from "../../../state/store"
import Flags from "../Overlay/Flags";
import StaticMap from "../World/StaticMap";
import Areas from "../Overlay/Areas";

export function SceneContainerBasic(props: any) {
    return (
        <Provider store={store}>

            <PerspectiveCamera makeDefault fov={45} position={[0, 200, 85]} {...props} />

            <MapControls enableRotate={navigator.userAgent.search("Firefox") === 67 ? true : true} maxDistance={600} dampingFactor={0.1} enableDamping={true} {...props} />
            <ambientLight />

            <group position={[-400, 0, -100]}>
                <Flags />
                <Highlight />
                {/* <Areas textColor={"black"} /> */}
            </group>

            <StaticMap />

        </Provider>
    );
}
