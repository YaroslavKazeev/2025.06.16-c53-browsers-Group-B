import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_DISPLAY_ID } from '../constants.js';
import { createImageElement } from './imageView.js';

/**
 * Create a full question element including score and question number
 * @param {object} question - question object with 'text' and optional 'image'
 * @param {number} score - Current score
 * @param {number} totalQuestions - Total number of questions in the quiz
 * @param {number} questionNumber - The current question number (e.g. 1, 2, 3...)
 * @returns {Element}
 */
export const createQuestionElement = (
  question,
  score,
  questionNumber,
  totalQuestions
) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('question-wrapper'); //this id for styling
  // const element = document.createElement('div');

  // Create the left column with the image
  const leftCol = document.createElement('div');
  leftCol.classList.add('question-left');
  const image = createImageElement(question.image || '', question.text);
  leftCol.appendChild(image);

  // Create the right column with the question, answers, score, and next button
  const rightCol = document.createElement('div');
  rightCol.classList.add('question-right');

  // Add the question number,text, answers list, score, and next button to the right column
  rightCol.innerHTML = String.raw`
    <h2 class="question-title">${questionNumber}. ${question.text}</h2>
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div class="bottom-wrapper">
      <div id="${SCORE_DISPLAY_ID}" class="score-element">Score: ${score}/${totalQuestions}</div>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        <div class="button-content">
          Next
          <svg class="arrow-svg" width="44" height="22" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.8599 11.884C43.403 11.3409 43.403 10.4604 42.8599 9.91728L34.0097 1.06706C33.4666 0.523962 32.5861 0.523962 32.043 1.06706C31.4999 1.61015 31.4999 2.49068 32.043 3.03377L39.9099 10.9006L32.043 18.7675C31.4999 19.3106 31.4999 20.1911 32.043 20.7342C32.5861 21.2773 33.4666 21.2773 34.0097 20.7342L42.8599 11.884ZM0.15625 10.9006V12.2913H41.8766V10.9006V9.50996H0.15625V10.9006Z" fill="white"/>
          </svg>
        </div>
      </button>
    </div>
  `;

  // Assemble the full question element
  wrapper.appendChild(leftCol);
  wrapper.appendChild(rightCol);

  return wrapper;
};
