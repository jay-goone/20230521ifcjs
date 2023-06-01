import {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    PerspectiveCamera,
    WebGLRenderer
} from 'three';

// 1 Scene
const scene = new Scene();

//2 The object
const geometry = new BoxGeometry(0.5,0.5,0.5);
const material = new MeshBasicMaterial({color: 'orange'});
const mesh = new Mesh(geometry, material);

scene.add(mesh);

// 3 Camera
const sizes = {
    width: 800,
    height: 600
}

const camera = new PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 3
scene.add(camera);

// 4 The Renderer
const canvas = document.getElementById('three-canvas');
const renderer = new WebGLRenderer({canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene, camera);