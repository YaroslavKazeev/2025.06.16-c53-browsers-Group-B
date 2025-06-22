import { quizData } from '../data.js';
import { WALKING_CAT_URL } from '../constants.js';
import { DANCING_CAT_URL } from '../constants.js';

const DANCE_TIME_MS = 1000;
const WALK_TIME_MS = 1000;

let midpoint;
let endX;

export function initialize(divCatElem) {
  quizData.catWalkStarted = true;
  const img = divCatElem.children[0];
  divCatElem.style.position = 'static';
  midpoint = (window.innerWidth - 2 * img.offsetWidth) / 2;
  endX = window.innerWidth + img.offsetWidth;
  startWalkToMid(img);
}

function startWalkToMid(img) {
  const walkMid = img.animate(
    [
      { transform: `translateX(${-img.offsetWidth}px)` },
      { transform: `translateX(${midpoint}px)` },
    ],
    { duration: WALK_TIME_MS, fill: 'forwards' }
  );

  walkMid.onfinish = () => triggerDance(img);
}

function triggerDance(img) {
  img.src = DANCING_CAT_URL;
  setTimeout(() => startWalkToEnd(img), DANCE_TIME_MS);
}

function startWalkToEnd(img) {
  img.src = WALKING_CAT_URL;
  const walkEnd = img.animate(
    [
      { transform: `translateX(${midpoint}px)` },
      { transform: `translateX(${endX}px)` },
    ],
    { duration: WALK_TIME_MS, fill: 'forwards' }
  );
}
