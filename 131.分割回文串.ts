/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
function partition(s: string): string[][] {
  const res = [],
    nowPath = [];
  const isHuiwen = (s, startIndex, endIndex) => {
    let left = startIndex,
      right = endIndex;
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  const splitString = (s, splitIndex) => {
    if (splitIndex >= s.length) {
      res.push(nowPath.slice());
      return;
    }
    for (let index = splitIndex; index < s.length; index++) {
      if (isHuiwen(s, splitIndex, index)) {
        nowPath.push(s.slice(splitIndex, index + 1));
        splitString(s, index + 1);
        nowPath.pop();
      }
    }
  };
  splitString(s, 0);
  return res;
}
// @lc code=end
