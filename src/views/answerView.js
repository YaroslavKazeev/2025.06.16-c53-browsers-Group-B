/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    <button id="${key}" class="answer-button">
      ${key}: ${answerText}
    </button>
  `;
  return element;
};
