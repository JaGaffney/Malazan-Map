import React from "react"
import { useSelector } from "react-redux";

import { CylinderBufferGeometry, MeshStandardMaterial } from "three";
import { useEnvironment, useTexture } from "@react-three/drei";

import WORLDDATA from "../../../data/sorted copy.json"

import InstanceHex from "./InstanceHex";

export default function InstanceHexContainer() {
  const flatternData = useSelector((state: any) => state.settings.flattern)
  const desertsData = useSelector((state: any) => state.settings.deserts)
  const forestData = useSelector((state: any) => state.settings.forest)

  const world = WORLDDATA

  const hexTextures = useTexture({
    dirt: process.env.PUBLIC_URL + "/textures/dirt.png",
    grass: process.env.PUBLIC_URL + "/textures/grass.jpg",
    sand: process.env.PUBLIC_URL + "/textures/sand.jpg",
    sand2: process.env.PUBLIC_URL + "/textures/sand2.jpg",
    stone: process.env.PUBLIC_URL + "/textures/moutain.png",
    stone2: process.env.PUBLIC_URL + "/textures/moutain2.png",
    forest: process.env.PUBLIC_URL + "/textures/forest.jpg",
    town: process.env.PUBLIC_URL + "/textures/town.jpg",
    city: process.env.PUBLIC_URL + "/textures/city.jpg",
    cap: process.env.PUBLIC_URL + "/textures/cap.jpg",
    capNormal: process.env.PUBLIC_URL + "/textures/cobble/normal.jpg",
    ice: process.env.PUBLIC_URL + "/textures/snow.jpg",
    sandBump: process.env.PUBLIC_URL + "/textures/bumps/sandmap.jpg",
    stoneBump: process.env.PUBLIC_URL + "/textures/bumps/rocks.jpg",
    grassBump: process.env.PUBLIC_URL + "/textures/bumps/grass.jpg",
  })

  const envMaps = useEnvironment({ files: process.env.PUBLIC_URL + "/textures/envmap2.hdr" });

  const mesh = {
    dirt: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.dirt }),
    grass: new MeshStandardMaterial({ envMap: envMaps, envMapIntensity: 0.25, flatShading: true, map: hexTextures.grass, bumpMap: hexTextures.grassBump, bumpScale: 0.01 }),
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


  const calculateMesh = (terrain) => {
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
      case (51):
      case (52):
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

  const hexGeos = {
    hexGeo1: new CylinderBufferGeometry(1, 1, 1, 6, 1, false),
    hexGeo11: new CylinderBufferGeometry(1, 1, 0.8, 6, 1, false),
    hexGeo12: new CylinderBufferGeometry(1, 1, 1.6, 6, 1, false),
    hexGeo2: new CylinderBufferGeometry(1, 1, 2, 6, 1, false),
    hexGeo3: new CylinderBufferGeometry(1, 1, 3.5, 6, 1, false),
    hexGeo4: new CylinderBufferGeometry(1, 1, 4, 6, 1, false),
  }

  const calculateGeometry = (height) => {
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

  return (
    <>
      {Object.keys(world).map((i, k) => {
        const adjust = parseInt(i)
        const height = Object.keys(world[i])
        return (
          <InstanceHex key={k} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(height)} />
        )
      })}
    </>
  )
}