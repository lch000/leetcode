/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  let res = 1,
    cur = 1;
  let right = 1;

  while (right < nums.length) {
    if (nums[right] > nums[right - 1]) {
      res = Math.max(res, ++cur);
    } else {
      cur = 1;
    }
    right++;
  }
  return res;
}
// @lc code=end
