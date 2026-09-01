import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3DSpace() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Particle field 1: Distant Stars
    const starCount = 600;
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const isDark = document.documentElement.classList.contains('dark');
    const colorCyan = new THREE.Color(isDark ? 0x00f0ff : 0x3b82f6);
    const colorPurple = new THREE.Color(isDark ? 0xbd00ff : 0x8b5cf6);
    const colorWhite = new THREE.Color(isDark ? 0xffffff : 0x94a3b8);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 300;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const rand = Math.random();
      const c = rand > 0.6 ? colorCyan : rand > 0.3 ? colorPurple : colorWhite;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starGeom, starMaterial);
    scene.add(starField);

    // Particle field 2: Constellation Nodes (Wandering glowing spheres)
    const nodeCount = 45;
    const nodeGeom = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 120;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.03
      });
    }

    nodeGeom.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 1.8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const nodeField = new THREE.Points(nodeGeom, nodeMaterial);
    scene.add(nodeField);

    // Lines for connecting constellation nodes
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeom = new THREE.BufferGeometry();

    lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeom.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeom, lineMaterial);
    scene.add(lines);

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Rotate starfield slowly
      starField.rotation.y = elapsedTime * 0.015 + mouse.x * 0.08;
      starField.rotation.x = elapsedTime * 0.01 + mouse.y * 0.08;
      starField.position.y = -scrollY * 0.04;

      // Update Constellation Nodes
      const posAttr = nodeGeom.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        posArray[i * 3] += nodeVelocities[i].x;
        posArray[i * 3 + 1] += nodeVelocities[i].y;
        posArray[i * 3 + 2] += nodeVelocities[i].z;

        // Bounce within boundaries
        if (Math.abs(posArray[i * 3]) > 60) nodeVelocities[i].x *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > 60) nodeVelocities[i].y *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > 25) nodeVelocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update lines between close nodes
      let lineIndex = 0;
      let colorIndex = 0;
      const connectDist = 28;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectDist) {
            const alpha = 1.0 - dist / connectDist;

            linePositions[lineIndex++] = posArray[i * 3];
            linePositions[lineIndex++] = posArray[i * 3 + 1];
            linePositions[lineIndex++] = posArray[i * 3 + 2];

            linePositions[lineIndex++] = posArray[j * 3];
            linePositions[lineIndex++] = posArray[j * 3 + 1];
            linePositions[lineIndex++] = posArray[j * 3 + 2];

            lineColors[colorIndex++] = 0.0;
            lineColors[colorIndex++] = 0.94 * alpha;
            lineColors[colorIndex++] = 1.0 * alpha;

            lineColors[colorIndex++] = 0.74 * alpha;
            lineColors[colorIndex++] = 0.0 * alpha;
            lineColors[colorIndex++] = 1.0 * alpha;
          }
        }
      }

      lineGeom.setDrawRange(0, lineIndex / 3);
      (lineGeom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (lineGeom.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      nodeField.position.y = -scrollY * 0.06;
      lines.position.y = -scrollY * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
