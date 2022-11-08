import { Merged, useEnvironment } from "@react-three/drei";
import React from "react";
import { CylinderBufferGeometry, BoxGeometry, MeshNormalMaterial, Mesh, Vector2, TextureLoader, RepeatWrapping, Color } from "three";
import { createNoise2D } from "simplex-noise";

import world from "./world";
//import world from "./sample.json"


export default function Hex() {
    const textures = {
        dirt: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/dirt.jpg"),
        dirt2: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/dirt2.jpg"),
        grass: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/grass.jpg"),
        sand: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/sand.jpg"),
        stone: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/stone.png"),
        forest: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/forest.jpg"),
        town: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/town.jpg"),
        city: new TextureLoader().load(process.env.PUBLIC_URL + "/textures/city.jpg"),
    };

    const hexGeos = {
        hexGeo1: new CylinderBufferGeometry(1, 1, 1, 6, 1, false),
        hexGeo2: new CylinderBufferGeometry(1, 1, 2, 6, 1, false),
        hexGeo3: new CylinderBufferGeometry(1, 1, 3, 6, 1, false),
        hexGeo4: new CylinderBufferGeometry(1, 1, 4, 6, 1, false),
        hexGeo5: new CylinderBufferGeometry(1, 1, 5, 6, 1, false)
    }

    const envMap = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

    const textureCalc = (terrain) => {
        switch (terrain) {
            case 9:
                return textures.city;
            case 8:
                return textures.town;
            case 7:
                return textures.stone;
            case 6:
                return textures.forest;
            case 5:
                return textures.grass;
            case 4:
                return textures.dirt;
            case 3:
                return textures.dirt2;
            case 2:
                return textures.sand;
            default:
                return null;
        }
    };

    const tileToPosition = (tileX: number, tileY: number): Vector2 => {
        return new Vector2((tileX + (tileY % 2) * 0.5) * 1.77, tileY * 1.535)
    };



    const hexGeometry = (height: number, position: Vector2, terrain: number, geo): any => {
        return (
            <mesh position={[position.x, height * 0.5, position.y]} geometry={geo} castShadow receiveShadow>
                <meshPhysicalMaterial envMap={envMap} flatShading={true} map={textureCalc(terrain)} envMapIntensity={0.75} />
            </mesh>
        );
    };


    const calculateGeometry = (height: number, position: Vector2, terrain: number) => {
        switch (height) {
            case 5:
                return hexGeometry(height, position, terrain, hexGeos.hexGeo5)
            case 4:
                return hexGeometry(height, position, terrain, hexGeos.hexGeo4)
            case 3:
                return hexGeometry(height, position, terrain, hexGeos.hexGeo3)
            case 2:
                return hexGeometry(height, position, terrain, hexGeos.hexGeo2)
            case 1:
                return hexGeometry(height, position, terrain, hexGeos.hexGeo1)
            default:
                return null;
        }
    }


    const makeHex = () => {
        const tiles = [];
        for (let i = 0; i < world.length; i++) {
            const data = world[i];
            if (data.z >= 1) {
                let position = tileToPosition(data.y, data.x)
                tiles.push(calculateGeometry(data.z, position, data.t))
            }
        }
        return tiles;
    };

    return (
        <Merged meshes={[new Mesh(new BoxGeometry(0, 0, 0), new MeshNormalMaterial())]}>
            {(Box) => (
                <>
                    <Box position={[0, 0, 0]} />
                    {makeHex()}
                </>
            )}
        </Merged>
    );
}
