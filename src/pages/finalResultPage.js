import { USER_INTERFACE_ID } from '../constants.js';
import { createFinalResultElement } from '../views/finalResultView.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';
import { createDisappointingElem } from '../views/disappointingView.js';
import { createHappyCatElem } from '../views/happyCatView.js';
import { initialize } from '../pages/happyCat.js';
const WALKING_CAT_URL =
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2x0a212MXNmNTQxcGQwZms5ZDBhdXhzbjRpa2Z0MzdwY2dka280bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OIkDfT6z8aZP0kYJPy/giphy.gif';

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
  finalResultElement.classList.add('container');
  userInterface.appendChild(finalResultElement);
  if (correctAnswers / totalQuestions > 0.8) {
    const disappointingElem = createDisappointingElem();
    userInterface.appendChild(disappointingElem);
  } else {
    const happyCatElem = createHappyCatElem();
    happyCatElem.id = 'catImage';
    happyCatElem.src = WALKING_CAT_URL;
    userInterface.appendChild(happyCatElem);

    // happyCatWalkDance(happyCatElem);

    happyCatElem.addEventListener('load', () => {
      if (!quizData.catWalkPlayed) {
        initialize(happyCatElem);
      }
    });
  }

  document
    .getElementById('restart-quiz-button')
    .addEventListener('click', () => {
      quizData.currentQuestionIndex = 0;
      quizData.score = 0;
      quizData.questions.forEach((q) => (q.selected = null));
      initWelcomePage();
    });
};
