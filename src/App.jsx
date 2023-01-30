import React, { Suspense } from 'react';
import './App.css';
import Background from './Components/Background';
import HeroText from './Components/HeroText';
import Box from './Components/Box';
import AnimatedSphere from './Components/AnimatedSphere';
import Iphone from './Components/Iphone';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <div className="relative bg-main-bg h-full w-full">
      <Background />
      <HeroText />
      <Canvas style={{ height: 500 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas style={{ height: 500 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>

      <Canvas style={{ height: 500 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
