/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const ss = s + s;
  return ss.substring(1, ss.length - 1).includes(s);
}
// @lc code=end

console.log("abcdef".substring(1, 5));
