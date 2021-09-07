import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function contCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  matrix = matrix.map(el => el.filter(item => item === "^^").length)
  return matrix.reduce((summ, current) => summ + current);
}
