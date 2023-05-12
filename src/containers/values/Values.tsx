import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BufferGeometry, Material, Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';

interface ModelViewerProps {
  modelPath: string;
}

const Values: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath) as GLTF;
  const modelRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
      modelRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={modelRef} position={[0, 0, 0]} scale={4}>
      <primitive object={gltf.scene} />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> 
    </mesh>
  );
};

export default Values