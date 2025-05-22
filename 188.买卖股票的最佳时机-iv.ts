/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  const dp = new Array(prices.length).fill("1").map((item) => {
    return new Array(k * 2 + 1).fill(0);
  });

  // 五个状态
  // 0 还没有进行操作
  // 1 第一次持有股票
  // 2 第一次不持有股票
  // 3 第二次持有股票
  // 4 第二次不持有股票

  for (let index = 1; index < 2 * k; index += 2) {
    dp[0][index] = -prices[0];
  }

  for (let index = 1; index < prices.length; index++) {
    for (let j = 1; j < 2 * k + 1; j++) {
      if (j % 2 === 0) {
        dp[index][j] = Math.max(
          prices[index] + dp[index - 1][j - 1],
          dp[index - 1][j]
        );
      } else {
        dp[index][j] = Math.max(
          dp[index - 1][j - 1] - prices[index],
          dp[index - 1][j]
        );
      }
    }
    // dp[index][0] = 0;
    // dp[index][1] = Math.max(dp[index - 1][0] - prices[index], dp[index - 1][1]);
    // dp[index][2] = Math.max(prices[index] + dp[index - 1][1], dp[index - 1][2]);
    // dp[index][3] = Math.max(dp[index - 1][2] - prices[index], dp[index - 1][3]);
    // dp[index][4] = Math.max(prices[index] + dp[index - 1][3], dp[index - 1][4]);
  }

  return dp[prices.length - 1][2 * k];
}
// @lc code=end
