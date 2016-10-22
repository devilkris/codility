// https://codility.com/programmers/lessons/6-sorting/triangle/

'use strict';

/**
 * Determines whether any valid triangle can be builty from a set of edges.
 *
 * Time : O(n(log(n)))
 * Space: O(n)
 *
 * @param {!Array<number>} a
 * @return {number} 1 if so, 0 otherwise.
 */
function solution(a) {
  a.sort((x, y) => x - y);

  for (let i = 0, n = a.length - 2; i < n; i++) {
    let e1 = a[i+0];
    let e2 = a[i+1];
    let e3 = a[i+2];
    if (e1 + e2 > e3 &&
        e1 + e3 > e2 &&
        e2 + e3 > e1) {
      return 1;
    }
  }

  return 0;
}

console.log(solution([10, 1, 2, 8, 5, 20])); // 1
console.log(solution([10, 1, 50, 5])); // 0
