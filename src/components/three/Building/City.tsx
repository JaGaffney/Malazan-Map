import React from 'react'

const City = (props): any => {
    return (
        <group position={[props.pos[0] - 0.05, 2, props.pos[1]]} key={props.k}>
            <mesh material={props.matPlank} geometry={props.geoCityWall} position={[0, 0, 0]} castShadow recieveShadow ></mesh>
            <mesh material={props.matMud} geometry={props.geoCityGround} position={[0, -0.01, 0]}></mesh>
            <mesh material={props.matStone} geometry={props.geoCityBuilding1} position={[0.2, 0, 0.3]}  ></mesh>
            <mesh material={props.matStone} geometry={props.geoCityBuilding2} position={[-0.3, 0, 0]} rotation-y={Math.PI * 0.7}></mesh>
            <mesh material={props.matPlank} geometry={props.geoCityBuilding2} position={[0.3, 0, -0.2]}  ></mesh>
        </group>
    )
}

export default City