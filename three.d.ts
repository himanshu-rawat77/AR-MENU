// src/@types/three.d.ts
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Vector2 } from 'three';
  
    export interface OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement: HTMLElement);
      object: Camera;
      domElement: HTMLElement;
      getPolarAngle(): number;
      getAzimuthalAngle(): number;
      saveState(): void;
      reset(): void;
      update(): void;
      dispose(): void;
      enableDamping: boolean;
      dampingFactor: number;
      enableZoom: boolean;
      zoomSpeed: number;
      enableRotate: boolean;
      rotateSpeed: number;
      enablePan: boolean;
      panSpeed: number;
      screenSpacePanning: boolean;
      mouseButtons: {
        LEFT: MOUSE;
        MIDDLE: MOUSE;
        RIGHT: MOUSE;
      };
      touches: {
        ONE: number;
        TWO: number;
      };
    }
  
    export default OrbitControls;
  },

  // src/@types/three.d.ts
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, MOUSE, Vector2 } from 'three';
  
    export interface OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement: HTMLElement);
      object: Camera;
      domElement: HTMLElement;
      getPolarAngle(): number;
      getAzimuthalAngle(): number;
      saveState(): void;
      reset(): void;
      update(): void;
      dispose(): void;
      enableDamping: boolean;
      dampingFactor: number;
      enableZoom: boolean;
      zoomSpeed: number;
      enableRotate: boolean;
      rotateSpeed: number;
      enablePan: boolean;
      panSpeed: number;
      screenSpacePanning: boolean;
      mouseButtons: {
        LEFT: MOUSE;
        MIDDLE: MOUSE;
        RIGHT: MOUSE;
      };
      touches: {
        ONE: number;
        TWO: number;
      };
    }
  
    export default OrbitControls;
  }