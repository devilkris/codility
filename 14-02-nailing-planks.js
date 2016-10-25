// https://codility.com/programmers/lessons/14-binary_search_algorithm/nailing_planks/

'use strict';

/**
 * @typedef {!Array<number, number>}
 */
let Plank;

/**
 * Counts the minimum number of nails that allow a series of planks to be
 * nailed.
 *
 * Time : O((N+M)*log(M))
 * Space: O(N)
 *
 * @param {!Array<number>} a Plank start positions.
 * @param {!Array<number>} b Plank end positions.
 * @param {!Array<number>} c Nails.
 * @return {number} Minimum number of nails needed or -1 if unable to nail all.
 */
function solution(a, b, c) {
  let min = -1;

  const combined = a.map((a, i) => [a, b[i]]);
  const nails = c;

  let lo = 0;
  let hi = nails.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (canNailPlanks(combined.slice(), nails, mid + 1)) {
      min = mid + 1;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return min;
}

/**
 * Determines if planks can be nailed with a given nail count.
 *
 * @param {!Array<!Plank>} planks
 * @param {!Array<number>} nails
 * @param {number} nailCount
 * @return {boolean} True if so, false otherwise.
 */
function canNailPlanks(planks, nails, nailCount) {
  for (let i = 0; i < nailCount; i++) {
    while (markNailable(planks, nails[i]));
    if (allMarked(planks)) {
      return true;
    }
  }
  return false;
}

/**
 * Marks nailable planks.
 *
 * @param {!Array<!Plank>} planks
 * @param {number} nail Position of nail.
 */
function markNailable(planks, nail) {
  for (let i = 0, l = planks.length; i < l; i++) {
    const plank = planks[i];
    if (plank !== null && plank[0] <= nail && nail <= plank[1]) {
      planks[i] = null;
    }
  }
}

/**
 * Determines if all planks have been marked.
 *
 * @param {!Array<!Plank>} planks
 * @return {boolean} True if so, false otherwise.
 */
function allMarked(planks) {
  for (let i = 0, l = planks.length; i < l; i++) {
    if (planks[i] !== null) {
      return false;
    }
  }
  return true;
}

console.log(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])); // 4
console.log(solution([1], [1], [2])); // -1
console.log(solution([1], [1], [1])); // 1
