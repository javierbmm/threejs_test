// Option 1: Import the entire three.js core library.
import * as THREE from '../resources/three.module.js';

const scene = new THREE.Scene();

export function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    renderer.setSize( canvas.offsetWidth, canvas.offsetHeight )

    // Light
    {
        const color = 0xC0FFEE;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    // Perspective Camera
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;

    // Cube
    //*
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    //*/
    //
    /*const radius = 7;
    const detail = 0;
    const geometry = new THREE.DodecahedronGeometry(radius, detail);*/
    const material = new THREE.MeshPhysicalMaterial({color: 0xC0FFEE});
    material.metalness = 1;
    material.roughness = 0.5;
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const width = 90;
    const height =  70.8;
    const geometryPlane = new THREE.PlaneGeometry(width, height);
    const materialPlane = new THREE.MeshBasicMaterial({color: 0xFF0000});         // red
    const plane = new THREE.Mesh(geometryPlane, material);
    plane.rotation.x = -45;
    plane.position.y = -1;
    scene.add(plane);

    renderer.render(scene, camera);


    function render(time) {
        time *= 0.001;  // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
main();
