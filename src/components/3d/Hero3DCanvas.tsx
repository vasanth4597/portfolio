import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Fixed defaults — cyber wireframe sphere
const PRIMARY   = 0x00f0ff;
const SECONDARY = 0xbd00ff;
const CORE      = 0x00ffd1;

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef    = useRef<HTMLCanvasElement | null>(null);

  // Drag interaction refs
  const isDraggingRef           = useRef(false);
  const previousMouseRef        = useRef({ x: 0, y: 0 });
  const rotationVelocityRef     = useRef({ x: 0.003, y: 0.005 });

  // Three.js object refs
  const mainGroupRef  = useRef<THREE.Group | null>(null);
  const coreMeshRef   = useRef<THREE.Mesh | null>(null);
  const particlesRef  = useRef<THREE.Points | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    // ── Scene ────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── Camera ───────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6.2;

    // ── Renderer ─────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // ── Lighting ─────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xbd00ff, 2.5);
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x00ffd1, 3, 10);
    scene.add(pointLight);

    // ── Main Group ───────────────────────────────────────────
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    mainGroupRef.current = mainGroup;

    // ── Geometry: Icosahedron wireframe sphere ────────────────
    const geom    = new THREE.IcosahedronGeometry(1.6, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color:       PRIMARY,
      wireframe:   true,
      transparent: true,
      opacity:     0.85,
    });
    mainGroup.add(new THREE.Mesh(geom, wireMat));

    // Inner glowing core
    const coreGeom = new THREE.IcosahedronGeometry(0.7, 2);
    const coreMat  = new THREE.MeshStandardMaterial({
      color:             CORE,
      emissive:          SECONDARY,
      emissiveIntensity: 0.8,
      roughness:         0.1,
      metalness:         0.5,
      transparent:       true,
      opacity:           0.7,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    mainGroup.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // ── Orbital Rings ─────────────────────────────────────────
    const ringColors = [PRIMARY, SECONDARY, CORE];
    for (let i = 0; i < 3; i++) {
      const ringGeom = new THREE.RingGeometry(2.1 + i * 0.25, 2.12 + i * 0.25, 64);
      const ringMat  = new THREE.MeshBasicMaterial({
        color:       ringColors[i],
        side:        THREE.DoubleSide,
        transparent: true,
        opacity:     0.45 - i * 0.1,
        blending:    THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 2 + (i * Math.PI) / 6;
      ring.rotation.y = (i * Math.PI) / 4;
      mainGroup.add(ring);
    }

    // ── Ambient Particle Cloud ────────────────────────────────
    const particleCount = 200;
    const pGeom         = new THREE.BufferGeometry();
    const positions     = new Float32Array(particleCount * 3);
    const colors        = new Float32Array(particleCount * 3);
    const c1 = new THREE.Color(PRIMARY);
    const c2 = new THREE.Color(SECONDARY);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.0;
      const theta  = Math.random() * Math.PI * 2;
      const phi    = Math.acos(Math.random() * 2 - 1);
      positions[i * 3]     = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      const mixed = c1.clone().lerp(c2, Math.random());
      colors[i * 3]     = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeom.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      size:         0.045,
      vertexColors: true,
      transparent:  true,
      opacity:      0.8,
      blending:     THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeom, pMat);
    mainGroup.add(particles);
    particlesRef.current = particles;

    // ── Animation Loop ────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (mainGroupRef.current) {
        // Auto-rotate with smooth inertia
        if (!isDraggingRef.current) {
          mainGroupRef.current.rotation.y += rotationVelocityRef.current.y;
          mainGroupRef.current.rotation.x += rotationVelocityRef.current.x;
          rotationVelocityRef.current.x *= 0.96;
          rotationVelocityRef.current.y =
            rotationVelocityRef.current.y * 0.96 + 0.005 * 0.04;
        }

        // Statically centered with gentle float
        mainGroupRef.current.position.x = 0;
        mainGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

        // Core pulse
        if (coreMeshRef.current) {
          const pulse = 1 + Math.sin(elapsedTime * 3) * 0.08;
          coreMeshRef.current.scale.set(pulse, pulse, pulse);
        }

        // Particle drift
        if (particlesRef.current) {
          particlesRef.current.rotation.y = elapsedTime * 0.1;
          particlesRef.current.rotation.x = elapsedTime * 0.05;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize Handler ────────────────────────────────────────
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // ── Drag to rotate ────────────────────────────────────────
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !mainGroupRef.current) return;
    const dx = e.clientX - previousMouseRef.current.x;
    const dy = e.clientY - previousMouseRef.current.y;
    const rotX = dy * 0.006;
    const rotY = dx * 0.006;
    mainGroupRef.current.rotation.x += rotX;
    mainGroupRef.current.rotation.y += rotY;
    rotationVelocityRef.current = { x: rotX, y: rotY };
    previousMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] flex items-center justify-center select-none">
      <div
        ref={containerRef}
        className="w-full h-full relative cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <canvas ref={canvasRef} className="w-full h-full block touch-none" />
      </div>
    </div>
  );
}
