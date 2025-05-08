/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const res = [],
    path = [];
  const getSum = (arr: number[]) => {
    if (arr.length === 0) {
      return 0;
    }
    return arr.reduce((a, b) => a + b);
  };
  const backTracking = (k, n, startIndex) => {
    const nowSum = getSum(path);
    if (nowSum > n) {
      return;
    }
    if (path.length === k) {
      if (nowSum === n) {
        res.push(path.slice());
      }
      return;
    }
    for (let index = startIndex; index <= 9; index++) {
      path.push(index);
      backTracking(k, n, index + 1);
      path.pop();
    }
  };
  backTracking(k, n, 1);
  return res;
}
// @lc code=end
