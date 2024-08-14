// pages/index.tsx

// import GLTFViewer from '@/components/GLTFViewer/GLTFViewer';
import GLTFViewer from '@/components/GLTFViewer/GLTF-viewer';
import Head from 'next/head';

export default function Home() {
  const modelUrl = '/models/ensi-box.glb'; // Replace with your actual model path

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>GLTF Viewer</title>
        <meta name="description" content="View your 3D models with Three.js and React Three Fiber" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold mb-8">GLTF Viewer</h1>
        <div className="w-full max-w-md">
          <GLTFViewer modelUrl={modelUrl} />
        </div>
      </main>
    </div>
  );
}
