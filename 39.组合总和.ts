/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res = [],
    path = [];
  const backTracking = (sum, startIndex) => {
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    if (sum > target) {
      return;
    }
    for (let index = startIndex; index < candidates.length; index++) {
      path.push(candidates[index]);
      sum += candidates[index];
      backTracking(sum, index);
      path.pop();
      sum -= candidates[index];
    }
  };
  backTracking(0, 0);
  return res;
}
// @lc code=end
