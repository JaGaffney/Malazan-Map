import { Box, Cylinder, Merged } from "@react-three/drei";
import React from "react";
import { BoxGeometry, MeshNormalMaterial, Mesh } from "three";


import Hex from "./Hex"

export default function Land() {
    return (
        <Merged meshes={[Box, Cylinder]}>
            {(Box, Hex) => (
                <>
                    <Box position={[0, 0, 0]} />
                    <Hex />
                </>
            )}
        </Merged>

    );
}
