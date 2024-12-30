import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js";

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 6,
  curvePoints: 15,
  curveLerp: 0.8,
  radius1: 0.6,
  radius2: 0.6,
  velocityTreshold: 10,
  sleepRadiusX: 10,
  sleepRadiusY: 10,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
});
