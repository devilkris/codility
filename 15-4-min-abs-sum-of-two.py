# https://codility.com/programmers/lessons/15-caterpillar_method/min_abs_sum_of_two/

def solution(a):
  a.sort()

  if a[+0] >= 0: return +2 * a[+0] # All non-negative
  if a[-1] <= 0: return -2 * a[-1] # All non-positive

  lo, hi = len(a) - 1, 0
  minimum = 2 * a[-1]

  while hi <= lo:
    temp = abs(a[hi] + a[lo])

    if temp < minimum:
      minimum = temp

    if minimum == 0:
      return 0

    if abs(a[hi+1] + a[lo]) <= temp:
      hi += 1
    elif abs(a[hi] + a[lo-1]) <= temp:
      lo -= 1
    else:
      hi += 1
      lo -= 1

  return minimum

print solution([-8, 4, 5, -10, 3]) # 3
print solution([4, 8, 12, -4, 2]) # 0
print solution([1, 2, -3]) # 1
print solution([4, 1, 4, 3, 2]) # 2
print solution([-4, -1, -4, -3, -2]) # 2
