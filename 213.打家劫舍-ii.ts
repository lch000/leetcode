/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const dp1 = [nums[0], nums[0] > nums[1] ? nums[0] : nums[1]];
  for (let index = 2; index < nums.length - 1; index++) {
    dp1[index] = Math.max(dp1[index - 2] + nums[index], dp1[index - 1]);
  }
  const dp2 = [0, nums[1]];
  for (let index = 2; index < nums.length; index++) {
    dp2[index] = Math.max(dp2[index - 2] + nums[index], dp2[index - 1]);
  }

  return Math.max(dp1[nums.length - 2], dp2[nums.length - 1]);
}
// @lc code=end
