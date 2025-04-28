/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const arr = s.split("");
  let flag = 0;
  while (flag < s.length) {
    let mid = flag + k > s.length ? s.length : flag + k;
    let left = flag,
      right = mid - 1;
    while (left < right) {
      const tem = arr[left];
      arr[left] = arr[right];
      arr[right] = tem;
      left++;
      right--;
    }
    flag += 2 * k;
  }
  return arr.join("");
}
// @lc code=end
