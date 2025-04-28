/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let resArr = [1, 2];

  for (let index = 2; index < n; index++) {
    resArr[index] = resArr[index - 1] + resArr[index - 2];
  }
  return resArr[n - 1];
}
// @lc code=end
