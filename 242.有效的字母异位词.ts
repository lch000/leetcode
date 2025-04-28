/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const res: number[] = new Array(26).fill(0);
  const flag = "a".charCodeAt(0);
  if (s.length !== t.length) {
    return false;
  }
  for (let index = 0; index < s.length; index++) {
    res[s.charCodeAt(index) - flag]++;
    res[t.charCodeAt(index) - flag]--;
  }

  return res.every((item) => item === 0);
}

// @lc code=end
