/**
 * Create the Final Result Page additional Element when the score is satisfactory
 */
import { WALKING_CAT_URL } from '../constants.js';

export const createHappyCatElem = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <img src=${WALKING_CAT_URL} alt="Cat picture" />
  `;
  return element;
};
