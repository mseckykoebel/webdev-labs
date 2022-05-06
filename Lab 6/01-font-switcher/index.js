const makeBigger = () => {
  // alert("make bigger!");
  txt = document.querySelector("body");
  style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize + 1 + "px";
};

const makeSmaller = () => {
  // alert("make smaller!");
  txt = document.querySelector("body");
  style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize - 1 + "px";
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);
