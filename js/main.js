import Glide from "./glide.esm.js";

// setup
new Glide(".glide", {
  autoplay: 5000,
  hoverpause: true,
  animationTimingFunc: "ease",
  animationDuration: 1000,
}).mount();

// onload setup
window.onload = () => {
  const $tabButtons = document.querySelectorAll(".tab__button");
  const $tabContents = document.querySelectorAll(".tab__content");
  setupTabClickEvents($tabButtons, $tabContents);
};

// tab settings
function setupTabClickEvents($tabButtons, $tabContents) {
  $tabButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
      const $target = $tabContents[index];
      displayNoneAll($tabContents);
      displayOne($target);
    });
  });
}

function displayNoneAll($elements = null) {
  $elements.forEach((element) => {
    element.style.display = "none";
  });
}

function displayOne($element) {
  $element.style.display = "block";
}
