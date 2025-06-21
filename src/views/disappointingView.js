/**
 * Create the Final Result Page additional Element when the score is unsatisfactory
 */
export const createDisappointingElem = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <h2>The good news is that you have a lot of room for improvement</h2>
`;
  return element;
};
