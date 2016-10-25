// https://codility.com/programmers/lessons/6-sorting/max_product_of_three/

'use strict';

/**
 * Determines the maximum product of any three elements in an array.
 *
 * Time : O(N(log(N)))
 * Space: O(1)
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function solution(a) {
  a.sort((x, y) => x - y);

  const n = a.length;
  const max = a[n-1];
  const lo2 = a[0+0] * a[0+1];
  const hi2 = a[n-2] * a[n-3];
  const cmp = max > 0 ? Math.max : Math.min;
  return max * cmp(lo2, hi2);
}

console.log(solution([-3, 1, 2, -2, 5, 6])); // 60
console.log(solution([-5, -6, -4, -7, -10])); // -120
