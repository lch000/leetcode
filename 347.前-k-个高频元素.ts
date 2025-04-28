/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const count = map.get(nums[index]);
    if (!count) {
      map.set(nums[index], 1);
    } else {
      map.set(nums[index], count + 1);
    }
  }

  const arr = [...map.entries()];

  arr.sort((a, b) => b[1] - a[1]);

  const res = arr.slice(0, k).map((item) => item[0]);
  return res;
}
// @lc code=end
