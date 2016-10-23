// https://codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/

'use strict';

/**
 * Divides an array into blocks while minimizing the largest sum of any block.
 *
 * Time : O(N(log(N+M)))
 * Space: O(1)
 *
 * @param {number} k Maximum number of blocks the array can be divided into.
 * @param {number} m A value greater than every element in the array.
 * @param {!Array<number>} a Array to divide.
 * @return {number} Minimal large sum after the divisions.
 */
function solution(k, m, a) {
  return binarySearchForLargestSum(a, k);
}

/**
 * Computes minimal largest sum as a result of dividing the array into blocks.
 *
 * @param {!Array<number>} a Array to divide.
 * @param {number} maxBlockCount Maximum number of blocks allowed.
 * @return {number} Minimal large sum after the divisions.
 */
function binarySearchForLargestSum(a, maxBlockCount) {
  let lowerBound = max(a);
  let upperBound = sum(a);

  if (maxBlockCount === 1) {
    return upperBound;
  }

  if (maxBlockCount >= a.length) {
    return lowerBound;
  }

  while (lowerBound <= upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);
    if (canDivideBlocksWithLargestSum(a, maxBlockCount, mid)) {
      upperBound = mid - 1;
    } else {
      lowerBound = mid + 1;
    }
  }

  return lowerBound;
}

/**
 * Determines if it's possible to divide the array into blocks such that the
 * given largest sum is attainable.
 *
 * @param {!Array<number>} a
 * @param {number} maxBlockCount
 * @param {number} largestSum
 * @return {boolean} True if so, false otherwise.
 */
function canDivideBlocksWithLargestSum(a, maxBlockCount, largestSum) {
  let blockSum = 0;
  let blockCount = 0;

  for (let i = 0; i < a.length; i++) {
    let n = a[i];
    if (blockSum + n <= largestSum) {
      blockSum += n;
    } else {
      blockSum = n;
      blockCount++;
    }
    if (blockCount >= maxBlockCount) {
      return false;
    }
  }

  return true;
}

/**
 * Computes the max element in an array.
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function max(a) {
  let m = Number.MIN_SAFE_INTEGER;
  a.forEach(n => m = Math.max(m, n));
  return m;
}

/**
 * Computes the sum of elements of an array.
 *
 * @param {!Array<number>} a
 * @return {number}
 */
function sum(a) {
  let s = 0;
  a.forEach(n => s += n);
  return s;
}

console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2])); // 6
