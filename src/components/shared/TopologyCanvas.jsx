import { useEffect, useRef } from 'react'

export function TopologyCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrame
    let width = 0
    let height = 0
    let nodes = []

    const createNodes = () => {
      const count = Math.max(26, Math.floor((width * height) / 42000))
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: index % 5 === 0 ? 2.2 : 1.45,
        speedX: (Math.random() - 0.5) * 0.22,
        speedY: (Math.random() - 0.5) * 0.22,
      }))
    }

    const resize = () => {
      const pixelRatio = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createNodes()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      nodes.forEach((node, index) => {
        node.x += node.speedX
        node.y += node.speedY

        if (node.x < -20) node.x = width + 20
        if (node.x > width + 20) node.x = -20
        if (node.y < -20) node.y = height + 20
        if (node.y > height + 20) node.y = -20

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const nextNode = nodes[nextIndex]
          const distanceX = node.x - nextNode.x
          const distanceY = node.y - nextNode.y
          const distance = Math.hypot(distanceX, distanceY)

          if (distance < 145) {
            context.strokeStyle = `rgba(0, 229, 195, ${0.13 * (1 - distance / 145)})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(node.x, node.y)
            context.lineTo(nextNode.x, nextNode.y)
            context.stroke()
          }
        }

        context.fillStyle = 'rgba(0, 229, 195, 0.55)'
        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fill()
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="topology-canvas" ref={canvasRef} aria-hidden="true" />
}
