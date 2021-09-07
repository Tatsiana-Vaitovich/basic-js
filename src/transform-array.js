import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    let ar = arr.slice();
    console.log(ar);
    for(let i = 0; i < ar.length; i++) {
      if(typeof ar[i] === "string") {
        switch (ar[i]) {
          case "--discard-next": 
            if(ar[i + 1]) {
              ar.splice((i+1), 1);
              ar.splice(i, 1);
            } else {
              ar.splice(i, 1);
            }
            break;
          case "--discard-prev":
            if(ar[i-1]) {
              ar.splice((i-1), 1);
              ar.splice(i-1, 1);
            } else {
              ar.splice(i, 1);
            }
            break;
          case "--double-next":
            if(ar[i+1]) {
              ar[i] = ar[i+1];
            } else {
              ar.splice(i, 1);
            }
            break;
          case "--double-prev":
            if(ar[i-1]) {
              ar[i] = ar[i-1];
            } else {
              ar.splice(i, 1);
            }
        }
      }
    }
    return ar;
  }
}
