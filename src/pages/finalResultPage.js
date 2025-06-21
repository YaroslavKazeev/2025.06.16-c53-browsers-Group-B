import { USER_INTERFACE_ID } from '../constants.js';
import { createFinalResultElement } from '../views/finalResultView.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';
import { clearQuizProgress } from '../data.js';
import { createDisappointingElem } from '../views/disappointingView.js';
import { createHappyCatElem } from '../views/happyCatView.js';
import { initialize } from '../pages/happyCat.js';

export const initFinalResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const totalQuestions = quizData.questions.length;
  const correctAnswers = quizData.questions.filter(
    (q) => q.selected === q.correct
  ).length;

  const finalResultElement = createFinalResultElement(
    correctAnswers,
    totalQuestions
  );
  // finalResultElement.classList.add('container');
  userInterface.appendChild(finalResultElement);
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

  document
    .getElementById('restart-quiz-button')
    .addEventListener('click', () => {
      quizData.currentQuestionIndex = 0;
      quizData.score = 0;
      quizData.catWalkStarted = false;
      quizData.questions.forEach((q) => (q.selected = null));
      clearQuizProgress(); // Clear saved progress
      initWelcomePage();
    });
};
