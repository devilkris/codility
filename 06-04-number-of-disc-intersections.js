// https://codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

'use strict';

/**
 * Disc range.
 *
 * @typedef {!Object<string, number>}
 */
let DiscRange;

/**
 * Computes the number of intersections in a sequence of discs.
 *
 * Time : O(N(log(N)))
 * Space: O(N)
 *
 * @param {!Array<number>} a Non-negative integers specifying disc radiuses.
 * @return {number} -1 if greater than 10e6.
 */
function solution(a) {
  let d = toDiscRanges(a);
  d.sort((d1, d2) => d1.l - d2.l);

  let count = 0;
  for (let i = 0, n = d.length; i < n - 1; i++) {
    count += intersectionCount(d, i);
    if (count > 10e6) {
      return -1;
    }
  }

  return count;
}

/**
 * Transforms a sequence of discs into l/r pairs representing each disc's range.
 *
 * @param {!Array<number>} a
 * @return {!Array<!DiscRange>}
 */
function toDiscRanges(a) {
  return a.map((r, i) => {
    return {
      l: i - r, // leftmost point
      r: i + r  // rightmost point
    };
  });
}

/**
 * Counts the number of discs that intersect with the one positioned at index i.
 * Because the discs are sorted by leftmost point, only the discs in the range
 * [i+1..n-1] are considered.
 *
 * @param {!Array<!DiscRange>} d Discs.
 * @param {number} i Index equal to at most n-1.
 * @return {number}
 */
function intersectionCount(d, i) {
  const rangeBeg = i + 1;
  if (d[rangeBeg].l > d[i].r) {
    return 0;
  }

  const searchX = d[i].r;
  const searchLo = i + 1;
  const searchHi = d.length - 1;
  const rangeEnd = binarySearch(d, searchX, searchLo, searchHi);
  if (rangeEnd === null) {
    return 0;
  }

  return rangeEnd - rangeBeg;
}

/**
 * Searches for a start value x in a in the range [lo..hi] (inclusive).
 *
 * @param {!Array<!DiscRange>} d
 * @param {number} x
 * @param {number} lo
 * @param {number} hi
 * @return {number} Insertion point.
 */
function binarySearch(d, x, lo, hi) {
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    const l = d[mid].l;
    if (l === x) {
      while (++mid <= hi && d[mid].l === x);
      return mid;
    } else if (x > l) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return x < d[lo].l ? lo : lo + 1;
}

console.log(solution([1, 5, 2, 1, 4, 0], 6)); // 11
console.log(solution([1, 0, 1, 0, 1])); // 6
