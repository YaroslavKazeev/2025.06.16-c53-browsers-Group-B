import { USER_INTERFACE_ID } from '../constants.js';
import { createFinalResultElement } from '../views/finalResultView.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';
import { clearQuizProgress } from '../data.js';
import { createDisappointingElem } from '../views/disappointingView.js';
import { createHappyCatElem } from '../views/happyCatView.js';
import { initialize } from '../pages/happyCat.js';

export const initFinalResultPage = () => {
  // Prepare the UI for the final result page
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  userInterface.classList.add('welcome-box');

  const totalQuestions = quizData.questions.length;
  const correctAnswers = quizData.questions.filter(
    (q) => q.selected === q.correct
  ).length;

  // Create and append the final result element
  const finalResultElement = createFinalResultElement(
    correctAnswers,
    totalQuestions
  );
  userInterface.appendChild(finalResultElement);

  // Show disappointing or happy cat element based on score
  if (correctAnswers / totalQuestions <= 0.8) {
    const disappointingElem = createDisappointingElem();
    finalResultElement.appendChild(disappointingElem);
  } else {
    const divCatElem = createHappyCatElem();
    userInterface.appendChild(divCatElem);
    const happyCatImage = divCatElem.children[0];
    happyCatImage.addEventListener('load', () => {
      if (!quizData.catWalkStarted) {
        initialize(divCatElem);
      }
    });
  }

  // Attach event listener for restarting the quiz and reset all relevant data
  document
    .getElementById('restart-quiz-button')
    .addEventListener('click', () => {
      userInterface.classList.remove('welcome-box');
      quizData.currentQuestionIndex = 0;
      quizData.score = 0;
      quizData.catWalkStarted = false;
      quizData.questions.forEach((q) => (q.selected = null));
      clearQuizProgress(); // Clear saved progress
      initWelcomePage();
    });
};
