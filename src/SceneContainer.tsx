import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";

import React from "react";
import Hex from "./Hex";
import { Color } from "three";
import Sea from "./Sea";
import Border from "./Border";
import Floor from "./Floor";

let lightColor = new Color("#FFCB8E").convertSRGBToLinear().convertSRGBToLinear();

export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
            <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />

            <PerspectiveCamera makeDefault fov={45} position={[0, 45, 0]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
            <pointLight position={[10, 20, 10]} castShadow color={lightColor} intensity={2} shadowMapHeight={512} shadowMapWidth={512} shadowCameraNear={0.5} shadowCameraFar={500} />

            {/* <Sea /> */}
            <Hex />
            {/* <Border />
            <Floor /> */}
        </Suspense>
    );
}
