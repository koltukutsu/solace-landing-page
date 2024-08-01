// pages/index.tsx

import GLTFViewer from '@/components/GLTFViewer/GLTF-viewer';
import Head from 'next/head';

export default function Home() {
  const modelUrl = '/models/your-model.glb'; // Replace with your actual model path

  return (
    <div>
      <Head>
        <title>GLTF Viewer</title>
        <meta name="description" content="View your 3D models with Three.js and React Three Fiber" />
      </Head>
      <main>
        <h1>GLTF Viewer</h1>
        <GLTFViewer modelUrl={modelUrl} />
      </main>
    </div>
  );
}
