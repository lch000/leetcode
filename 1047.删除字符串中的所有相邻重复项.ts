/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const queue = [];
  for (let index = 0; index < s.length; index++) {
    if (queue[queue.length - 1] === s[index]) {
      queue.pop();
    } else {
      queue.push(s[index]);
    }
  }
  return queue.join("");
}
// @lc code=end
