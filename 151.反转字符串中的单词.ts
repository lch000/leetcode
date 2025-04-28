/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  const res = s
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .reverse()
    .join(" ");

  return res;
}
// @lc code=end
