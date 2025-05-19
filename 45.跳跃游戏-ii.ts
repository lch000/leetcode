/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  let pos = 0,
    res = 0;
  while (pos < nums.length - 1) {
    const stap = nums[pos];
    let nowRes = stap + pos,
      curIndex = pos;
    if (nowRes >= nums.length - 1) {
      res++;
      return res;
    }
    for (let index = pos + 1; index <= pos + nums[pos]; index++) {
      if (index + nums[index] > nowRes) {
        nowRes = index + nums[index];
        curIndex = index;
      }
    }
    if (pos !== curIndex) {
      pos = curIndex;
    } else {
      pos = nowRes;
    }
    res++;
  }
  return res;
}

// console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
// @lc code=end
