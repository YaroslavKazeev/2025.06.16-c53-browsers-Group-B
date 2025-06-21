/**
 * Create the Final Result Page additional Element when the score is satisfactory
 */
const WALKING_CAT_URL =
  'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2x0a212MXNmNTQxcGQwZms5ZDBhdXhzbjRpa2Z0MzdwY2dka280bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/OIkDfT6z8aZP0kYJPy/giphy.gif';

export const createHappyCatElem = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <img id="catImage" src=${WALKING_CAT_URL} alt="Cat picture" />
  `;
  return element;
};
