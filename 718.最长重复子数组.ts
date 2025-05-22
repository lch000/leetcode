/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  const dp = new Array(nums1.length + 1).fill("").map((item) => {
    return new Array(nums2.length + 1).fill(0);
  });
  let res = 0;
  for (let index = 1; index <= nums1.length; index++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[index - 1] === nums2[j - 1]) {
        dp[index][j] = Math.max(dp[index - 1][j - 1] + 1, dp[index][j]);
      }
      res = Math.max(res, dp[index][j]);
    }
  }
  return res;
}

// @lc code=end
