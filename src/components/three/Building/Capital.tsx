import React from 'react'

const Capital = (props) => {
    return (
        <group position={[props.pos[0] - 0.05, 2, props.pos[1]]} key={props.k}>
            <mesh position={[0, 0.01, 0]} rotation-x={-Math.PI * 0.5} material={props.matStone}>
                <planeGeometry args={[1, 1]} />
            </mesh>

            <group rotation-y={-Math.PI * 0.5}>
                <mesh material={props.matBrick} position={[0, 0, 0.4]} castShadow geometry={props.geo}></mesh>
            </group>

            <group rotation-y={-Math.PI / 0.5}>
                <mesh material={props.matBrick} position={[0, 0, 0.4]} geometry={props.geo}></mesh>
            </group>

            <group rotation-y={Math.PI * 0.5}>
                <mesh material={props.matBrick} position={[0, 0, 0.5]} geometry={props.geo}></mesh>
            </group>

            <group>
                <mesh material={props.matBrick} position={[0, 0, -0.4]} geometry={props.geo} ></mesh>
                <mesh material={props.matStone} position={[0.5, 0, 0.4]} geometry={props.geoTower}></mesh>
                <mesh material={props.matStone} position={[-0.4, 0, 0.4]} geometry={props.geoTower} ></mesh>
                <mesh material={props.matStone} position={[0.5, 0, -0.4]} geometry={props.geoTower} ></mesh>
                <mesh material={props.matStone} position={[-0.4, 0, -0.4]} geometry={props.geoTower} ></mesh>

                <mesh material={props.matBrick} position={[0.05, 0, -0.6]} geometry={props.geoTower}></mesh>
                <mesh material={props.matBrick} position={[0.051, 0.3, -0.59]} geometry={props.geoTower}></mesh>
                <mesh material={props.matPlank} position={[0.05, 1.1, -0.6]} geometry={props.geoTowerRoof}></mesh>
            </group>
        </group>
    )
}

export default Capital
