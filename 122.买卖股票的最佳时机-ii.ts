/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let res = 0,
    cur: number = -1;
  for (let index = 0; index < prices.length; index++) {
    if (index === prices.length - 1) {
      if (cur !== -1) {
        res += prices[prices.length - 1] - cur;
      }
      continue;
    }
    if (cur === -1) {
      if (prices[index] < prices[index + 1]) {
        cur = prices[index];
      }
    } else {
      if (prices[index] > cur) {
        res += prices[index] - cur;
      }
      if (prices[index] < prices[index + 1]) {
        cur = prices[index];
      } else {
        cur = -1;
      }
    }
  }
  return res;
}
// @lc code=end
