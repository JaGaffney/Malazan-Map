import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./components/three/SceneContainer";
import { BakeShadows, Loader } from "@react-three/drei";

import Panel from "./components/panel/Panel";
import Timeline from "./components/timeline/Timeline"
import { useSelector } from "react-redux";

function App() {
    const loaded = useSelector((state) => state.activeCord.loaded)
    return (
        <>
            {!loaded && (
                <div className="tempLoading">
                    <h1>Malazan, book of the fallen interactive 3D world map</h1>
                    <h3>Loading...</h3>
                    <h5>This can take around 10 seconds</h5>
                </div>
            )}
            <Canvas shadows>
                <Suspense fallback={null} >
                    <SceneContainer />

                </Suspense>
                <BakeShadows />
            </Canvas>
            {/* <Loader /> */}
            <Panel />
            <Timeline />
        </>
    );
}

export default App;
