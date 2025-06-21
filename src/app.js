import { quizData, loadQuizProgress } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  loadQuizProgress(); //  Load saved progress from localStorage
  initWelcomePage(); //  Show welcome/start screen
};

window.addEventListener('load', loadApp);
