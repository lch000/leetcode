/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const dp = new Array(prices.length).fill(1).map((item) => [0, 0, 0, 0]);
  // 每天的五个状态
  // 0 当天买入股票
  // 1 当天继续持有股票
  // 2 当天卖出股票
  // 3 当天未卖出股票(但不持有)

  dp[0][0] = -prices[0];
  dp[0][1] = -Infinity;

  for (let index = 1; index < prices.length; index++) {
    dp[index][0] = dp[index - 1][3] - prices[index];
    dp[index][1] = Math.max(dp[index - 1][1], dp[index - 1][0]);
    dp[index][2] = Math.max(
      dp[index - 1][0] + prices[index],
      dp[index - 1][1] + prices[index]
    );
    dp[index][3] = Math.max(dp[index - 1][2], dp[index - 1][3]);
  }
  //   console.log(dp);
  return Math.max(...dp[prices.length - 1]);
}
// @lc code=end
