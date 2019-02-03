import * as THREE from 'three';

const NUM_FRAMES = 40;
const FULL_ROTATE = Math.PI * 2;
const ROTATE_OPTIONS: Array = [{
  'x' : Math.PI * 1.5,
  'y' : 0,
  'z' : 0
}, {
  'x' : Math.PI,
  'y' : 0,
  'z' : 0
}, {
  'x' : 0,
  'y' : Math.PI * 1.5,
  'z' : 0
}, {
  'x' : 0,
  'y' : Math.PI / 2,
  'z' : 0
}, {
  'x' : 0,
  'y' : 0,
  'z' : 0
}, {
  'x' : Math.PI / 2,
  'y' : 0,
  'z' : 0
}];


export class Cube {
  design:         any;
  id:             number;
  val:            number;
  isBlock:        boolean;
  currRotate:     object;
  counter:        number;
  currDirection:  object;
  yPos:           number;
  constructor(id) {
    this.isBlock = false;
    this.id = id;
    this.val = 5;
    this.currRotate = {
      'x' : 0,
      'y' : 0,
      'z' : 0
    };
    this.currDirection = {
      'x' : 0,
      'y' : 0,
      'z' : 0
    };

    this.drawCube();
    this.throwCubes(this);
  }
  render() {
    const self: Cube = this;

    (function render() {
      requestAnimationFrame(render);
      self.animate();
    }());

  }

  animate() {
    // means finish the animation
    if (this.counter > NUM_FRAMES) {
      return;
    }

    // handle end rotate
    if (this.counter === NUM_FRAMES) {
      console.log(this.currRotate);
      switch (this.val) {
        case 1:
          this.design.rotateZ(0.11 * (2.45 - this.id));
          break;
        case 2:
          this.design.rotateY(-0.11 * (2.45 - this.id));
          break;
        case 3:
        case 4:
        case 5:
          this.design.rotateY(0.11 * (2.45 - this.id));
          break;
        case 6:
          this.design.rotateZ(-0.11 * (2.45 - this.id));
          break;
      }
      this.design.position.y = 0;
      this.counter++;
      return;
    }
    this.counter++;

    // handle animation
    this.design.position.y += ((NUM_FRAMES / 2) - this.counter) * 3 / NUM_FRAMES;
    this.design.rotation.x += (this.currDirection['x']);
    this.currRotate['x'] += this.currDirection['x'];
    this.design.rotation.y += (this.currDirection['y']);
    this.currRotate['y'] += this.currDirection['y'];
    this.design.rotation.z += (this.currDirection['z']);
    this.currRotate['z'] += this.currDirection['z'];



  }

  throwCubes(cube) {
    cube.counter = 0;
    cube.yPos = 0;
    // rand cube value
    cube.val = Math.floor(Math.random() * 6) + 1;

    // create animation rotate factor
    if (Math.floor(Math.random() * 2)) {
      cube.currDirection['x'] = (ROTATE_OPTIONS[cube.val - 1]['x'] - cube.design.rotation.x + FULL_ROTATE) / NUM_FRAMES;
    } else {
      cube.currDirection['x'] = (ROTATE_OPTIONS[cube.val - 1]['x'] - cube.design.rotation.x - (2 * FULL_ROTATE)) / NUM_FRAMES;
    }

    if (Math.floor(Math.random() * 2)) {
      cube.currDirection['y'] = ((ROTATE_OPTIONS[cube.val - 1]['y'] - cube.design.rotation.y) + FULL_ROTATE) / NUM_FRAMES;
    } else {
      cube.currDirection['y'] = ((ROTATE_OPTIONS[cube.val - 1]['y'] - cube.design.rotation.y) - (2 * FULL_ROTATE)) / NUM_FRAMES;
    }
    if (Math.floor(Math.random() * 2)) {
      cube.currDirection['z'] = (ROTATE_OPTIONS[cube.val - 1]['z'] - cube.design.rotation.z + FULL_ROTATE) / NUM_FRAMES;
    } else {
      cube.currDirection['z'] = (ROTATE_OPTIONS[cube.val - 1]['z'] - cube.design.rotation.z - (2 * FULL_ROTATE)) / NUM_FRAMES;
    }
  }

