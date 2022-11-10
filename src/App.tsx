import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./SceneContainer";
import React from "react";

function App() {
    return (
        <>
            {/* <div className="tester">
            <h1>text</h1>
            <button>test</button>
        </div> */}
            <Canvas shadows>
                <SceneContainer />
            </Canvas>
        </>
    );
}

export default App;
