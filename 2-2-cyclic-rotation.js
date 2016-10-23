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
  let n = a.length;
  let b = Array(n);
  k %= n;
  for (let i = 0; i < n; i++) {
    b[(i + k) % n] = a[i];
  }
  return b;
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
