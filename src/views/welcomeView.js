import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('welcome-box');

  element.innerHTML = String.raw`
    <h1>Netherlands Quiz: <br>How much do you know? 
      <img src="/flag.png" alt="Dutch flag" class="flag-icon" />
    </h1>
    <hr class="divider">
    <p>
      Dreaming of visiting the Netherlands or already living here?<br>
      Either way, you’ll find this quiz both fun and informative!<br>
      Test your knowledge of Dutch cities, traditions, cuisine, and culture.<br>
      Ready for the challenge? Let’s get started!
    </p>
    <button id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
  `;
  return element;
};
