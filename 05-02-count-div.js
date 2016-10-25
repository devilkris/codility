// https://codility.com/programmers/lessons/5-prefix_sums/count_div/

'use strict';

/**
 * Computes the number of integers divisible by k in the range [a..b].
 *
 * Time : O(1)
 * Space: O(1)
 *
 * @param {number} a Integer within the range [0..2,000,000,000].
 * @param {number} b Integer within the range [0..2,000,000,000] and a <= b.
 * @param {number} k Integer within the range [1..2,000,000,000].
 * @return {number}
 */
function solution(a, b, k) {
  let f = null; // f: first eligible number >= a
  if (a === 0) {
    f = 0;
  } else if (a < k) {
    f = k;
  } else { // a >= k
    const r = a % k;
    f = a + (r !== 0 ? r : 0);
  }

  if (f > b) {
    return (a === 0 || b === 0) ? 1 : 0;
  }

  return 1 + Math.floor((b - f) / k);
}

console.log(solution(0, 14, 2)); // 8
console.log(solution(0, 0, 11)); // 1
console.log(solution(6, 11, 2)); // 3
console.log(solution(11, 14, 2)); // 2
console.log(solution(101, 123456789, 10e3)); // 12345
