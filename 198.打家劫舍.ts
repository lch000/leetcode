/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const dp = [nums[0], nums[1] > nums[0] ? nums[1] : nums[0]];
  for (let index = 2; index < nums.length; index++) {
    dp[index] = Math.max(dp[index - 2] + nums[index], dp[index - 1]);
  }
  return dp[nums.length - 1];
}
// @lc code=end
