"use client";
import * as THREE from 'three';
import React, { useState, useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const MODELS = [
    '/engine_blocks_v8.glb',
    '/engine_block.glb',
    '/engine_block_v8.glb',
];

// const ACCENT_COLOR_HEX = 0x0077b6;
const ACCENT_COLOR_HEX = '#00f0ff';
const Hero = () => {
    const canvasRef = useRef(null);
    const modelRef = useRef(null);
    const [modelIndex, setModelIndex] = useState(0);
    const transitionProgress = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setModelIndex((prev) => (prev + 1) % MODELS.length);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const container = canvasRef.current;
        let scene, camera, renderer, animationFrameId, controls;

        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(25, container.clientWidth / container.clientHeight, 0.1, 1000);
        
        // 1. POSITION THE CAMERA
        camera.position.set(0, 0, 20); 
        
        // 2. SHIFT THE VIEW TO THE RIGHT
        // Instead of moving the model, we "look" slightly to the left of the model,
        // which pushes the model to the right side of the screen.
        camera.setViewOffset(
            container.clientWidth, container.clientHeight, 
            -container.clientWidth * 0.20, 0, // Shifting the "window" 20% to the left
            container.clientWidth, container.clientHeight
        );

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0;

        scene.add(new THREE.AmbientLight(0xffffff, 1));

        const loadModel = (path) => {
            if (modelRef.current) scene.remove(modelRef.current);
            transitionProgress.current = 0;

            new GLTFLoader().load(path, (gltf) => {
                const model = gltf.scene;

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.center();
                        const edges = new THREE.EdgesGeometry(child.geometry);
                        const lineMat = new THREE.LineBasicMaterial({
                            color: ACCENT_COLOR_HEX,
                            transparent: true,
                            opacity: 0
                        });
                        child.parent.add(new THREE.LineSegments(edges, lineMat));
                        child.visible = false;
                    }
                });

                const box = new THREE.Box3().setFromObject(model);
                const size = new THREE.Vector3();
                box.getSize(size);
                const scale = 5 / Math.max(size.x, size.y, size.z);
                model.scale.set(scale, scale, scale);

                const wrapper = new THREE.Group();
                wrapper.add(model);
                wrapper.rotation.x = Math.PI / 2;
                
                // 3. KEEP THE MODEL AT 0,0,0
                // This ensures it rotates around its own axis perfectly.
                wrapper.position.set(0, 0, 0); 

                modelRef.current = wrapper;
                scene.add(wrapper);
            });
        };

        loadModel(MODELS[modelIndex]);

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();

            if (modelRef.current) {
                const maxVisibility = 0.1;
                if (transitionProgress.current < maxVisibility) transitionProgress.current += 0.01;
                modelRef.current.traverse((child) => {
                    if (child.isLineSegments) child.material.opacity = transitionProgress.current;
                });
            }
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            
            // Update the view offset on resize to keep the model on the right
            camera.setViewOffset(
                container.clientWidth, container.clientHeight, 
                -container.clientWidth * 0.25, 0, 
                container.clientWidth, container.clientHeight
            );
            
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            controls.dispose();
            renderer.dispose();
            if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        };
    }, [modelIndex]);

    return (
        <header className="relative h-screen flex items-center text-center px-6 md:px-20 overflow-hidden bg-transparent">
            <div className="z-10 w-full max-w-4xl flex flex-col items-center text-center md:items-start md:text-left md:pl-[5%] lg:pl-[10%] pointer-events-none">
                <p className="text-sm text-gray-400 mb-4 tracking-[0.2em] uppercase font-mono">
                    Mechanical Design & Product Development
                </p>
                <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-white">
                    Optimizing <br />
                    <span className="font-bold">Function</span> with <br />
                    <span className="font-bold " style={{color: ACCENT_COLOR_HEX}}>Precision Engineering</span>.
                </h1>
                <a href="#work" className="pointer-events-auto inline-block border border-white/20 px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#0077b6] transition-all rounded-sm">
                    View Projects
                </a>
            </div>
            
            <div 
                ref={canvasRef} 
                className="hidden md:block absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing" 
            />
        </header>
    );
};

export default Hero;