  drawCube() {
    const geometry = new THREE.BoxGeometry(10, 10, 10),
      material = new THREE.MeshBasicMaterial({ color : 0xdedcbd });

    const geometryBall = new THREE.SphereGeometry(1, 25, 25),
      materialBall = new THREE.MeshBasicMaterial({ color : 0x000000 });

    this.design = new THREE.Group();
    const cube = new THREE.Mesh( geometry, material );
    cube.position.set(0, 0, 0);

    this.design.add(cube);

    // draw 1
    const ball11 = new THREE.Mesh( geometryBall, materialBall );
    ball11.position.set(0, -4.4, 0);
    this.design.add(ball11);


    // draw 2
    const ball23 = new THREE.Mesh( geometryBall, materialBall );
    ball23.position.set(2, 2, -4.4);
    this.design.add(ball23);

    const ball25 = new THREE.Mesh( geometryBall, materialBall );
    ball25.position.set(-2, -2, -4.4);
    this.design.add(ball25);


    // draw 3
    const ball31 = new THREE.Mesh( geometryBall, materialBall );
    ball31.position.set(4.4, 0, 0);
    this.design.add(ball31);


    const ball33 = new THREE.Mesh( geometryBall, materialBall );
    ball33.position.set(4.4, 2.5, 2.5);
    this.design.add(ball33);

    const ball35 = new THREE.Mesh( geometryBall, materialBall );
    ball35.position.set(4.4, -2.5, -2.5);
    this.design.add(ball35);


    // draw 4
    const ball42 = new THREE.Mesh( geometryBall, materialBall );
    ball42.position.set(-4.4, 2, 2);
    this.design.add(ball42);

    const ball43 = new THREE.Mesh( geometryBall, materialBall );
    ball43.position.set(-4.4, 2, -2);
    this.design.add(ball43);

    const ball44 = new THREE.Mesh( geometryBall, materialBall );
    ball44.position.set(-4.4, -2, 2);
    this.design.add(ball44);

    const ball45 = new THREE.Mesh( geometryBall, materialBall );
    ball45.position.set(-4.4, -2, -2);
    this.design.add(ball45);

    // draw 5
    const ball51 = new THREE.Mesh( geometryBall, materialBall );
    ball51.position.set(0, 0, 4.4);
    this.design.add(ball51);

    const ball52 = new THREE.Mesh( geometryBall, materialBall );
    ball52.position.set(2, 2, 4.4);
    this.design.add(ball52);

    const ball53 = new THREE.Mesh( geometryBall, materialBall );
    ball53.position.set(-2, 2, 4.4);
    this.design.add(ball53);

    const ball54 = new THREE.Mesh( geometryBall, materialBall );
    ball54.position.set(2, -2, 4.4);
    this.design.add(ball54);

    const ball55 = new THREE.Mesh( geometryBall, materialBall );
    ball55.position.set(-2, -2, 4.4);
    this.design.add(ball55);

    // draw 6
    const ball61 = new THREE.Mesh( geometryBall, materialBall );
    ball61.position.set(-2, 4.4, 0);
    this.design.add(ball61);

    const ball62 = new THREE.Mesh( geometryBall, materialBall );
    ball62.position.set(-2, 4.4, -2.5);
    this.design.add(ball62);

    const ball63 = new THREE.Mesh( geometryBall, materialBall );
    ball63.position.set(-2, 4.4, 2.5);
    this.design.add(ball63);

    const ball64 = new THREE.Mesh( geometryBall, materialBall );
    ball64.position.set(2, 4.4, 0);
    this.design.add(ball64);

    const ball65 = new THREE.Mesh( geometryBall, materialBall );
    ball65.position.set(2, 4.4, -2.5);
    this.design.add(ball65);

    const ball66 = new THREE.Mesh( geometryBall, materialBall );
    ball66.position.set(2, 4.4, 2.5);
    this.design.add(ball66);

    this.design.position.set((this.id * 20) - 50, 0, ((2.5 - this.id) * 0.8) - 200);
    this.design.rotation.y = (0.11 * (2.45 - this.id));
  }
}
