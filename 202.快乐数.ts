/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const set = new Set();
  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = String(n)
      .split("")
      .map((item) => Number(item) * Number(item))
      .reduce((a, b) => {
        return a + b;
      });
  }
  return true;
}
// @lc code=end
