// https://codility.com/programmers/lessons/5-prefix_sums/passing_cars/

'use strict';

/**
 * Counts the number of passing cars.
 *
 * Time : O(n)
 * Space: O(1)
 *
 * @param {!Array<number>} a Size is [1..1e5].
 * @return {number} -1 if exceeds 1e9.
 */
function solution(a) {
  a.push(null);

  let p = 0;
  let numEast = 0;
  let numWest = 0;

  for (let i = 0, n = a.length; i < n; i++) {
    switch (a[i]) {

      case Direction.East:
        if (numWest > 0) {
          p += numEast * numWest;
        }
        numEast++;
        numWest = 0;
        break;

      case Direction.West:
        if (numEast > 0) {
          numWest++;
        }
        break;

      // if last heading is East (1), make sure they're counted
      default:
        if (numWest > 0) {
          p += numEast * numWest;
        }
        break;
    }

    if (p > 1e9) {
      return -1;
    }
  }

  return p;
}

/**
 * Car headings.
 *
 * @enum {number}
 */
const Direction = {
  East: 0,
  West: 1
};

console.log(solution([0, 1, 0, 1, 1])); // 5
