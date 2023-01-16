import React, { useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./components/three/SceneContainer";
import { SceneContainerBasic } from "./components/three/SceneContainerBasic";
import { BakeShadows, Stats } from "@react-three/drei";

import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

import CustomLoader from "./components/three/CustomLoader/CustomLoader"

import { useDispatch } from "react-redux";
import { setBasic, resetActiveAreas } from "./state/features/settings"
import { updateActiveCity } from "./state/features/engine";


function App() {
    const [landing, setLanding] = useState<boolean>(true)
    const [mode, setMode] = useState<number>(0)

    const dispatch = useDispatch()


    const onModeHandler = (data) => {
        if (data === 1) {
            dispatch(setBasic())
            dispatch(updateActiveCity(0))
            dispatch(updateActiveCity(2))
            dispatch(updateActiveCity(3))
        }
        if (data === 2) {
            dispatch(resetActiveAreas())
        }
        setLanding(false)
        setMode(data)
    }

    return (
        <>
            {!landing ? (
                <>
                    {mode === 0 && (
                        <Canvas shadows frameloop={"demand"} >
                            <Suspense fallback={<CustomLoader />} >
                                <SceneContainer />
                            </Suspense>

                            <BakeShadows />
                            {/* <Stats /> */}
                        </Canvas>
                    )}
                    {mode === 1 && (
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
