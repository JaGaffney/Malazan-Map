import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./components/three/SceneContainer";
import { BakeShadows, Html, useProgress } from "@react-three/drei";

import Panel from "./components/panel/Panel";
import Timeline from "./components/timeline/Timeline"

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()

    const quotes = [
        `"The stains of rust seemed to map blood seas on the black, pocked
        surface of Mock's Vane. A century old, it squatted on the point of an
        old pike that had been bolted to the outer top of the Hold's wall.
        Monstrous and misshapen, it had been cold-hammered into the form of
        a winged demon, teeth bared in a leering grin, and was tugged and
        buffeted in squealing protest with every gust of wind"`
    ]

    console.log("Loading: ", { active, progress, errors, item, loaded, total })

    return active ? (
        <Html fullscreen>
            <div className="tempLoading">
                <div className="tempLoading-title">
                    <h1>Malazan, Book of the fallen</h1>
                    <h2>Interactive 3D world map</h2>
                </div>
                <div className="tempLoading-quote">
                    <p>{quotes[0]}</p>
                    <span><i>Gardens of the moon - Epilogoue</i></span>
                </div>

                <div className="tempLoading-loading">
                    <strong>{Math.round(progress)} %</strong>
                    <h5>This can take around 10 seconds (works better on Firefox)</h5>
                </div>
            </div>
        </Html>
    ) : null
}

function App() {
    return (
        <>
            <Canvas shadows>
                <Suspense fallback={<Loader />} >
                    <SceneContainer />
                </Suspense>
                <BakeShadows />

            </Canvas>

            <Panel />
            <Timeline />
        </>
    );
}

export default App;
