import React from 'react'
import { useSelector } from 'react-redux'
import { useEnvironment, useTexture } from "@react-three/drei";
import { BoxGeometry, MeshStandardMaterial } from "three";

import worldData from "../../../data/sorted.json"
import { tileToPosition } from '../../utils/helpers';

const Building = () => {
    const areaData = useSelector((state: any) => state.settings.areas)

    const world = worldData

    const wallTextures = useTexture({
        map: process.env.PUBLIC_URL + "/textures/brick/diff.jpg",
        normalMap: process.env.PUBLIC_URL + "/textures/brick/normal.jpg",
    })

    const envMaps = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const mat = new MeshStandardMaterial({
        envMap: envMaps,
        envMapIntensity: 0.25,
        flatShading: true,
        map: wallTextures.map,
        normalMap: wallTextures.normalMap,
    })
    const geo = new BoxGeometry(1.2, 3, 1.3)

    return (
        <>
            {world["10"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        <mesh material={mat} geometry={geo} position={[pos[0], 3, pos[1]]} castShadow recieveShadow key={k}></mesh>
                    )
                } else {
                    return null
                }
            })}
        </>
    )
}

export default Building