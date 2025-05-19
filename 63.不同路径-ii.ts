/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const dp = [];
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  for (let index = 0; index < m; index++) {
    if (!dp[index]) {
      let flag = 0;
      for (let flagIndex = 0; flagIndex <= index; flagIndex++) {
        if (obstacleGrid[flagIndex][0] === 1) {
          flag = 1;
        }
      }
      dp[index] = flag === 0 ? [1] : [0];
    }
    for (let j = 1; j < n; j++) {
      if (index === 0) {
        let flag = 0;
        for (let flagIndex = 0; flagIndex <= j; flagIndex++) {
          if (obstacleGrid[0][flagIndex] === 1) {
            flag = 1;
          }
        }
        dp[index][j] = flag === 0 ? 1 : 0;
      } else {
        if (obstacleGrid[index][j] === 1) {
          dp[index][j] = 0;
        } else {
          dp[index][j] = dp[index - 1][j] + dp[index][j - 1];
        }
      }
    }
  }
  return dp[m - 1][n - 1];
}
// @lc code=end
