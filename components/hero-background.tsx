"use client"

import { useEffect, useRef } from "react"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get current theme
      const isDark = document.documentElement.classList.contains("dark")

      const orbs = [
        { x: canvas.width * 0.3, y: canvas.height * 0.4, size: 400 },
        { x: canvas.width * 0.7, y: canvas.height * 0.6, size: 350 },
      ]

      orbs.forEach((orb, index) => {
        // Animate orb position slightly
        const offsetX = Math.sin(time * 0.0005 + index) * 50
        const offsetY = Math.cos(time * 0.0007 + index) * 40

        // Create radial gradient for glow effect
        const gradient = ctx.createRadialGradient(
          orb.x + offsetX,
          orb.y + offsetY,
          0,
          orb.x + offsetX,
          orb.y + offsetY,
          orb.size,
        )

        if (isDark) {
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.12)")
          gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.06)")
          gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.02)")
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        } else {
          gradient.addColorStop(0, "rgba(0, 0, 0, 0.08)")
          gradient.addColorStop(0.3, "rgba(0, 0, 0, 0.04)")
          gradient.addColorStop(0.6, "rgba(0, 0, 0, 0.015)")
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        }

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      time++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
