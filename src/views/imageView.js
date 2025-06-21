/**
 * Create an image element for the question
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @returns {Element}
 */
export const createImageElement = (src, questionText = '') => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Hint image for question: ${questionText}`;
  img.classList.add('question-image');
  return img;
};
