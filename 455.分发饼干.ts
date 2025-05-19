/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0,
    sIndex = 0;
  for (let gIndex = 0; gIndex < g.length; gIndex++) {
    while (sIndex < s.length && s[sIndex] < g[gIndex]) {
      sIndex++;
    }
    if (sIndex < s.length && s[sIndex] >= g[gIndex]) {
      res++;
      sIndex++;
    }
  }
  return res;
}
// @lc code=end
