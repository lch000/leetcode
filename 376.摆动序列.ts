/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */

// @lc code=start
function wiggleMaxLength(nums: number[]): number {
  const queue = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === queue[queue.length - 1]) {
      continue;
    }
    if (queue.length <= 1) {
      queue.push(nums[index]);
      continue;
    }
    if (queue[queue.length - 1] > queue[queue.length - 2]) {
      if (queue[queue.length - 1] < nums[index]) {
        queue.pop();
      }
      queue.push(nums[index]);
    } else if (queue[queue.length - 1] < queue[queue.length - 2]) {
      if (queue[queue.length - 1] > nums[index]) {
        queue.pop();
      }
      queue.push(nums[index]);
    }
  }
  return queue.length;
}
// @lc code=end
