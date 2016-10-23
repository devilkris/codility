// https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

'use strict';

/**
 * Minimizes the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
 *
 * Time : O(N)
 * Space: O(1)
 *
 * @param {!Array<number>} a
 * @return {number} Index that minimizes the absolute difference of partitions.
 */
function solution(a) {
  let n = a.length;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return Math.abs(a[0]);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];
  }

  let min = Number.MAX_SAFE_INTEGER;
  let sumL = 0;
  let sumR = 0;
  for (let i = 0; i < n - 1; i++) {
    sumL += a[i];
    sumR = sum - sumL;
    let tmpMin = Math.abs(sumL - sumR);
    if (tmpMin < min) {
      min = tmpMin;
    }
  }

  return min;
}

console.log(solution([3, 2, 1, 4, 3])); // 1
