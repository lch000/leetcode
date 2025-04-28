/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  const getNext = (str: string): number[] => {
    let preFlag = 0;
    const next = [0];
    for (let index = 1; index < str.length; index++) {
      while (preFlag > 0 && str[index] !== str[preFlag]) {
        preFlag = next[preFlag - 1];
      }
      if (str[index] === str[preFlag]) {
        preFlag++;
      }
      next[index] = preFlag;
    }
    return next;
  };
  if (haystack.length < needle.length) {
    return -1;
  }
  const next = getNext(needle);
  let needleFlag = 0;
  for (let index = 0; index < haystack.length; index++) {
    while (haystack[index] !== needle[needleFlag] && needleFlag > 0) {
      needleFlag = next[needleFlag - 1];
    }
    if (haystack[index] === needle[needleFlag]) {
      if (needleFlag === needle.length - 1) {
        return index - needleFlag;
      }
      needleFlag++;
    }
  }
  return -1;
}

// console.log(strStr("adcadcaddcadde", "adcadde"));
// @lc code=end
