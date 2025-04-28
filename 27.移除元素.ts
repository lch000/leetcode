/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let index = nums.length - 1; index >= 0; index--) {
    if (nums[index] === val) {
      let tem = nums[nums.length - 1 - count];

      nums[index] = tem;

      nums[nums.length - 1 - count] = val;
      count++;
    }
  }
  return nums.length - count;
}
// @lc code=end
