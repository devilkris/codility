// https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

'use strict';

/**
 * Finds the element that occurs an odd number of times in an array.
 *
 * Time : O(N)
 * Space: O(1)
 *
 * @param {!Array<number>} a
 * @return {number} Odd number out.
 */
function solution(a) {
  let x = 0;

  a.forEach(y => {
    x ^= y;
  });

  return x;
}

console.log(solution([1, 3, 2, 4, 1, 2, 2, 4, 2])); // 3
