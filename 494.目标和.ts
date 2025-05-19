/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b);
  if (Math.abs(target) > sum || (sum + target) % 2 === 1) {
    return 0;
  }
  const newTarget = (sum + target) / 2;
  const firstLine = new Array(newTarget + 1).fill(0);
  firstLine[nums[0]] = 1;
  const dp = [firstLine];
  let zeroCount = nums[0] === 0 ? 1 : 0;
  firstLine[0] = Math.pow(2, zeroCount);
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === 0) {
      zeroCount++;
    }
    dp[index] = [Math.pow(2, zeroCount)];
  }
  for (let index = 1; index < nums.length; index++) {
    for (let j = 1; j <= newTarget; j++) {
      if (nums[index] > j) {
        dp[index][j] = dp[index - 1][j];
      } else {
        dp[index][j] = dp[index - 1][j] + dp[index - 1][j - nums[index]];
      }
    }
  }
  console.log(dp);
  return dp[nums.length - 1][newTarget];
}
// findTargetSumWays([7, 0, 3, 9, 9, 9, 1, 7, 2, 3], 6);
// @lc code=end
