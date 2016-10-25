// https://codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

'use strict';

/**
 * Finds the minimal nucleotide from a range of sequence DNA.
 *
 * Time : O(N+M)
 * Space: O(N)
 *
 * @param {string} S
 * @param {!Array<number>} P
 * @param {!Array<number>} Q
 * @return {!Array<number>}
 */
function solution(S, P, Q) {
  let n = S.length;

  // build prefix sums
  let A = Array(n);
  let C = Array(n);
  let G = Array(n);
  for (let i = 0; i < n; i++) {
    A[i] = A[i-1] || 0;
    C[i] = C[i-1] || 0;
    G[i] = G[i-1] || 0;
    switch (S[i]) {
      case 'A':
        A[i]++;
        break;
      case 'C':
        C[i]++;
        break;
      case 'G':
        G[i]++;
        break;
    }
  }
  let prefixSums = [null, A, C, G];

  // answer queries
  let results = [];
  for (let K = 0; K < P.length; K++) {
    let result = null;

    // check A > C > G
    let lo = P[K];
    let hi = Q[K];
    for (let i = 1; i < 4; i++) {
      let prefixSumsForTide = prefixSums[i];
      if (prefixSumsForTide[hi] - (prefixSumsForTide[lo-1] || 0) > 0) {
        result = i;
        break;
      }
    }

    // must be T
    if (result === null) {
      result = 4;
    }

    results.push(result);
  }

  return results;
}

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])); // [2, 4, 1]
