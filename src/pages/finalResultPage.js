import { USER_INTERFACE_ID } from '../constants.js';
import { createFinalResultElement } from '../views/finalResultView.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';

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

  document
    .getElementById('restart-quiz-button')
    .addEventListener('click', () => {
      quizData.currentQuestionIndex = 0;
      quizData.score = 0;
      quizData.questions.forEach((q) => (q.selected = null));
      initWelcomePage();
    });
};
