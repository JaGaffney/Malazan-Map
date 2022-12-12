import React from 'react'
import { useSelector } from 'react-redux'

import { useEnvironment, useTexture } from "@react-three/drei";
import { ConeGeometry, MeshStandardMaterial } from "three";

import worldData from "../../../data/sorted.json"

const Building = () => {
    const areaData = useSelector((state: any) => state.settings.areas)

    const tileToPosition = (tileX: number, tileY: number): Array<number> => {
        return [(tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535]
    };

    const world = worldData["10"]["2"]

    const hexTextures = useTexture({
        cap: process.env.PUBLIC_URL + "/textures/cap.jpg",
    })

    const envMaps = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });


    const mat = new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.cap })
    const geo = new ConeGeometry(1.05, 3, 6)

    return (
        world.map((i, k: number) => {
            if (areaData.includes(i.a)) {
                const pos = tileToPosition(i.x, i.y)
                return (
                    <mesh material={mat} geometry={geo} position={[pos[0], 3.3, pos[1]]} castShadow recieveShadow></mesh>
                )
            } else {
                return null
            }
        })
    )
}

export default Building