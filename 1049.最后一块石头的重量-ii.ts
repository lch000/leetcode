/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((a, b) => a + b);
  const target = sum % 2 === 0 ? sum / 2 : Math.floor(sum / 2) + 1;
  const isOushu = sum % 2 === 0;
  const dp = new Array(target + 1).fill(0);
  let res = target;
  for (let index = 0; index < stones.length; index++) {
    for (let j = target; j >= stones[index]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[index]] + stones[index]);
      res = Math.min(res, target - dp[target]);

      if (res === 0) {
        return isOushu ? 0 : 1;
      }
    }
  }

  return isOushu ? res * 2 : res * 2 - 1;
}
// lastStoneWeightII([31, 26, 33, 21, 40]);
// @lc code=end
