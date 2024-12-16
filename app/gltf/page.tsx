// pages/index.tsx

// import GLTFViewer from '@/components/GLTFViewer/GLTFViewer';
import GLTFViewer from "@/components/GLTFViewer/GLTF-viewer";
import Head from "next/head";

export default function Home() {
  const modelUrl = "/models/ensi-box-3.glb"; // Replace with your actual model path

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>GLTF Viewer</title>
        <meta
          name="description"
          content="View your 3D models with Three.js and React Three Fiber"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="mb-8 text-4xl font-bold">GLTF Viewer</h1>
        <div className="w-full max-w-md">
          <GLTFViewer modelUrl={modelUrl} />
        </div>
      </main>
    </div>
  );
}
