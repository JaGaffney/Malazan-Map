import React, { useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./components/three/Scene/SceneContainer";
import { SceneContainerBasic } from "./components/three/Scene/SceneContainerBasic";
import { BakeShadows, Stats } from "@react-three/drei";

import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

import CustomLoader from "./components/three/CustomLoader/CustomLoader"

import { useDispatch } from "react-redux";
import { setNone } from "./state/features/settings"

import { SceneContainerStandard } from "./components/three/Scene/SceneContainerStandard";

function App() {
    const [landing, setLanding] = useState<boolean>(true)
    const [mode, setMode] = useState<number>(0)

    const dispatch = useDispatch()

    const onModeHandler = (data: number): void => {
        if (data === 2) {
            dispatch(setNone())
        }
        setLanding(false)
        setMode(data)
    }

    return (
        <>
            {!landing ? (
                <>
                    {mode === 0 && (
                        <Canvas shadows >
                            <Suspense fallback={<CustomLoader />} >
                                <SceneContainer />
                            </Suspense>

                            {/* <BakeShadows /> */}
                            {/* <Stats /> */}
                        </Canvas>
                    )}
                    {mode === 1 && (
                        <Canvas frameloop={"demand"} >
                            <Suspense fallback={null} >
                                <SceneContainerStandard />
                            </Suspense>
                        </Canvas>
                    )}

                    {mode === 2 && (
                        <Canvas frameloop={"demand"} >
                            <Suspense fallback={null} >
                                <SceneContainerBasic />
                            </Suspense>


                        </Canvas>
                    )}

                    <Header />
                </>
            ) : <Landing onModeHandler={onModeHandler} />}
        </>
    );
}

export default App;