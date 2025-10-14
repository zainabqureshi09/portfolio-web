"use client";

import React, { useEffect, useRef } from "react";

const ThreeBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let cleanup = () => {};

    (async () => {
      try {
        const THREE = await import("three");
        const canvas = canvasRef.current;
        if (!canvas) return;

        // ✅ Renderer setup
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true, // Transparent background
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 6;

        // ✅ Wireframe shape
        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const material = new THREE.MeshBasicMaterial({
          color: 0x00ff88,
          wireframe: true,
          transparent: true,
          opacity: 0.25,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // ✅ Handle proper resizing
        const resize = () => {
          const width = canvas.clientWidth || window.innerWidth;
          const height =
            canvas.clientHeight ||
            Math.max(240, Math.min(420, Math.floor(window.innerHeight * 0.5)));

          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        resize();
        window.addEventListener("resize", resize);

        // ✅ Animation loop
        const animate = () => {
          mesh.rotation.x += 0.0025;
          mesh.rotation.y += 0.0035;
          renderer.render(scene, camera);
          rafRef.current = requestAnimationFrame(animate);
        };
        animate();

        // ✅ Cleanup properly
        cleanup = () => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          window.removeEventListener("resize", resize);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
        };
      } catch (err) {
        console.error("Three.js failed to initialize:", err);
      }
    })();

    return () => cleanup();
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ThreeBG;
