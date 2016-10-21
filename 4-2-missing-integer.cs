// https://codility.com/programmers/lessons/4-counting_elements/missing_integer/

using System;
using System.Collections;

class Solution {
  /**
   * Finds the minimal positive integer missing from a sequence.
   *
   * Time : O(n)
   * Space: O(n)
   *
   * @param {int[]} a
   * @return {int}
   */
  public int solution(int[] a) {
    int max = Solution.maxOf(a);
    if (max <= 0) {
      return 1;
    }

    BitArray numbers = new BitArray(max);
    foreach (int n in a) {
      if (n > 0) {
        numbers.Set(n - 1, true);
      }
    }

    int minimal = numbers.Length;
    for (int n = 0; n < numbers.Length; n++) {
      if (!numbers.Get(n)) {
        minimal = n;
        break;
      }
    }

    return minimal + 1;
  }

  /**
   * Determines the maximum of a sequence.
   *
   * @param {int[]} a
   * @return {int}
   */
  public static int maxOf(int[] a) {
    int max = 0;

    foreach (int i in a) {
      if (i > max) {
        max = i;
      }
    }

    return max;
  }
}
