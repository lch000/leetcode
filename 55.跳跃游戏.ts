/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let pos = 0;
  while (pos < nums.length - 1) {
    if (nums[pos] === 0) {
      return false;
    }
    const stap = nums[pos];

    let nowRes = stap + pos,
      curIndex = pos;
    for (let index = pos + 1; index < pos + nums[pos]; index++) {
      if (index + nums[index] > nowRes) {
        nowRes = index + nums[index];
        curIndex = index;
      }
    }
    console.log(pos, "pos", nowRes);
    if (nowRes >= nums.length - 1) {
      return true;
    }
    if (pos !== curIndex) {
      pos = curIndex;
    } else {
      pos = nowRes;
    }
  }
  return true;
}
canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]);
// @lc code=end
