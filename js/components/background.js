import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js';

class ParticleBackground {
    constructor() {
        this.container = document.querySelector('#contact');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.particles = [];
        
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        
        // Create particles
        const particleGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: 0xe3d5cc,
            transparent: true,
            opacity: 0.6
        });

        for(let i = 0; i < 100; i++) {
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.x = (Math.random() - 0.5) * 10;
            particle.position.y = (Math.random() - 0.5) * 10;
            particle.position.z = (Math.random() - 0.5) * 10;
            this.scene.add(particle);
            this.particles.push({
                mesh: particle,
                speed: Math.random() * 0.02
            });
        }

        this.camera.position.z = 5;
        
        // Animation
        this.animate();
        
        // Handle resize
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        this.particles.forEach(particle => {
            particle.mesh.rotation.x += particle.speed;
            particle.mesh.rotation.y += particle.speed;
            particle.mesh.position.y = Math.sin(Date.now() * particle.speed * 0.001) * 0.5;
        });
        
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground();
});