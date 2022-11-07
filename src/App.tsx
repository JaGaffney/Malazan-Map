import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./SceneContainer";
import React from "react";

function App() {
    return (
        <>
            <Canvas shadows>
                <SceneContainer />
            </Canvas>
        </>
    );
}

export default App;
