// TODO: Export this to a player's Options
// This object contains the state of the app
export default {
  isDev: false,
  isShowingStats: true,
  isLoaded: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 1,
  dpr: 1,
  duration: 500,
  dictionary: {
    block: {
      0: {
        id: 0,
        name: 'air'
      },
      1: {
        id: 1,
        name: 'stone',
        break: {
          hand: 7.5
        }
      },
      2: {
        id: 2,
        name: 'grass',
        break: {
          hand: 0.75
        }
      },
      3: {
        id: 3,
        name: 'dirt',
        break: {
          hand: 0.75
        }
      }
    }
  },
  mesh: {
    enableHelper: false,
    wireframe: false,
    translucent: false,
    material: {
      color: 0xffffff,
      emissive: 0xffffff
    }
  },
  fog: {
    color: 0xdcebf4,
    near: 0.0008,
    far: 2500
  },
  camera: {
    fov: 102,
    near: 1,
    far: 2500,
    aspect: 1,
    posX: 0,
    posY: 0,
    posZ: 0,
    sprintFovDelta: 15,
    spectatorFov: 130
  },
  player: {
    height: 50, // px
    inertia: 5.0,
    fricIntertia: 15.0,
    inAirInertia: 16,
    sprintFactor: 1.7,
    spectatorInertia: 2,
    acceleration: {
      forward: 25,
      other_horz: 18,
      vertical: 25,
      jump: 140
    },
    maxSpeed: {
      horizontal: 700,
      vertical: 800
    },
    aabb: {
      // Based on block dimension
      width: 0.5,
      eye2toe: 1.6,
      eye2top: 0.2,
      depth: 0.5
    },
    coordinateDec: 2,
    posX: 0,
    posY: 30,
    posZ: 0,
    horzD: 5,
    vertD: 4,
    reachDst: 7
  },
  controls: {
    autoRotate: true,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 200,
    maxDistance: 600,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  ambientLight: {
    enabled: true,
    color: 0xffffff,
    intensity: 1
  },
  directionalLight: {
    enabled: true,
    color: 0xf0f0f0,
    intensity: 1,
    x: 0,
    y: 1,
    z: 0
  },
  shadow: {
    enabled: true,
    helperEnabled: true,
    bias: 0,
    mapWidth: 2048,
    mapHeight: 2048,
    near: 250,
    far: 400,
    top: 100,
    right: 100,
    bottom: -100,
    left: -100
  },
  pointLight: {
    enabled: true,
    color: 0xffffff,
    intensity: 0.8,
    distance: 0, // default
    x: -100,
    y: 300,
    z: -100
  },
  hemiLight: {
    enabled: true,
    color: 0xeeeeff,
    groundColor: 0x777788,
    intensity: 0.75,
    x: 0.5,
    y: 1,
    z: 0.75
  },
  block: {
    dimension: 16
  },
  chunk: {
    size: 8,
    height: 50
  },
  world: {
    noiseConstant: 25,
    maxWorkerCount: 4,
    gravity: -9,
    worldConfigs: {
      waterLevel: 62,
      biomes: {
        DESERT: {
          chance: 0.2,
          octaves: 9,
          amplitude: 80,
          smoothness: 335,
          heightOffset: -7,
          roughness: 0.56
        },
        GRASSLAND: {
          chance: 0.35,
          octaves: 9,
          amplitude: 85,
          smoothness: 235,
          heightOffset: -20,
          roughness: 0.51
        },
        LIGHTFOREST: {
          chance: 0.25,
          octaves: 5,
          amplitude: 100,
          smoothness: 195,
          heightOffset: -32,
          roughness: 0.52
        },
        OCEAN: {
          chance: 0.2,
          octaves: 7,
          amplitude: 43,
          smoothness: 55,
          heightOffset: 0,
          roughness: 0.5
        }
      }
    }
  },
  keyboard: {
    movements: {
      forward: 87,
      backward: 83,
      left: 65,
      right: 68,
      sneak: 16,
      jump: 32
    },
    inventory: {
      h1: 49,
      h2: 50,
      h3: 51,
      h4: 52,
      h5: 53,
      h6: 54,
      h7: 55,
      h8: 56,
      h9: 57
    },
    multiplayer: {
      openChat: 84,
      openCommand: 191
    },
    dblTimeout: 200 //ms
  },
  background: {
    color: 0xdbe8ff
  }
}
