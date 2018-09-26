import "./index.scss";
import "particles.js";
import json from "./particlesjs-config.json";

window.onload = () => {
  window.particlesJS("particles-js", json, function() {
    console.log("callback - particles.js config loaded");
  });
};
