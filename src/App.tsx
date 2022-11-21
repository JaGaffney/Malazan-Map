import React from "react";

import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./components/three/SceneContainer";
import { BakeShadows, Loader } from "@react-three/drei";

import Panel from "./components/panel/Panel";
import Timeline from "./components/timeline/Timeline"

function App() {
    return (
        <>
            <Canvas shadows>
                <SceneContainer />
                <BakeShadows />
            </Canvas>
            <Panel />
            <Timeline />
        </>
    );
}

export default App;
