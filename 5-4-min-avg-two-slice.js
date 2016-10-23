// https://codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

'use strict';

/**
 * Finds the start index of the array slice with the global minimum average.
 *
 * Time : O(N)
 * Space: O(N)
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function solution(a) {
  let n = a.length;
  let s = prefixSumsOf(a);

  let minSlice = {
    start: 0,
    length: 0,
    average: maxOf(s)
  };

  for (let i = 0; i < n - 1; i++) {
    let next2 = averageOf(s, i, i + 1);
    if (next2 < minSlice.average) {
      minSlice.start = i;
      minSlice.length = 2;
      minSlice.average = next2;
    }
    let next3 = averageOf(s, i, i + 2);
    if (next3 < minSlice.average) {
      minSlice.start = i;
      minSlice.length = 3;
      minSlice.average = next3;
    }
  }

  return minSlice.start;
}

/**
 * Calculates the prefix sums of an array of numbers.
 *
 * Time : O(N)
 * Space: O(N)
 *
 * @param {!Array<number>} a
 * @return {!Array<number>}
 */
function prefixSumsOf(a) {
  let n = a.length;
  let s = Array(n);
  for (let i = 0; i < n; i++) {
    s[i] = (s[i-1] || 0) + a[i];
  }
  return s;
}

/**
 * Calculates the average of an array slice.
 *
 * Time : O(1)
 * Space: O(1)
 *
 * @param {!Array<number>} s Prefix sums of array.
 * @param {number} p Slice start index (inclusive).
 * @param {number} q Slice end index (inclusive).
 * @return {number} Slice average.
 */
function averageOf(s, p, q) {
  if (p >= q) {
    throw new Error('Slice must contain at least two elements.');
  }

  let n = s.length;

  if (q > n - 1) {
    q = n - 1;
  }

  let numer = s[q] - (s[p - 1] || 0);
  let denom = q - p + 1;
  return numer / denom;
}

/**
 * Determines the maximum value in an array.
 *
 * Time : O(N)
 * Space: O(1)
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function maxOf(a) {
  let m = Number.MIN_SAFE_INTEGER;

  a.forEach(n => {
    if (n > m) {
      m = n;
    }
  });

  return m;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8])); // starting at 1 of size 2
