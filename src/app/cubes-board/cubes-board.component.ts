import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Cube} from '../cube';
import * as THREE from 'three';
@Component({
  selector: 'app-cubes-board',
  templateUrl: './cubes-board.component.html',
  styleUrls: ['./cubes-board.component.css']
})
export class CubesBoardComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  private container: HTMLElement;


  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cubes: Cube[];


  constructor() {
  }

  ngOnInit() {
    this.container = this.rendererContainer.nativeElement;

    console.log(this.container);

    this.init();

  }
  init() {
    const SCREEN = {
        width  : window.innerWidth,
        height : 300
      },
      VIEW = {
        angle  : 10,
        aspect : SCREEN.width / SCREEN.height,
        near   : 0.1,
        far    : 200000
      },
    NUM_CUBES = 5;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(VIEW.angle, VIEW.aspect, VIEW. near, VIEW.far);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(SCREEN.width / SCREEN.height);
    this.renderer.setClearColor( 0x000000, 1);

    this.scene.add(this.camera);

    this.camera.position.set(0, 0, 0);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer.setSize(SCREEN.width, SCREEN.height);
    this.container.appendChild(this.renderer.domElement);


    this.animate();
    this.cubes = [];



    for (let i = 0; i < NUM_CUBES; i++) {
      const cube = new Cube(i);
      cube.render();
      this.cubes.push(cube);
      this.scene.add(cube.design);
      document.getElementById('clickRoll').addEventListener('click', function () {
        cube.throwCubes(cube);
      });

    }

    this.render();
  }

  render() {
    const self: CubesBoardComponent = this;

    (function render() {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());

  }

  animate() {

  }

}
