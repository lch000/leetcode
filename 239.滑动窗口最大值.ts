/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = [];
  const res = [];

  for (let index = 0; index < k; index++) {
    if (queue.length === 0) {
      queue.push(nums[index]);
      continue;
    }
    while (queue[queue.length - 1] < nums[index]) {
      queue.pop();
    }
    queue.push(nums[index]);
  }
  res.push(queue[0]);
  for (let index = k; index < nums.length; index++) {
    if (queue[0] === nums[index - k]) {
      queue.shift();
    }
    while (queue[queue.length - 1] < nums[index]) {
      queue.pop();
    }
    queue.push(nums[index]);
    res.push(queue[0]);
  }
  return res;
}

// @lc code=end
