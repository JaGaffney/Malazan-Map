import { useEnvironment, useTexture } from "@react-three/drei";
import { CylinderGeometry, MeshStandardMaterial } from "three";
import { useSelector } from "react-redux";

import WORLDDATA from "../../../data/worldData.json"
import HexGeometryContainer from "./HexGeometryContainer"
import { IWorld } from "./hex.interface";

export default function Hex() {
    const flatternData = useSelector((state: any) => state.settings.flattern)
    const desertsData = useSelector((state: any) => state.settings.deserts)
    const forestData = useSelector((state: any) => state.settings.forest)

    const world: IWorld = WORLDDATA

    const hexTextures = useTexture({
        dirt: "/textures/hex/dirt.jpg",
        grass: "/textures/hex/grass.jpg",
        sand: "/textures/hex/sand.jpg",
        sand2: "/textures/hex/sand2.jpg",
        stone: "/textures/hex/moutain.png",
        stone2: "/textures/hex/moutain2.png",
        forest: "/textures/hex/forest.jpg",
        town: "/textures/hex/town.jpg",
        city: "/textures/hex/city.jpg",
        cap: "/textures/hex/cap.jpg",
        ice: "/textures/hex/snow.jpg"
    })

    const envMaps = useEnvironment({ files: "/textures/envmap5.hdr" });

    const mesh = {
        dirt: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.dirt }),
        grass: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.grass }),
        sand: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.sand }),
        sand2: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.sand2 }),
        stone: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.stone, }),
        stone2: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.stone2, }),
        forest: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.forest }),
        town: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.town }),
        city: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.city }),
        cap: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.cap }),
        ice: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.ice }),
    };

    const hexGeos = {
        hexGeo1: new CylinderGeometry(1, 1, 1, 6, 1, false),
        hexGeo11: new CylinderGeometry(1, 1, 0.8, 6, 1, false),
        hexGeo12: new CylinderGeometry(1, 1, 1.6, 6, 1, false),
        hexGeo2: new CylinderGeometry(1, 1, 2, 6, 1, false),
        hexGeo3: new CylinderGeometry(1, 1, 3.5, 6, 1, false),
        hexGeo4: new CylinderGeometry(1, 1, 4, 6, 1, false),
    }

    const calculateGeometry = (height: string) => {
        if (flatternData) {
            return hexGeos.hexGeo1
        }
        switch (parseInt(height)) {
            case (1):
                return hexGeos.hexGeo1;
            case (11):
                return hexGeos.hexGeo11;
            case (12):
                return hexGeos.hexGeo12;
            case (2):
                if (!desertsData || !forestData) {
                    return hexGeos.hexGeo1
                }
                return hexGeos.hexGeo2;
            case (3):
                return hexGeos.hexGeo3;
            case (4):
                return hexGeos.hexGeo4;
            default:
                return hexGeos.hexGeo1
        }
    }

    const calculateMesh = (terrain: number) => {
        switch (terrain) {
            case (1):
                return mesh.ice;
            case (2):
                if (!desertsData) {
                    return mesh.grass
                }
                return mesh.sand;
            case (3):
                if (!desertsData) {
                    return mesh.grass
                }
                return mesh.sand2;
            case (4):
                return mesh.stone2;
            case (5):
                return mesh.grass;
            case (6):
                if (!forestData) {
                    return mesh.grass
                }
                return mesh.forest;
            case (7):
                return mesh.stone;
            case (8):
                return mesh.town;
            case (9):
                return mesh.city;
            case (10):
                return mesh.cap;
            default:
                return mesh.ice
        }
    }

    return (
        <>
            {Object.keys(world).map((i, k: number) => {
                const adjust: number = parseInt(i)
                const height: any = Object.keys(world[i])
                if (height.length > 1) {
                    return (
                        height.map((ii: any, kk: number) => {
                            return (
                                <HexGeometryContainer
                                    data={world[adjust][ii]}
                                    material={calculateMesh(adjust)}
                                    geometry={calculateGeometry(ii)}
                                    key={kk}
                                />
                            )
                        }))
                } else {
                    return (
                        <HexGeometryContainer
                            data={world[adjust][height[0]]}
                            material={calculateMesh(adjust)}
                            geometry={calculateGeometry(height[0])}
                            key={k}
                        />
                    )
                }
            })}
        </>
    );
}
