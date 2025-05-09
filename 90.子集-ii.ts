/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [],
    nowPath = [];
  const usedArray = new Array(nums.length).fill(false);
  const backTracking = (startIndex) => {
    res.push(nowPath.slice());
    for (let index = startIndex; index < nums.length; index++) {
      if (
        index > startIndex &&
        nums[index] === nums[index - 1] &&
        usedArray[index - 1] === false
      ) {
        continue;
      }
      nowPath.push(nums[index]);
      usedArray[index] = true;
      backTracking(index + 1);
      usedArray[index] = false;
      nowPath.pop();
    }
  };
  backTracking(0);
  return res;
}
// @lc code=end
