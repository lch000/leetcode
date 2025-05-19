/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const dp = new Array(target + 1).fill(0);
  for (let index = 0; index < nums.length; index++) {
    for (let j = target; j >= nums[index]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[index]] + nums[index]);
      if (dp[target] === target) {
        return true;
      }
    }
  }
  return false;
}
// const testArray = [1, 5, 11, 5];
// canPartition(testArray);
// @lc code=end
