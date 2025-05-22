/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let res = 0,
    min = prices[0];
  for (let index = 0; index < prices.length; index++) {
    min = Math.min(min, prices[index]);
    res = Math.max(res, prices[index] - min);
  }
  return res;
}
// @lc code=end
