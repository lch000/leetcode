/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);
  let res = 1;
  for (let index = 1; index < nums.length; index++) {
    for (let j = 0; j < index; j++) {
      if (nums[index] > nums[j]) {
        dp[index] = Math.max(dp[index], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[index]);
  }
  return res;
}

// @lc code=end
