/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const path = [],
    res = [];
  const backTracking = (startIndex) => {
    if (path.length === digits.length) {
      if (path.length !== 0) {
        res.push(path.join(""));
      }
    }
    for (let index = startIndex; index < digits.length; index++) {
      const length = map[Number(digits[index])].length;
      for (let innerIndex = 0; innerIndex < length; innerIndex++) {
        path.push(map[Number(digits[index])][innerIndex]);
        backTracking(index + 1);
        path.pop();
      }
    }
  };
  backTracking(0);
  return res;
}
// @lc code=end
