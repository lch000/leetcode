/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp = [];
  for (let index = 0; index < m; index++) {
    if (!dp[index]) {
      dp[index] = [1];
    }
    for (let j = 1; j < n; j++) {
      if (index === 0) {
        dp[index][j] = 1;
      } else {
        dp[index][j] = dp[index - 1][j] + dp[index][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
}
// @lc code=end
