import { BoxGeometry, CylinderGeometry, MeshStandardMaterial } from 'three';
interface ICity {
    pos: Array<number>;
    matBrick: MeshStandardMaterial;
    geoCityWall: CylinderGeometry;
    geoCityGround: CylinderGeometry;
    geoCityBuilding1: BoxGeometry;
    geoCityBuilding2: BoxGeometry;
}
const City = (props: ICity): any => {
    return (
        <group position={[props.pos[0] - 0.05, 2, props.pos[1]]}>
            <mesh material={props.matBrick} geometry={props.geoCityWall} position={[0, 0, 0]} castShadow ></mesh>
            <mesh material={props.matBrick} geometry={props.geoCityGround} position={[0, -0.01, 0]}></mesh>
            <mesh material={props.matBrick} geometry={props.geoCityBuilding1} position={[0.2, 0, 0.3]}  ></mesh>
            <mesh material={props.matBrick} geometry={props.geoCityBuilding2} position={[-0.3, 0, 0]} rotation-y={Math.PI * 0.7}></mesh>
            <mesh material={props.matBrick} geometry={props.geoCityBuilding2} position={[0.3, 0, -0.2]}  ></mesh>
        </group>
    )
}

export default City