// https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/

'use strict';

/**
 * Determines minimal number of jumps from position x to y.
 *
 * Time : O(1)
 * Space: O(1)
 *
 * @param {number} x Start position.
 * @param {number} y Destination position.
 * @param {number} d Jump distance.
 * @return {number} Number of jumps needed to reach y from x.
 */
function solution(x, y, d) {
  return Math.ceil(Math.round(y - x) / d);
}

console.log(solution(10, 85, 30)); // 3
