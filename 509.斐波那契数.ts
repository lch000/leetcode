/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  const res = [0, 1];
  for (let index = 2; index <= n; index++) {
    res[index] = res[index - 1] + res[index - 2];
  }
  return res[n];
}
// @lc code=end
