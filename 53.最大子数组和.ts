/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let right = 0,
    sum = 0,
    res = -999999;
  while (right < nums.length) {
    sum += nums[right];
    if (sum <= 0) {
      right++;
      if (sum >= res) {
        res = sum;
      }
      sum = 0;
    } else if (sum >= res) {
      res = sum;
      right++;
    } else {
      right++;
    }
  }
  return res;
}
// @lc code=end
