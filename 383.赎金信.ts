/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) {
    return false;
  }

  const map = new Map<string, number>();
  for (let index = 0; index < ransomNote.length; index++) {
    const value = map.get(ransomNote[index]);
    if (value) {
      map.set(ransomNote[index], value + 1);
    } else {
      map.set(ransomNote[index], 1);
    }
  }
  for (let index = 0; index < magazine.length; index++) {
    const value = map.get(magazine[index]);
    if (value) {
      map.set(magazine[index], value - 1);
    }
  }

  const resArray = [...map.values()];

  const r = resArray.find((item) => item > 0);

  return r ? false : true;
}
// @lc code=end
