import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_DISPLAY_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinalResultPage } from './finalResultPage.js'; //  Import final result page
import { saveQuizProgress } from '../data.js';

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function selectAnswer(e, answersListElement) {
  const selectedAnswer = e.target;
  const correct = selectedAnswer.parentElement.dataset.correct === 'true';
  quizData.questions[quizData.currentQuestionIndex].selected =
    selectedAnswer.id;
  saveQuizProgress();
  if (correct) {
    quizData.score++;
  }
  setStatusClass(selectedAnswer, correct);

  // Disable all buttons after selection
  Array.from(answersListElement.children).forEach((listItem) => {
    const button = listItem.children[0];
    button.disabled = true;
    // Apply the .correct CSS class to the only button regardless of the user's choice
    if (listItem.dataset.correct === 'true') {
      setStatusClass(button, true);
    }
  });

  const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score: ${quizData.score}/${quizData.questions.length}`;
  }
}

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  // Create a question element, passing the current score
  const questionElement = createQuestionElement(
    currentQuestion,
    quizData.score,
    quizData.currentQuestionIndex + 1,
    quizData.questions.length
  );

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // Setting the attribute correct/incorrect answer to each button(list element)
    if (key === currentQuestion.correct) {
      answerElement.dataset.correct = true;
    } else {
      answerElement.dataset.correct = false;
    }
    answerElement.addEventListener('click', (e) =>
      selectAnswer(e, answersListElement)
    );

    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  saveQuizProgress();

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    initFinalResultPage(); // Show results when finished
  } else {
    initQuestionPage(); // Go to next question
  }
};
