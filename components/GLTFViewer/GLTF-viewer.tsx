"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';

interface GLTFViewerProps {
  modelUrl: string;
}

const Model = React.memo(({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
});

Model.displayName = 'Model';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white' }}>
        Loading... {Math.round(progress)}%
      </div>
    </Html>
  );
}

export default function GLTFViewer({ modelUrl }: GLTFViewerProps) {
  return (
    <div style={{ height: '50vh', width: '50vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[0, 5, 0]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      </Canvas>
    </div>
  );
}

GLTFViewer.displayName = 'GLTFViewer';
