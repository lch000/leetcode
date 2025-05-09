/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const res = [],
    nowPath = [],
    usedArray = new Array(nums.length).fill(false);
  const backTracking = () => {
    if (nowPath.length === nums.length) {
      res.push(nowPath.slice());
    }
    for (let index = 0; index < nums.length; index++) {
      if (usedArray[index] === true) {
        continue;
      }
      nowPath.push(nums[index]);
      usedArray[index] = true;
      backTracking();
      nowPath.pop();
      usedArray[index] = false;
    }
  };
  backTracking();
  return res;
}
// @lc code=end
