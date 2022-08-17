let renderer, scene, camera, particle;

function init() {
  // создание рендера
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  // размер рендеринга
  renderer.setSize(window.innerWidth, window.innerHeight);
  // вставка рендерера в HTML
  document.getElementById("canvas").appendChild(renderer.domElement);
  // создание сцены
  scene = new THREE.Scene();
  // создание камеры
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  );
  // позиция камеры
  camera.position.set(0, 0, 700);

  // добавление камер на сцену. без неё не крутится.
  scene.add(camera);

  //   создаём объект
  particle = new THREE.Object3D();

  //   геометрия
  let geometry = new THREE.SphereGeometry(1, 32, 16);
  //   материал
  let material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
  });
  //   добавляем на сцену созданый объект
  scene.add(particle);

  //   соЗдаём меш
  for (let i = 0; i < 1000; i++) {
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize();
    mesh.position.multiplyScalar(150 + Math.random() * 1000);
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }

  //   свет
  let ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  let lights = [];
  lights[0] = new THREE.DirectionalLight(0x00365b, 1);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(0x46acb9, 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x00365b, 1);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  window.addEventListener("resize", onWindowResize, true);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// анимация фигурок, которые создаёт автор
function animate() {
  // запрос на анимаяию фреймов
  requestAnimationFrame(animate);

  particle.rotation.x += 0.004;
  particle.rotation.y -= 0.004;
  // воспроизведение  сцены и камеры
  renderer.clear();
  renderer.render(scene, camera);
}

init();
animate();
