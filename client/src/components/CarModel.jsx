import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, SoftShadows } from '@react-three/drei';
import { Car } from './Car';
import { useMediaQuery } from 'react-responsive';
import * as THREE from 'three';

const CarModel = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas 
            shadows
            camera={{ 
                position: [0, 1.5, 5], 
                fov: 50,
                near: 0.1,
                far: 1000
            }}
            gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                outputEncoding: THREE.sRGBEncoding
            }}
        >
            {/* Enhanced lighting setup */}
            <ambientLight intensity={0.3} color="#ffffff" />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[10, 10, 5]} intensity={0.5} color="#0066ff" />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ff00aa" />
            
            {/* Environment */}
            <Environment preset="city" />
            <SoftShadows size={25} samples={10} />
            
            {/* Car with responsive scaling */}
            <group 
                position={[0, 0, 0]}
                rotation={[0, Math.PI / 4, 0]}
                scale={isMobile ? 0.5 : isTablet ? 0.7 : 1}
            >
                <Car />
            </group>
            
            {/* Enhanced controls */}
            <OrbitControls
                enableZoom={!isTablet}
                enablePan={true}
                maxDistance={8}
                minDistance={3}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
                autoRotate
                autoRotateSpeed={0.5}
                enableDamping
                dampingFactor={0.05}
            />
        </Canvas>
    )
}

export default CarModel;