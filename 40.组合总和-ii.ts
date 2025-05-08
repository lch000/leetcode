/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res = [],
    path = [];
  candidates.sort((a, b) => a - b);
  const usedArray = new Array(candidates.length).fill(false);
  const backTracking = (sum, startIndex) => {
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    if (sum > target) {
      return;
    }
    for (let index = startIndex; index < candidates.length; index++) {
      if (
        index > 0 &&
        candidates[index] === candidates[index - 1] &&
        usedArray[index - 1] === false
      ) {
        continue;
      }
      path.push(candidates[index]);
      sum += candidates[index];
      usedArray[index] = true;
      backTracking(sum, index + 1);
      path.pop();
      sum -= candidates[index];
      usedArray[index] = false;
    }
  };
  backTracking(0, 0);
  return res;
}

// @lc code=end
