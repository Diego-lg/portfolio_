"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

const FallingMeteors = () => {
  const mountRef = useRef(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    const meteors = []
    const meteorCount = 20

    for (let i = 0; i < meteorCount; i++) {
      createMeteor()
    }

    function createMeteor() {
      const geometry = new THREE.BufferGeometry()
      const points = []

      points.push(new THREE.Vector3(0, 0, 0))
      points.push(new THREE.Vector3(0, -10, 0))

      geometry.setFromPoints(points)

      const material = new THREE.LineBasicMaterial({
        color: resolvedTheme === "dark" ? 0xffffff : 0x000000,
        opacity: Math.random() * 0.5 + 0.5,
        transparent: true,
        linewidth: 2,
      })

      const meteor = new THREE.Line(geometry, material)

      meteor.position.set(
        Math.random() * 2000 - 1000,
        Math.random() * 1000 + 500,
        Math.random() * 2000 - 1000
      )

      meteor.rotation.z = Math.atan2(-1, -1) - Math.PI / 4

      scene.add(meteor)
      meteors.push({
        object: meteor,
        speed: Math.random() * 2 + 1,
      })
    }

    camera.position.z = 1000

    const animate = () => {
      requestAnimationFrame(animate)

      meteors.forEach((meteor, index) => {
        meteor.object.position.y -= meteor.speed
        meteor.object.position.x -= meteor.speed

        if (meteor.object.position.y < -500) {
          scene.remove(meteor.object)
          meteors.splice(index, 1)
          createMeteor()
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    };
  }, [resolvedTheme])

  return (
    (<div
      ref={mountRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.2 }} />)
  );
}

export default FallingMeteors

