import { quizData } from '../data.js';

const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const WALKING_CAT_URL =
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2x0a212MXNmNTQxcGQwZms5ZDBhdXhzbjRpa2Z0MzdwY2dka280bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OIkDfT6z8aZP0kYJPy/giphy.gif';

const DANCE_TIME_MS = 1000;
const WALK_TIME_MS = 1000;

let midpoint;
let endX;

export function initialize(img) {
  img.style.position = 'fixed';
  img.style.left = -window.innerWidth / 2;
  midpoint = (window.innerWidth - img.offsetWidth) / 2;
  endX = window.innerWidth + img.offsetWidth;
  startWalkToMid(img);
}

function startWalkToMid(img) {
  // img.src = WALKING_CAT_URL;
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
  quizData.catWalkPlayed = true;
}
