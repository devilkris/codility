// https://codility.com/programmers/lessons/14-binary_search_algorithm/nailing_planks/

'use strict';

/**
 * Counts the minimum number of nails that allow a series of planks to be
 * nailed.
 *
 * Time : O((N+M)*log(M))
 * Space: O(N)
 *
 * @param {!Array<number>} a Plank start positions.
 * @param {!Array<number>} b Plank end positions.
 * @param {!Array<number>} c Nails.
 * @return {number} Minimum number of nails needed or -1 if unable to nail all.
 */
function solution(a, b, c) {
  const p = a
    .map( (l, i) => [l, b[i]])
    .sort((x, y) => x[0] - y[0])  // sort first by plank-start
    .sort((x, y) => x[1] - y[1]); // then by plank-end

  a = p.map((x) => x[0]);
  b = p.map((x) => x[1]);

  const numPlanks = p.length;
  const nailedPlankRange = {
    lo: numPlanks - 1,
    hi: 0
  };

  for (let i = 0, numNails = c.length; i < numNails; i++) {
    const nail = c[i];
    // console.log(`nail: ${nail}`);

    const lo = binarySearch(b, nail, Direction.Left);
    // console.log(`lo  : ${lo}`);
    if (!inBounds(b, lo)) {
      continue;
    }

    const hi = binarySearch(a, nail, Direction.Right);
    // console.log(`hi  : ${hi}`);
    if (!inBounds(a, hi)) {
      continue;
    }

    nailedPlankRange.lo = Math.min(nailedPlankRange.lo, lo);
    nailedPlankRange.hi = Math.max(nailedPlankRange.hi, hi);
    if (nailedPlankRange.lo === 0 &&
        nailedPlankRange.hi === numPlanks - 1) {
      return i + 1;
    }
  }

  return -1;
}

/**
 * Search/slide direction.
 *
 * @enum {number}
 */
const Direction = {
  Left: -1,
  Right: 1
};

/**
 * Searches for a value in an array.
 *
 * @param {!Array<number>} a Array to search.
 * @param {number} x Value to find.
 * @param {!Direction} direction
 *     If .Left:
 *       - If x in a, returns index of leftmost x.
 *       - Otherwise, returns index of smallest value > x.
 *     If .Right:
 *       - If x in a, returns index of rightmost x.
 *       - Otherwise, returns index of greatest value < x.
 */
function binarySearch(a, x, direction) {
  let lo = 0;
  let hi = a.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (x === a[mid]) {
      return slide(a, mid, direction);
    } else if (x > a[mid]) {
      lo = mid + 1;
    } else { //x < a[mid]
      hi = mid;
    }
  }
  if (a[lo] === x) {
    return slide(a, lo, direction);
  }

  // lo === hi
  // x still not found

  let insertionPoint = lo;
  while (a[insertionPoint] < x) {
    insertionPoint++;
  }

  if (direction === Direction.Left) {
    return insertionPoint;
  } else {
    return insertionPoint - 1;
  }
}

/**
 * Determines if an index is within array bounds.
 *
 * @param {!Array<number>} a
 * @param {number} i
 * @return {boolean}
 */
function inBounds(a, i) {
  return 0 <= i && i < a.length;
}

/**
 * Slides an index while the value is unchanged.
 *
 * @param {!Array<number>} a
 * @param {number} i
 * @param {!Direction} d
 * @return {number} Left/right-most index with the value at index i.
 */
function slide(a, i, d) {
  const x = a[i];
  while (inBounds(a, i) && a[i] === x) {
    i += d;
  }
  return i - d;
}

console.log(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])); // 4
console.log(solution([1], [1], [2])); // -1
console.log(solution([1], [1], [1])); // 1
