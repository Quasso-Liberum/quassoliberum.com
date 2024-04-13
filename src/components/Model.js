import { useRef, useFrame } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ url }) {
    const meshRef = useRef()
    const { nodes } = useGLTF(url)

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1

            // Only update the X rotation
            meshRef.current.rotation.x = mouseX * 0.1
        }
    })

    return <primitive object={nodes.Object_0} ref={meshRef} />
}