import "./index.scss";
import "particles.js";
import json from "./particlesjs-config.json";

const onloadFunc = () => {
  const button = document.querySelector("#drawerButton");
  const main = document.querySelector("main");
  const layer = document.querySelector("#drawerLayer");

  const hide = () => {
    document.querySelector("main").classList.remove("drawer--open");
  };

  const show = () => {
    document.querySelector("main").classList.add("drawer--open");
  };

  const drawer = event => {
    event.preventDefault();

    if (main.classList.contains("drawer--open")) {
      hide();
    } else {
      show();
    }
  };

  button.addEventListener("touchend", drawer);
  button.addEventListener("click", drawer);
  layer.addEventListener("touchend", drawer);
  layer.addEventListener("click", drawer);
};

window.onload = () => {
  window.particlesJS("particles-js", json, function() {
    console.log("callback - particles.js config loaded");
  });
  onloadFunc();
};
