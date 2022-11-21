import React from 'react'
import { Text3D } from "@react-three/drei";
import { useSelector } from 'react-redux';


function Words(props) {
    const city = useSelector((state) => state.activeCord.city)

    return (
        <Text3D font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"} size={4} height={1} curveSegments={6} position={city.location} rotation={[0, -0.2, -0.05]}>
            {city.name}
            <meshStandardMaterial color={[0, 0, 0]} emissive={[0, 0, 1]} />
        </Text3D>
    )
}


export default Words
