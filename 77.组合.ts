/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = [],
    path = [];
  const backTracking = (n, k, startIndex) => {
    if (path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let index = startIndex; index <= n - (k - path.length) + 1; index++) {
      path.push(index);
      backTracking(n, k, index + 1);
      path.pop();
    }
  };
  backTracking(n, k, 1);
  return res;
}
// @lc code=end
