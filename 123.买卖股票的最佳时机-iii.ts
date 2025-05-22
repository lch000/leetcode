/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const dp = new Array(prices.length).fill("1").map((item) => {
    return [0, 0, 0, 0, 0];
  });

  // 五个状态
  // 0 还没有进行操作
  // 1 第一次持有股票
  // 2 第一次不持有股票
  // 3 第二次持有股票
  // 4 第二次不持有股票

  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];

  for (let index = 1; index < prices.length; index++) {
    dp[index][0] = 0;
    dp[index][1] = Math.max(dp[index - 1][0] - prices[index], dp[index - 1][1]);
    dp[index][2] = Math.max(prices[index] + dp[index - 1][1], dp[index - 1][2]);
    dp[index][3] = Math.max(dp[index - 1][2] - prices[index], dp[index - 1][3]);
    dp[index][4] = Math.max(prices[index] + dp[index - 1][3], dp[index - 1][4]);
  }

  return dp[prices.length - 1][4];
}
// @lc code=end
