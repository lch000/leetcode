/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  //   if (nums.length === 1) {
  //     return nums[0] >= target ? 1 : 0;
  //   }
  let res = Infinity,
    start = 0,
    end = 0,
    sum = nums[start];
  while (start < nums.length) {
    while (sum < target && end < nums.length) {
      end++;
      sum += nums[end];
    }

    if (sum >= target) {
      if (res > end - start + 1) {
        res = end - start + 1;
      }
    }
    sum -= nums[start];
    start++;
  }
  return res === Infinity ? 0 : res;
}
// @lc code=end
