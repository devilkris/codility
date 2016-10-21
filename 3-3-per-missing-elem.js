// https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

'use strict';

/**
 * Finds the missing element in a permutation of N integers.
 *
 * Time : O(n)
 * Space: O(1)
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function solution(a) {
  let n = a.length + 1;

  let expectedSum = (n / 2) * (n + 1); // n(n + 1) / 2

  let observedSum = 0;
  a.forEach(d => {
    observedSum += d;
  });

  return expectedSum - observedSum;
}

console.log(solution([2, 3, 1, 5])); // 4
