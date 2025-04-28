/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let temArr = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || s[index] === "[" || s[index] === "{") {
      temArr.push(s[index]);
    }
    if (s[index] === ")") {
      if (temArr[temArr.length - 1] === "(") {
        temArr.pop();
      } else {
        return false;
      }
    }
    if (s[index] === "]") {
      if (temArr[temArr.length - 1] === "[") {
        temArr.pop();
      } else {
        return false;
      }
    }
    if (s[index] === "}") {
      if (temArr[temArr.length - 1] === "{") {
        temArr.pop();
      } else {
        return false;
      }
    }
  }
  return temArr.length === 0 ? true : false;
}
// @lc code=end
