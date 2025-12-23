"use client";
import * as THREE from 'three';
import React, { useState, useEffect, useRef } from 'react'; 
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// 1. List your 5 model paths here
const MODELS = [
    '/engine_blocks_v8.glb',
    '/engine_block.glb',
    '/engine_block_v8.glb',
];

const ACCENT_COLOR_HEX = 0x0077b6;

export default function Home() {
    const canvasRef = useRef(null);
    const modelRef = useRef(null);
    const scrollTarget = useRef(0);
    const scrollCurrent = useRef(0);
    
    // Track which model is active (0 to 4)
    const [modelIndex, setModelIndex] = useState(0);

    // 2. Automatically cycle models every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setModelIndex((prev) => (prev + 1) % MODELS.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const container = canvasRef.current;
        let scene, camera, renderer, animationFrameId;

        // Initialize Scene (Only once)
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 25; 

        scene.add(new THREE.AmbientLight(0xffffff, 0.8));
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 20, 10);
        scene.add(light);

        // 3. Function to Load and Setup Model
        const loadNewModel = (path) => {
            // Cleanup existing model to prevent memory leaks
            if (modelRef.current) {
                scene.remove(modelRef.current);
                modelRef.current.traverse((child) => {
                    if (child.isMesh || child.isLineSegments) {
                        child.geometry.dispose();
                        if (Array.isArray(child.material)) {
                            child.material.forEach(m => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                });
            }

            const loader = new GLTFLoader();
            loader.load(path, (gltf) => {
                const modelGroup = gltf.scene;

                // Create Wireframes
                modelGroup.traverse((child) => {
                    if (child.isMesh) {
                        const edges = new THREE.EdgesGeometry(child.geometry);
                        const lineMat = new THREE.LineBasicMaterial({ 
                            color: ACCENT_COLOR_HEX, 
                            transparent: true, 
                            opacity: 0, // Start invisible for fade-in
                            depthWrite: false 
                        });
                        const lines = new THREE.LineSegments(edges, lineMat);
                        child.parent.add(lines);
                        child.visible = false; 
                    }
                });

                // Auto-center and Scale
                const box = new THREE.Box3().setFromObject(modelGroup);
                const size = new THREE.Vector3();
                box.getSize(size);
                const targetWidth = 6; 
                const scaleFactor = targetWidth / Math.max(size.x, size.y, size.z);
                modelGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);
                
                const center = new THREE.Vector3();
                box.getCenter(center);
                modelGroup.position.x = -center.x * scaleFactor;
                modelGroup.position.y = -center.y * scaleFactor;
                modelGroup.position.z = -center.z * scaleFactor;

                const wrapper = new THREE.Group();
                wrapper.add(modelGroup);
                wrapper.position.set(4.5, 0, 0); 
                wrapper.rotation.x = Math.PI / 2;

                modelRef.current = wrapper; 
                scene.add(wrapper);
            });
        };

        // Load the model whenever modelIndex changes
        loadNewModel(MODELS[modelIndex]);

        const animate = (time) => {
            animationFrameId = requestAnimationFrame(animate);

            // Scroll Logic
            scrollCurrent.current += (scrollTarget.current - scrollCurrent.current) * 0.05;
            const progress = Math.min(scrollCurrent.current / 800, 1);

            if (modelRef.current) {
                const m = modelRef.current;
                modelRef.current.rotation.z = time * 0.0001;
                // Position and Size (Your requested "Bigger" effect)
                m.position.x = 4.5 - (progress * 4.5);
                const dynamicScale = 1 + (progress * 12); 
                m.scale.set(dynamicScale, dynamicScale, dynamicScale);
                m.position.y = Math.sin(time * 0.001) * 0.1;

                // Fade-out as it gets bigger + Fade-in when new
                m.traverse((child) => {
                    if (child.isLineSegments) {
                        const scrollOpacity = 0.3 * (1 - progress * 0.9);
                        // Smoothly ramp up to the scrollOpacity limit
                        if (child.material.opacity < scrollOpacity) {
                            child.material.opacity += 0.01;
                        } else {
                            child.material.opacity = scrollOpacity;
                        }
                    }
                });
            }
            renderer.render(scene, camera);
        };

        const onScroll = () => { scrollTarget.current = window.scrollY; };
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        animate(0);
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [modelIndex]); // React will re-run this when the index changes

    return (
        <main className="relative bg-[#050505] text-white">
            <div ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
            <Navbar/>
            <div className="relative z-10">
                <Hero />
                <div className="bg-transparent">
                    <Projects />
                    <div className="h-[20vh]" /> 
                    <Footer />
                </div>
            </div>
        </main>
    );
}