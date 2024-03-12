import React, { useRef } from "react"
import { useSelector } from "react-redux";

import { CylinderBufferGeometry, MeshStandardMaterial } from "three";
import { useEnvironment, useTexture } from "@react-three/drei";

import WORLDDATA from "../../../data/sorted copy.json"

import InstanceTestInner from "./InstanceTestInner";

export default function InstancesTest() {
  const flatternData = useSelector((state: any) => state.settings.flattern)
  const desertsData = useSelector((state: any) => state.settings.deserts)
  const forestData = useSelector((state: any) => state.settings.forest)

  const world = WORLDDATA

  const instancedMeshRef1 = useRef()
  const instancedMeshRef2 = useRef()
  const instancedMeshRef3 = useRef()
  const instancedMeshRef4 = useRef()
  const instancedMeshRef5 = useRef()
  const instancedMeshRef51 = useRef()
  const instancedMeshRef52 = useRef()
  const instancedMeshRef6 = useRef()
  const instancedMeshRef7 = useRef()
  const instancedMeshRef8 = useRef()
  const instancedMeshRef9 = useRef()
  const instancedMeshRef10 = useRef()


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
        switch (adjust) {
          case (1):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef1} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(2)} />
            )
          case (2):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef2} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(11)} />
            )
          case (3):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef3} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(2)} />
            )
          case (4):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef4} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(3)} />
            )
          case (5):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef5} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(1)} />
            )
          case (51):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef51} meshType={adjust} meshMaterial={calculateMesh(5)} meshGeometry={calculateGeometry(11)} />
            )
          case (52):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef52} meshType={adjust} meshMaterial={calculateMesh(5)} meshGeometry={calculateGeometry(12)} />
            )
          case (6):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef6} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(2)} />
            )
          case (7):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef7} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(4)} />
            )
          case (8):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef8} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(2)} />
            )
          case (9):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef9} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(2)} />
            )
          case (10):
            return (
              <InstanceTestInner instancedMeshRef={instancedMeshRef10} meshType={adjust} meshMaterial={calculateMesh(adjust)} meshGeometry={calculateGeometry(2)} />
            )
          default:
            return (

              null
            )


        }






      })}
    </>
  )
}