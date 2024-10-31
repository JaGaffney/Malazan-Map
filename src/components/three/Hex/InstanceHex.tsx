import { useEffect, useRef } from "react"
import { Object3D } from "three";

import { tileToPosition } from "../../utils/helpers";
import { useSelector } from "react-redux";

interface IInstanceHex {
    meshType: number;
    meshMaterial: any;
    meshGeometry: any;
    world: any;
}
export default function InstanceHex(props: IInstanceHex) {
    const shadowData = useSelector((state: any) => state.settings.shadows)

    const temp = new Object3D()
    const instancedMeshRef = useRef<any>();

    useEffect(() => {
        for (let i = 0; i < Object.keys(props.world).length - 1; i++) {
            Object.keys(props.world[props.meshType]).map((ii) => {
                for (let iii = 0; iii < props.world[props.meshType][ii].length - 1; iii++) {
                    const newPos = tileToPosition(props.world[props.meshType][ii][iii].x, props.world[props.meshType][ii][iii].y)
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
            <instancedMesh receiveShadow={shadowData} castShadow={shadowData} ref={instancedMeshRef} args={[undefined, undefined, 14000]} material={props.meshMaterial} geometry={props.meshGeometry}>
            </instancedMesh>
        </>
    )
}