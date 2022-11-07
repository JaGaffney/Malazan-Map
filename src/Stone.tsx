import React from "react";

export default function Stone() {
    return (
        <mesh>
            <sphereGeometry args={[Math.random() * 0.3 + 0.1, 7, 7]} />
            <meshBasicMaterial />
        </mesh>
    );
}
