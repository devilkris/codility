// https://codility.com/programmers/lessons/4-counting_elements/max_counters/

'use strict';

/**
 * Calculate the values of counters after applying all alternating operations:
 * increase counter by 1; set value of all counters to current maximum.
 *
 * Time : O(n+m)
 * Space: O(n)
 *
 * @param {number} n Number of counters.
 * @param {!Array<number>} a Operations.
 * @return {!Array<number>} Counters.
 */
function solution(n, a) {
  let c = Array(n);
  for (let i = 0; i < n; i++) {
    c[i] = 0;
  }

  let currMax = 0;
  let prevMax = 0;
  for (let i = 0, l = a.length; i < l; i++) {
    let x = a[i];
    if (x === n + 1) {
      prevMax = currMax;
    } else { // assumes 1 < x < n
      c[x-1] = Math.max(c[x-1], prevMax);
      c[x-1]++;
      currMax = Math.max(c[x-1], currMax);
    }
  }

  for (let i = 0; i < n; i++) {
    c[i] = Math.max(c[i], prevMax);
  }

  return c;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // [3, 2, 2, 4, 2]
console.log(solution(4, [2, 5, 5, 5, 5])); // [1, 1, 1, 1]
