"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeJsIcon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = 64;
    const height = 64;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Set size and pixel ratio
    renderer.setSize(width, height);
    renderer.setPixelRatio(1); // Force 1:1 pixel ratio

    // Append the renderer to the mountRef div
    mountRef.current.appendChild(renderer.domElement);

    // Create cube vertices
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    // Create edges of the cube
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = [];
    const particlesCount = 500;

    // Create particles along the edges of the cube
    edges.forEach((edge) => {
      const [start, end] = edge;
      for (let i = 0; i < particlesCount / edges.length; i++) {
        const t = i / (particlesCount / edges.length - 1);
        const x = THREE.MathUtils.lerp(vertices[start][0], vertices[end][0], t);
        const y = THREE.MathUtils.lerp(vertices[start][1], vertices[end][1], t);
        const z = THREE.MathUtils.lerp(vertices[start][2], vertices[end][2], t);
        particlesPositions.push(x, y, z);
      }
    });

    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particlesPositions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x049ef4,
      size: 0.1,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.005;
      particles.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Disable responsive behavior
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="w-16 h-16 overflow-hidden">
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default ThreeJsIcon;
