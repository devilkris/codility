// https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/

'use strict';

/**
 * Rotates an array.
 *
 * Time : O(N)
 * Space: O(N)
 *
 * @param {!Array<number>} a Array to rotate.
 * @param {number} k Distance to rotate by.
 * @return {!Array<number>} Rotated array.
 */
function solution(a, k) {
  const n = a.length;
  const b = Array(n);

  const K = k % n;
  for (let i = 0; i < n; i++) {
    b[(i + K) % n] = a[i];
  }

  return b;
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
