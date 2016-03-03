/*
 * Utilities
 */

/**
 * Find closest matching parent element.
 *
 * @param {Node} element
 * @param {String|HTMLElement} selector - Can be selector string or HTMLElement.
 * @returns {HTMLElement}
 */
var closestMatching = function (element, selector) {
  if (typeof selector === 'string') {
    while (element.parentElement) {
      if (element.matches(selector)) {
        return element;
      }
      element = element.parentElement;
    }
  } else {
    while (element.parentElement) {
      if (element === selector) {
        return element;
      }
      element = element.parentElement;
    }
  }

  return null;
};

/*
 * Hillotolppa
 */

window.hillotolppaInstance = null;

function Hillotolppa(character) {
  "use strict";

  this.character = character;
  console.log(this.character);
}

Hillotolppa.prototype.initialize = function(){
  "use strict";

  /** @type {HTMLElement} */
  var characterSelectionElement;

  characterSelectionElement = document.getElementById('character-selection');

  // Hide character selection
  characterSelectionElement.classList.add('is-complete');
  setTimeout(function () {
    characterSelectionElement.parentNode.removeChild(characterSelectionElement);
  }, 100);
};

/*
 * Init
 */

document.getElementById('character-selection').addEventListener('click', function (event) {
  "use strict";

  /** @type {HTMLElement} */
  var characterElement;
  /** @type {String} */
  var character;

  characterElement = closestMatching(event.target, '.character');

  if (characterElement) {
    character = characterElement.getAttribute('data-character');

    if (character) {
      window.hillotolppaInstance = new Hillotolppa(character);
      window.hillotolppaInstance.initialize();
    }
  }
});
