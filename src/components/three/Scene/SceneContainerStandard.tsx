import { MapControls, PerspectiveCamera } from "@react-three/drei";
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
import Areas from "../Overlay/Areas";

export function SceneContainerStandard(props: any) {
    const lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();

    return (
        <Provider store={store}>

            <PerspectiveCamera makeDefault fov={45} position={[0, 300, 85]} {...props} />
            <MapControls enableRotate={true} maxDistance={600} dampingFactor={0.1} enableDamping={true} {...props} />
            <pointLight position={[160, 200, 93]} castShadow color={lightColor} intensity={1} />


            <group position={[-400, 0, -100]}>
                <InstanceHexContainer />
                <Flags />
                <Highlight />
                {/* <Areas textColor={"white"} /> */}
            </group>

            <Sea />
            <Floor />
            <FloatingGrid />
        </Provider>
    );
}
