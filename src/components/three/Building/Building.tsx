import React from 'react'
import { useSelector } from 'react-redux'
import { useEnvironment, useTexture } from "@react-three/drei";
import { BoxGeometry, CylinderBufferGeometry, CylinderGeometry, MeshStandardMaterial, DoubleSide } from "three";

import worldData from "../../../data/sorted.json"
import { tileToPosition } from '../../utils/helpers';
import Capital from './Capital';


const Building = () => {
    const areaData = useSelector((state: any) => state.settings.areas)

    const world = worldData

    const wallTextures = useTexture({
        // map: process.env.PUBLIC_URL + "/textures/brick/diff.jpg",
        map: process.env.PUBLIC_URL + "/textures/grid-texture.png",
        normalMap: process.env.PUBLIC_URL + "/textures/brick/normal.jpg",
    })

    const envMaps = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const mat = new MeshStandardMaterial({
        envMap: envMaps,
        envMapIntensity: 0.25,
        flatShading: true,
        map: wallTextures.map,
        normalMap: wallTextures.normalMap,
        side: DoubleSide,
    })
    const geoCapWall = new BoxGeometry(1, 0.7, 0.2)
    const geoTower = new CylinderBufferGeometry(0.2, 0.2, 1.2, 6, 1, false)

    const geoCityBuilding1 = new BoxGeometry(0.3, 0.8, 0.3)
    const geoCityBuilding2 = new BoxGeometry(0.2, 0.6, 0.4)
    const geoCityWall = new CylinderGeometry(0.8, 0.8, 0.4, 5, 5, 1, true)


    return (
        <>
            {world["10"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        <Capital pos={pos} mat={mat} geo={geoCapWall} geoTower={geoTower} k={k} />

                    )
                } else {
                    return null
                }
            })}
            {world["9"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        // <Capital pos={pos} mat={mat} geo={geoCapWall} geoTower={geoTower} k={k} />
                        <group position={[pos[0] - 0.05, 2, pos[1]]}>
                            <mesh material={mat} geometry={geoCityWall} position={[0, 0, 0]} castShadow recieveShadow ></mesh>
                            <mesh material={mat} geometry={geoCityBuilding1} position={[0.2, 0, 0.3]} castShadow recieveShadow ></mesh>
                            <mesh material={mat} geometry={geoCityBuilding2} position={[-0.3, 0, 0]} castShadow recieveShadow rotation-y={Math.PI * 0.7}></mesh>
                            <mesh material={mat} geometry={geoCityBuilding2} position={[0.3, 0, -0.2]} castShadow recieveShadow ></mesh>
                        </group>
                    )
                } else {
                    return null
                }
            })}
        </>
    )
}

export default Building