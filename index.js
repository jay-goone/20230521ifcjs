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
const orangeMaterial = new MeshBasicMaterial({color: 'orange'});
const blueMaterial = new MeshBasicMaterial({color: 'blue'});


const orangeCube = new Mesh(geometry, orangeMaterial);
scene.add(orangeCube);

const bigOrangeCube = new Mesh(geometry, blueMaterial);
bigOrangeCube.position.x += 2;
bigOrangeCube.scale.set(2,2,2)
scene.add(bigOrangeCube);


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

function animate(){
    orangeCube.rotation.x += 0.01;
    orangeCube.rotation.z += 0.01;

    bigOrangeCube.rotation.x += 0.02;
    bigOrangeCube.rotation.z += 0.02;

    renderer.render(scene, camera);    
    requestAnimationFrame(animate);
}

animate();