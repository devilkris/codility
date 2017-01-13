// https://codility.com/programmers/lessons/1-iterations/binary_gap/

'use strict';

/**
 * Finds the length of the largest binary gap (0s) in the given integer.
 *
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  const b = toBinary(n);

  let maxGapLength = 0;
  let gapLength = 0;
  let inGap = false;

  b.forEach((bit) => {
    if (bit === 1) {
      if (gapLength > maxGapLength) {
        maxGapLength = gapLength;
      }
      gapLength = 0;
      inGap = true;
    } else if (inGap) {
      gapLength++;
    }
  });

  return maxGapLength;
}

/**
 * Converts non-nengative number from radix 10 to radix 2.
 *
 * @param {number} n
 * @return {!Array<number>}
 */
function toBinary(n) {
  const a = [];

  while (n > 1) {
    const r = n % 2;
    n >>= 1;
    a.unshift(r);
  }
  a.unshift(n);

  return a;
}
