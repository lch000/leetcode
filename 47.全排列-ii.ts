/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [],
    nowPath = [],
    usedArray = new Array(nums.length).fill(false);
  const backTracking = () => {
    if (nowPath.length === nums.length) {
      res.push(nowPath.slice());
    }
    for (let index = 0; index < nums.length; index++) {
      if (
        index > 0 &&
        nums[index] === nums[index - 1] &&
        usedArray[index - 1] === false
      ) {
        continue;
      }
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
