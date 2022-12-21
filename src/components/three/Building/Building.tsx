import React from 'react'
import { useSelector } from 'react-redux'
import { useEnvironment, useTexture } from "@react-three/drei";
import { BoxGeometry, CylinderBufferGeometry, CylinderGeometry, MeshStandardMaterial, DoubleSide } from "three";

import worldData from "../../../data/sorted.json"
import { tileToPosition } from '../../utils/helpers';
import Capital from './Capital';
import City from './City';


const Building = () => {
    const areaData = useSelector((state: any) => state.settings.areas)

    const world = worldData

    const wallTextures = useTexture({
        brickMap: process.env.PUBLIC_URL + "/textures/brick/diff.jpg",
        brickNormalMap: process.env.PUBLIC_URL + "/textures/brick/normal.jpg",
        stoneMap: process.env.PUBLIC_URL + "/textures/stone/diff.jpg",
        stoneNormalMap: process.env.PUBLIC_URL + "/textures/stone/normal.jpg",
        plankMap: process.env.PUBLIC_URL + "/textures/plank/diff.jpg",
        plankNormalMap: process.env.PUBLIC_URL + "/textures/plank/normal.jpg",
        mudMap: process.env.PUBLIC_URL + "/textures/mud/diff.jpg",
        mudNormalMap: process.env.PUBLIC_URL + "/textures/mud/normal.jpg",
    })

    const envMaps = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const matBrick = new MeshStandardMaterial({
        envMap: envMaps,
        envMapIntensity: 0.25,
        flatShading: true,
        map: wallTextures.brickMap,
        normalMap: wallTextures.brickNormalMap,
    })
    const matStone = new MeshStandardMaterial({
        envMap: envMaps,
        envMapIntensity: 0.25,
        flatShading: true,
        map: wallTextures.stoneMap,
        normalMap: wallTextures.stoneNormalMap,
        side: DoubleSide,
    })
    const matPlank = new MeshStandardMaterial({
        envMap: envMaps,
        envMapIntensity: 0.55,
        flatShading: true,
        map: wallTextures.plankMap,
        normalMap: wallTextures.plankNormalMap,
        side: DoubleSide,
    })
    const matMud = new MeshStandardMaterial({
        envMap: envMaps,
        envMapIntensity: 0.75,
        flatShading: false,
        map: wallTextures.mudMap,
        normalMap: wallTextures.mudNormalMap,
    })



    const geoCapWall = new BoxGeometry(1, 0.7, 0.2)
    const geoTower = new CylinderBufferGeometry(0.2, 0.2, 1.2, 6, 1, false)
    const geoTowerRoof = new CylinderBufferGeometry(0, 0.25, 0.5, 6, 1, false)

    const geoCityBuilding1 = new BoxGeometry(0.3, 0.8, 0.3)
    const geoCityBuilding2 = new BoxGeometry(0.2, 0.6, 0.4)
    const geoCityWall = new CylinderGeometry(0.8, 0.8, 0.4, 8, 1, 0)
    const geoCityGround = new CylinderGeometry(0.79, 0.79, 0.1, 8, 1, false)

    const geoTownWall = new CylinderGeometry(0.7, 0.7, 0.2, 5, 1, 0)


    return (
        <>
            {world["10"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        <Capital key={k} pos={pos} matBrick={matBrick} matPlank={matPlank} matStone={matStone} geo={geoCapWall} geoTower={geoTower} geoTowerRoof={geoTowerRoof} k={k} />
                    )
                } else {
                    return null
                }
            })}
            {world["9"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        <City key={k} pos={pos} matPlank={matPlank} matStone={matStone} matMud={matMud} geoCityGround={geoCityGround} geoCityWall={geoCityWall} geoCityBuilding1={geoCityBuilding1} geoCityBuilding2={geoCityBuilding2} k={k} />
                    )
                } else {
                    return null
                }
            })}
            {world["8"]["2"].map((i, k: number) => {
                if (areaData.includes(i.a)) {
                    const pos = tileToPosition(i.x, i.y)
                    return (
                        <group position={[pos[0] - 0.05, 2, pos[1]]} key={k}>
                            <mesh position={[0, 0.01, 0]} material={matPlank} geometry={geoTownWall}></mesh>
                            <mesh material={matMud} position={[0, -0.3, 0.3]} geometry={geoTower}></mesh>
                            <mesh material={matPlank} position={[0, 0.5, 0.3]} geometry={geoTowerRoof}></mesh>
                            <mesh material={matMud} position={[-0.2, -0.15, -0.2]} geometry={geoCityBuilding1}></mesh>

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