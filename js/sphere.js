// let clock = new THREE.Clock();
document.getElementById("sphere").appendChild(renderer.domElement);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 16),
  new THREE.MeshBasicMaterial({ color: 0x326da8 })
);
scene.add(sphere);
sphere.position.set(0, 0, 0);

const sphereOne = new THREE.Mesh(
  new THREE.SphereGeometry(50, 32, 16),
  new THREE.MeshBasicMaterial({ color: 0x326da8 })
);
scene.add(sphereOne);
sphereOne.position.set(-100, 100, 0);

gsap.fromTo(
  sphereOne.position,
  { y: -500 },
  { y: 500, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 }
);
