import { useSelector } from "react-redux"

import { FakeGlowMaterial } from "./FakeGlowMaterial";
// https://github.com/ektogamat/fake-glow-material-r3f?tab=readme-ov-file


export default function Highlight() {
    const activeCord = useSelector((state: any) => state.filter.activeCord)
    const activeID = useSelector((state: any) => state.filter.activeData.id)

    return (
        activeID !== "" && activeCord.x !== 0 ? (
            <group>
                <mesh position={[activeCord.x, 151.5, activeCord.y]}>
                    <cylinderBufferGeometry args={[1.5, 1.5, 300, 6]} />
                    <FakeGlowMaterial
                        falloff={0.5}
                        glowInternalRadius={0.9}
                        glowColor={"#ffffff"}
                        glowSharpness={0.1}

                    />
                </mesh>

                <mesh position={[activeCord.x, 2, activeCord.y]}>
                    <cylinderBufferGeometry args={[1, 1, 1, 6]} />
                    <meshBasicMaterial
                        attach="material"
                        color="#FFF294"
                    />
                </mesh>

            </group>
        ) : null
    );
}
