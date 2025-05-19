/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  const dp = [0, 0, 1];
  for (let index = 3; index <= n; index++) {
    for (let j = 1; j < index; j++) {
      if (!dp[index]) {
        dp[index] = 0;
      }
      dp[index] = Math.max(
        dp[index],
        Math.max(j * (index - j), j * dp[index - j])
      );
    }
  }
  //   console.log(dp);
  return dp[n];
}
// @lc code=end
