import React, { useRef } from 'react'
import { MapControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

const Controls = () => {
    const { camera } = useThree()
    const cameraLastPosition = useRef({
        x: camera.position.x,
        y: camera.position.y,
    })

    return (
        <MapControls
            enableRotate={false}
            maxDistance={600}
            // dampingFactor={0.1}
            // enableDamping={true}
            onChange={(e) => {
                const maxX = 270
                const minX = -270
                const maxY = 100
                const minY = -100
                const x = e?.target.target.x
                const y = e?.target.target.y

                if (x < minX || x > maxX) {
                    e?.target.target.setX(x < minX ? minX : maxX)
                    camera.position.setX(cameraLastPosition.current.x)
                }
                if (y < minY || y > maxY) {
                    e?.target.target.setY(y < minY ? minY : maxY)
                    camera.position.setY(cameraLastPosition.current.y)
                }
                cameraLastPosition.current.x = camera.position.x
                cameraLastPosition.current.y = camera.position.y
            }}
        />
    )
}

export default Controls
