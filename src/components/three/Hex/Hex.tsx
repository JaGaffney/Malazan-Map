import React from "react";
import { useEnvironment, useTexture } from "@react-three/drei";
import { CylinderBufferGeometry, MeshStandardMaterial } from "three";

import d from "../../../data/sorted.json"

import HexGeometryContainer from "./HexGeometryContainer"

export default function Hex() {
    const world = d

    const hexTextures = useTexture({
        dirt: process.env.PUBLIC_URL + "/textures/dirt.png",
        grass: process.env.PUBLIC_URL + "/textures/grass.jpg",
        sand: process.env.PUBLIC_URL + "/textures/sand.jpg",
        sand2: process.env.PUBLIC_URL + "/textures/sand2.jpg",
        stone: process.env.PUBLIC_URL + "/textures/rocks.jpg",
        forest: process.env.PUBLIC_URL + "/textures/forest.jpg",
        town: process.env.PUBLIC_URL + "/textures/town.jpg",
        city: process.env.PUBLIC_URL + "/textures/city.jpg",
        cap: process.env.PUBLIC_URL + "/textures/cap.jpg",
        ice: process.env.PUBLIC_URL + "/textures/snow.jpg",
        sandBump: process.env.PUBLIC_URL + "/textures/bumps/sandmap.jpg",
        stoneBump: process.env.PUBLIC_URL + "/textures/bumps/rocks.jpg",
        grassBump: process.env.PUBLIC_URL + "/textures/bumps/grass.jpg",
    })

    const envMaps = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const mesh = {
        dirt: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.dirt }),
        grass: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.grass, bumpMap: hexTextures.grassBump, bumpScale: 0.01 }),
        sand: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.sand, bumpMap: hexTextures.sandBump, bumpScale: 0.03 }),
        sand2: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.sand2, bumpMap: hexTextures.sandBump, bumpScale: 0.03 }),
        stone: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.stone, bumpMap: hexTextures.stoneBump, bumpScale: 0.08 }),
        forest: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.forest }),
        town: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.town }),
        city: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.city }),
        cap: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.cap }),
        ice: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.ice }),
    };

    const hexGeos = {
        hexGeo1: new CylinderBufferGeometry(1, 1, 1, 6, 1, false),
        hexGeo11: new CylinderBufferGeometry(1, 1, 1.1, 6, 1, false),
        hexGeo12: new CylinderBufferGeometry(1, 1, 1.2, 6, 1, false),
        hexGeo2: new CylinderBufferGeometry(1, 1, 2, 6, 1, false),
        hexGeo3: new CylinderBufferGeometry(1, 1, 3, 6, 1, false),
        hexGeo4: new CylinderBufferGeometry(1, 1, 4, 6, 1, false),
    }



    // is this more memory efficent?
    const calculateMesh = {
        1: mesh.ice,
        2: mesh.sand,
        3: mesh.sand2,
        4: mesh.stone,
        5: mesh.grass,
        6: mesh.forest,
        7: mesh.stone,
        8: mesh.town,
        9: mesh.city,
        10: mesh.cap,
    }

    const calculateGeometry = {
        1: hexGeos.hexGeo1,
        11: hexGeos.hexGeo11,
        12: hexGeos.hexGeo12,
        2: hexGeos.hexGeo2,
        3: hexGeos.hexGeo3,
        4: hexGeos.hexGeo4,
    }

    return (
        <>
            {Object.keys(world).map((i, k) => {
                const adjust = parseInt(i)
                const height = Object.keys(world[i])
                if (height.length > 1) {
                    return (
                        height.map((ii, kk) => {
                            return (
                                <HexGeometryContainer
                                    data={world[adjust][ii]}
                                    material={calculateMesh[adjust]}
                                    geometry={calculateGeometry[ii]}
                                    key={kk}
                                />
                            )
                        }))
                } else {
                    return (
                        <HexGeometryContainer
                            data={world[adjust][height[0]]}
                            material={calculateMesh[adjust]}
                            geometry={calculateGeometry[height[0]]}
                            key={k}
                        />
                    )
                }


            })}



        </>

    );
}
