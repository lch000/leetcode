/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  const dp = new Array(prices.length).fill("1").map((item) => {
    return [0, 0];
  });
  // 0 当天持有
  // 1 当天不持有

  dp[0][0] = -prices[0] - fee;
  dp[0][1] = 0;

  for (let index = 1; index < prices.length; index++) {
    dp[index][0] = Math.max(
      dp[index - 1][0],
      dp[index - 1][1] - prices[index] - fee
    );
    dp[index][1] = Math.max(dp[index - 1][1], dp[index - 1][0] + prices[index]);
  }
  return dp[prices.length - 1][1];
}

// @lc code=end
