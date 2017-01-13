// https://codility.com/programmers/lessons/4-counting_elements/perm_check/

'use strict';

/**
 * Determines whether an array is a permutation of an arithmetic sequence.
 *
 * Time : O(N)
 * Space: O(N)
 *
 * @param {!Array<number>} a
 * @return {number} 1 if true, 0 otherwise.
 */
function solution(a) {
  const n = a.length;

  const map = {};

  let sum = 0;
  let min = 1e10;
  let max = 0;

  for (let i = 0; i < n; i++) {
    const current = a[i];
    if (map[current]) {
      return 0;
    }
    map[current] = true;

    sum += current;

    if (current > max) {
      max = current;
    }

    if (current < min) {
      min = current;
    }
  }

  return (
    min === 1 &&
    max === n &&
    sum === (n / 2) * (n + 1) // n(n + 1) / 2
  ) ? 1 : 0;
}

console.log(solution([1, 2, 4, 3, 6, 5])); // 1
