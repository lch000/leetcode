/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let res = 0,
    cur: number = -1;
  for (let index = 1; index < prices.length; index++) {
    if (prices[index] > prices[index - 1]) {
      res += prices[index] - prices[index - 1];
    }
  }
  return res;
}
// @lc code=end
