/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  let left = 0,
    right = nums.length - 1;
  const res: number[] = [];
  while (left < right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      res.unshift(Math.pow(nums[right], 2));
      right--;
    } else {
      res.unshift(Math.pow(nums[left], 2));
      left++;
    }
  }

  res.unshift(Math.pow(nums[left], 2));

  return res;
}
// @lc code=end
