// onload setup
window.onload = () => {
  const $tabButtons = document.querySelectorAll<HTMLElement>(".tab__button");
  const $tabContents = document.querySelectorAll<HTMLElement>(".tab__content");
  setupTabClickEvents($tabButtons, $tabContents);
};

// tab settings
function setupTabClickEvents(
  $tabButtons: NodeListOf<HTMLElement>,
  $tabContents: NodeListOf<HTMLElement>
) {
  $tabButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
      const $target = $tabContents[index];
      displayNoneAll($tabContents);
      displayOne($target);
    });
  });
}

function displayNoneAll($elements: NodeListOf<HTMLElement>) {
  $elements.forEach((element) => {
    element.style.display = "none";
  });
}

function displayOne($element: HTMLElement) {
  $element.style.display = "block";
}
