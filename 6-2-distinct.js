// https://codility.com/programmers/lessons/6-sorting/distinct/

'use strict';

/**
 * Computes the number of distinct values in an array.
 *
 * Time : O(N(log(N)))
 * Space: O(N)
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function solution(a) {
  a.sort((x, y) => x - y);

  let count = 0;
  let prev = null;

  a.forEach(curr => {
    if (curr !== prev) {
      count++;
    }
    prev = curr;
  });

  return count;
}

console.log(solution([2, 2, 1, 3, 1, 1])); // 3
