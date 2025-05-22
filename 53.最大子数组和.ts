/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  let res = dp[0];
  for (let index = 1; index < nums.length; index++) {
    dp[index] = Math.max(nums[index], dp[index - 1] + nums[index]);
    res = Math.max(res, dp[index]);
  }
  return res;
}
// @lc code=end
