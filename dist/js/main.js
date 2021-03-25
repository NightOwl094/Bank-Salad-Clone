"use strict";
// onload setup
window.onload = function () {
    (function () {
        var $tabButtons = document.querySelectorAll(".tab__button");
        var $tabContents = document.querySelectorAll(".tab__content");
        $tabContents[0].style.display = "block";
        setupTabClickEvents($tabButtons, $tabContents);
    })();
};
// tab settings
function setupTabClickEvents($tabButtons, $tabContents) {
    $tabButtons.forEach(function (element, index) {
        element.addEventListener("click", function () {
            var $target = $tabContents[index];
            displayNoneAll($tabContents);
            displayOne($target);
            releaseSelectedTabState($tabButtons);
            keepSelectedTabState(element);
        });
    });
}
function releaseSelectedTabState($elements) {
    $elements.forEach(function (element) {
        element.classList.remove("active");
    });
}
function keepSelectedTabState($element) {
    $element.classList.add("active");
}
function displayNoneAll($elements) {
    $elements.forEach(function (element) {
        element.style.display = "none";
    });
}
function displayOne($element) {
    $element.style.display = "block";
}
//# sourceMappingURL=main.js.map