/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = new Array(text1.length + 1).fill("").map((item) => {
    return new Array(text2.length + 1).fill(0);
  });

  for (let index = 1; index <= text1.length; index++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[index - 1] === text2[j - 1]) {
        dp[index][j] = Math.max(dp[index - 1][j - 1] + 1);
      } else {
        dp[index][j] = Math.max(
          dp[index - 1][j - 1],
          dp[index - 1][j],
          dp[index][j - 1]
        );
      }
    }
  }
  return dp[text1.length][text2.length];
}
// @lc code=end
