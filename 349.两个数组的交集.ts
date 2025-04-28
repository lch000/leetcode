/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const res: number[] = [];
  for (let index = 0; index < nums1.length; index++) {
    map.set(nums1[index], 1);
  }
  for (let index = 0; index < nums2.length; index++) {
    if (map.get(nums2[index]) === 1) {
      res.push(nums2[index]);
      map.delete(nums2[index]);
    }
  }
  return res;
}
// @lc code=end
