"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { Rotate3D } from "lucide-react";

interface GLTFViewerProps {
  modelUrl: string;
}

const Model = React.memo(({ url }: { url: string }) => {
  const { scene } = useGLTF(url);

  // Ensure the model is centered by adjusting its position
  return <primitive object={scene} position={[0, 0, 0]} />;
});

Model.displayName = "Model";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white" }}>Loading... {Math.round(progress)}%</div>
    </Html>
  );
}

export default function GLTFViewer({ modelUrl }: GLTFViewerProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "50vh",
          width: "50vh",
          overflow: "hidden",
          borderRadius: "1rem",
          border: "0.25px solid white",
          opacity: 0.8,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            padding: "8px",
            color: "white",
          }}
        >
          <Rotate3D size={24} />
        </div>

        <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[0, 5, 0]} intensity={2.5} />
          <pointLight position={[-5, 5, 5]} intensity={2.0} />
          <pointLight position={[5, -5, 5]} intensity={2.0} />
          <pointLight position={[5, 5, -5]} intensity={2.0} />
          <directionalLight position={[0, 10, 5]} intensity={2.5} />
          <directionalLight position={[-10, 10, 10]} intensity={2.5} />

          <Suspense fallback={<Loader />}>
            <Model url={modelUrl} />
          </Suspense>
          <OrbitControls
            enableZoom={true}
            minDistance={isSmallScreen ? 18 : 20}
            maxDistance={isSmallScreen ? 18 : 20}
          />
        </Canvas>
      </div>
    </div>
  );
}

GLTFViewer.displayName = "GLTFViewer";
