"use strict";
// onload setup
window.onload = function () {
    var $tabButtons = document.querySelectorAll(".tab__button");
    var $tabContents = document.querySelectorAll(".tab__content");
    setupTabClickEvents($tabButtons, $tabContents);
};
// tab settings
function setupTabClickEvents($tabButtons, $tabContents) {
    $tabButtons.forEach(function (element, index) {
        element.addEventListener("click", function () {
            var $target = $tabContents[index];
            displayNoneAll($tabContents);
            displayOne($target);
        });
    });
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