import React from "react";

import { Canvas } from "@react-three/fiber";

import { SceneContainer } from "./components/three/SceneContainer";
import Panel from "./components/panel/Panel";
import { BakeShadows } from "@react-three/drei";

function App() {
    return (
        <>

            <Canvas shadows>
                <SceneContainer />
                <BakeShadows />
            </Canvas>
            <Panel />
        </>
    );
}

export default App;
