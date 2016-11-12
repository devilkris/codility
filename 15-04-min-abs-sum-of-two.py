# https://codility.com/programmers/lessons/15-caterpillar_method/min_abs_sum_of_two/

def solution(a):
  a.sort()

  if a[ 0] >= 0: return  2 * a[ 0] # all 0 or positive
  if a[-1] <= 0: return -2 * a[-1] # all 0 or negative

  lo = 0
  hi = len(a) - 1
  minimum = 2 * a[-1]

  while lo <= hi:
    # check current best answer candidate
    temp = abs(a[lo] + a[hi])
    if temp < minimum:
      minimum = temp

    # best possible answer
    if minimum == 0:
      return 0

    # caterpillar towards better answer
    if abs(a[lo+1] + a[hi]) <= minimum:
      lo += 1
    elif abs(a[lo] + a[hi-1]) <= minimum:
      hi -= 1
    else:
      lo += 1
      hi -= 1

  return minimum

print solution([-8, 4, 5, -10, 3]) # 3
print solution([4, 8, 12, -4, 2]) # 0
print solution([1, 2, -3]) # 1
print solution([4, 1, 4, 3, 2]) # 2
print solution([-4, -1, -4, -3, -2]) # 2
