// onload setup
window.onload = () => {
  (() => {
    const $tabButtons = document.querySelectorAll<HTMLElement>(".tab__button");
    const $tabContents = document.querySelectorAll<HTMLElement>(
      ".tab__content"
    );
    $tabContents[0].style.display = "block";
    setupTabClickEvents($tabButtons, $tabContents);
  })();
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
      releaseSelectedTabState($tabButtons);
      keepSelectedTabState(element);
    });
  });
}

function releaseSelectedTabState($elements: NodeListOf<HTMLElement>) {
  $elements.forEach((element: HTMLElement) => {
    element.classList.remove("active");
  });
}

function keepSelectedTabState($element: HTMLElement) {
  $element.classList.add("active");
}

function displayNoneAll($elements: NodeListOf<HTMLElement>) {
  $elements.forEach((element: HTMLElement) => {
    element.style.display = "none";
  });
}

function displayOne($element: HTMLElement) {
  $element.style.display = "block";
}
