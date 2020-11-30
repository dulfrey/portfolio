import { Component, OnInit } from '@angular/core';
import { ProyectsService } from 'src/services/proyects.service';
// import * as THREE from 'node_modules/three/src/Three';
// import Stats from 'node_modules/Three/examples/jsm/libs/stats.module';
// import { ColladaLoader } from 'node_modules/three/examples/jsm/loaders/ColladaLoader';
// import { OrbitControls } from 'node_modules/three/examples/jsm/controls/OrbitControls';
// let container, stats, clock, controls;
// let camera, scene, renderer, mixer;
  
@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  proyects: any;
   container:any;
   
  constructor(private proyectsServ: ProyectsService) { 
    this.proyectsServ.proyectsData$.subscribe(prycts =>{
      console.log(prycts)
      this.proyects = prycts;
    })
    
  }

  ngOnInit() {
    this.proyectsServ.getproyects();
    // https://threejs.org/examples/#webgl_loader_collada_skinning
    // this.init();
		// 	this.animate();
  }


  //  init() {

  //   container = document.getElementById( 'container' );

  //   camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 1000 );
  //   camera.position.set( 15, 10, - 15 );

  //   scene = new THREE.Scene();

  //   clock = new THREE.Clock();

  //   // collada

  //   const loader = new ColladaLoader();
  //   loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/collada/stormtrooper/stormtrooper.dae', function ( collada ) {

  //     const animations = collada.animations;
  //     const avatar = collada.scene;

  //     avatar.traverse( function ( node ) {

  //       if ( (<any> node).isSkinnedMesh ) {

  //         node.frustumCulled = false;

  //       }

  //     } );

  //     mixer = new THREE.AnimationMixer( avatar );
  //     mixer.clipAction( animations[ 0 ] ).play();

  //     scene.add( avatar );

  //   } );

  //   //

  //   const gridHelper = new THREE.GridHelper( 10, 20, 0x888888, 0x444444 );
  //   scene.add( gridHelper );

  //   //

  //   const ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 );
  //   scene.add( ambientLight );

  //   const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
  //   scene.add( camera );
  //   camera.add( pointLight );

  //   //

  //   renderer = new THREE.WebGLRenderer( { antialias: true } );
  //   renderer.setPixelRatio( window.devicePixelRatio );
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  //   container.appendChild( renderer.domElement );

  //   //

  //   controls = new OrbitControls( camera, renderer.domElement );
  //   controls.screenSpacePanning = true;
  //   controls.minDistance = 5;
  //   controls.maxDistance = 40;
  //   controls.target.set( 0, 2, 0 );
  //   controls.update();

  //   //

  //   stats = Stats.prototype;
  //   container.appendChild( stats.dom );

  //   //

  //   window.addEventListener( 'resize', this.onWindowResize, false );

  // }

  //  onWindowResize() {

  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();

  //   renderer.setSize( window.innerWidth, window.innerHeight );

  // }

  //  animate() {

  //   requestAnimationFrame( this.animate );

  //   this.render();
  //   stats.update();

  // }

  //  render() {

  //   const delta = clock.getDelta();

  //   if ( mixer !== undefined ) {

  //     mixer.update( delta );

  //   }

  //   renderer.render( scene, camera );

  // }
}
