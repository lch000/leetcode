/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res = [],
    nowPath = [];
  const backTracking = (startIndex) => {
    res.push(nowPath.slice());
    for (let index = startIndex; index < nums.length; index++) {
      nowPath.push(nums[index]);
      backTracking(index + 1);
      nowPath.pop();
    }
  };
  backTracking(0);
  return res;
}
// @lc code=end
