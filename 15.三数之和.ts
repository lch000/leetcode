/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const sortNum = nums.sort((a, b) => a - b);
  console.log(sortNum);
  const res: number[][] = [];
  for (let index = 0; index < nums.length; index++) {
    const map = new Map<number, "noUse" | "hasUsed">();
    if (sortNum[index] === sortNum[index - 1]) {
      continue;
    }
    for (let j = index + 1; j < nums.length; j++) {
      if (map.get(-(sortNum[j] + sortNum[index])) === "noUse") {
        res.push([sortNum[index], -(sortNum[j] + sortNum[index]), sortNum[j]]);
        map.set(-(sortNum[j] + sortNum[index]), "hasUsed");
      } else {
        if (!map.get(sortNum[j])) {
          map.set(sortNum[j], "noUse");
        }
      }
    }
  }
  return res;
}
const testArr = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];

// threeSum(testArr);
console.log(threeSum(testArr));
// @lc code=end
