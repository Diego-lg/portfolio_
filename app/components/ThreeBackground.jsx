"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

const ThreeBackground = ({ limitHeight = false }) => {
  const mountRef = useRef(null)
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    if (!mountRef.current) return

    const currentTheme = theme === "system" ? systemTheme : theme

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      transparent: true,
      color: currentTheme === "dark" ? 0x888888 : 0x333333,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Position camera
    camera.position.z = 3

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.y += 0.0005
      particlesMesh.rotation.x += 0.0002
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      const width = limitHeight ? mountRef.current.clientWidth : window.innerWidth
      const height = limitHeight ? mountRef.current.clientHeight : window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial call to handleResize

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [theme, systemTheme, limitHeight])

  return (
    <div ref={mountRef} className={`absolute inset-0 ${limitHeight ? "h-screen" : ""}`} style={{ height: "100vh" }} />
  )
}

export default ThreeBackground

