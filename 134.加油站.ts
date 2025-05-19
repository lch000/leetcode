/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const gasTotal = gas.reduce((a, b) => a + b);
  const costTotal = cost.reduce((a, b) => a + b);
  if (gasTotal < costTotal) {
    return -1;
  }
  let res = 0;
  const temArr = [];
  let sum = 0;
  for (let index = 0; index < gas.length; index++) {
    temArr.push(gas[index] - cost[index]);
  }
  for (let index = 0; index < temArr.length; index++) {
    sum += temArr[index];
    if (sum < 0) {
      res = index + 1;
      sum = 0;
    }
  }
  return res;
}
// @lc code=end
