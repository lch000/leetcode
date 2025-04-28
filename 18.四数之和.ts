/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  let first = 0,
    second,
    third,
    fourth;
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (; first < nums.length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    for (let second = first + 1; second < nums.length; second++) {
      if (second - first > 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      let third = second + 1,
        fourth = nums.length - 1;
      while (third < fourth) {
        const sum = nums[first] + nums[second] + nums[third] + nums[fourth];
        if (sum < target) {
          third++;
        } else if (sum > target) {
          fourth--;
        } else {
          res.push([nums[first], nums[second], nums[third], nums[fourth]]);
          while (third < fourth && nums[third] === nums[third + 1]) {
            third++;
          }
          while (third < fourth && nums[fourth - 1] === nums[fourth]) {
            fourth--;
          }
          third++;
          fourth--;
        }
      }
    }
  }
  return res;
}
// @lc code=end
