// https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

import java.util.*;

public class Solution {
  /**
   * Finds the earliest time a frog can jump to the other side of a river.
   *
   * Time : O(n)
   * Space: O(x)
   *
   * @param {int} x
   * @param {int[]} a
   * @return {int}
   */
  public int solution(int x, int[] a) {
    Set<Integer> s = new HashSet<>();
    for (int n = 1; n <= x; n++) {
      s.add(n);
    }

    for (int i = 0; i < a.length; i++) {
      int n = a[i];
      if (s.contains(n)) {
        s.remove(n);
        if (s.isEmpty()) {
          return i;
        }
      }
    }

    return -1;
  }
}
