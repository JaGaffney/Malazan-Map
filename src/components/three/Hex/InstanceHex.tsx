import React, { useEffect, useRef } from "react"
import { Matrix4, Object3D } from "three";

import WORLDDATA from "../../../data/sorted copy.json"
import { tileToPosition } from "../../utils/helpers";
import { useSelector } from "react-redux";


export default function InstanceHex(props) {
    const shadowData = useSelector((state: any) => state.settings.shadows)

    const temp = new Object3D()
    const world = WORLDDATA

    const instancedMeshRef = useRef<any>();

    useEffect(() => {
        for (let i = 0; i < Object.keys(world).length - 1; i++) {
            Object.keys(world[props.meshType]).map((ii, kk) => {
                for (let iii = 0; iii < world[props.meshType][ii].length - 1; iii++) {
                    const newPos = tileToPosition(world[props.meshType][ii][iii].x, world[props.meshType][ii][iii].y)
                    temp.position.set(newPos[0], 1, newPos[1])
                    temp.updateMatrix()
                    instancedMeshRef.current.setMatrixAt(iii, temp.matrix)
                }
            })
        }

        // Update the instance
        instancedMeshRef.current.instanceMatrix.needsUpdate = false
    }, [])

    return (
        <>
            <instancedMesh receiveShadow={shadowData} castShadow={shadowData} ref={instancedMeshRef} args={[null, null, 14000]} material={props.meshMaterial} geometry={props.meshGeometry}>
            </instancedMesh>
        </>
    )
}