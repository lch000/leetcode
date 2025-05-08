/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const res = [],
    nowPath = [];
  const isCurrectNumber = (s, start, end) => {
    if (end - start > 0) {
      if (s[start] === "0") {
        return false;
      }
    }
    if (end - start > 3) {
      return false;
    }
    const num = Number(s.slice(start, end + 1));

    return num > 255 ? false : num;
  };
  const backTracking = (startIndex) => {
    if (startIndex >= s.length) {
      if (nowPath.length === 4) {
        res.push(nowPath.join("."));
        return;
      }
    }
    if (nowPath.length >= 4) {
      return false;
    }
    for (
      let index = startIndex;
      index < Math.min(startIndex + 3, s.length);
      index++
    ) {
      const num = isCurrectNumber(s, startIndex, index);
      if (num !== false) {
        nowPath.push(num);
        backTracking(index + 1);
        nowPath.pop();
      }
    }
  };
  backTracking(0);
  return res;
}

// @lc code=end
