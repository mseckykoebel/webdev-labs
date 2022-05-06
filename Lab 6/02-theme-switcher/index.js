/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultTheme = () => {
  console.log("default");
  document.querySelector("body").className = "default";
};

const desertTheme = () => {
  console.log("desert");
  document.querySelector("body").className = "desert";
};

const oceanTheme = () => {
  console.log("ocean");
  document.querySelector("body").className = "ocean";
};

const highContrastTheme = () => {
  console.log("high contrast");
  document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener("click", defaultTheme);
document.querySelector("#desert").addEventListener("click", desertTheme);
document.querySelector("#ocean").addEventListener("click", oceanTheme);
document
  .querySelector("#high-contrast")
  .addEventListener("click", highContrastTheme);
