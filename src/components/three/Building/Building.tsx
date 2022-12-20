import React from 'react'
import { useSelector } from 'react-redux'
import { useEnvironment, useTexture } from "@react-three/drei";
import { BoxGeometry, CylinderBufferGeometry, MeshStandardMaterial } from "three";

import worldData from "../../../data/sorted.json"
import { tileToPosition } from '../../utils/helpers';
import City from './City';


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
    const geo = new BoxGeometry(1, 0.7, 0.2)
    const geoTower = new CylinderBufferGeometry(0.2, 0.2, 1.2, 6, 1, false)

    return (
        <>
            {world["10"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        <City pos={pos} mat={mat} geo={geo} geoTower={geoTower} k={k} />
                    )
                } else {
                    return null
                }
            })}
        </>
    )
}

export default Building