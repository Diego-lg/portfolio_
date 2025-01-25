"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const ThreeJsIcon = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const width = 100
    const height = 100

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

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
    ]

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
    ]

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesPositions = []
    const particlesCount = 1000

    // Create particles along the edges of the cube
    edges.forEach((edge) => {
      const [start, end] = edge
      for (let i = 0; i < particlesCount / edges.length; i++) {
        const t = i / (particlesCount / edges.length - 1)
        const x = THREE.MathUtils.lerp(vertices[start][0], vertices[end][0], t)
        const y = THREE.MathUtils.lerp(vertices[start][1], vertices[end][1], t)
        const z = THREE.MathUtils.lerp(vertices[start][2], vertices[end][2], t)
        particlesPositions.push(x, y, z)
      }
    })

    particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlesPositions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x049ef4,
      size: 0.05,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 4

    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.x += 0.005
      particles.rotation.y += 0.005
      renderer.render(scene, camera)
    }

    animate()

    // Add responsive behavior
    const handleResize = () => {
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    };
  }, [])

  return <div ref={mountRef} style={{ width: "100px", height: "100px" }} />;
}

export default ThreeJsIcon

