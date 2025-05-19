/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const dp = [0, 0];
  for (let index = 2; index <= cost.length; index++) {
    dp[index] = Math.min(
      dp[index - 2] + cost[index - 2],
      dp[index - 1] + cost[index - 1]
    );
  }
  return dp[cost.length];
}
// @lc code=end
