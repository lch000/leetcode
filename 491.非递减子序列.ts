/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 非递减子序列
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  const res = [],
    nowPath = [],
    usedArray = new Array(nums.length).fill(false);
  let lastIndex = undefined;
  const backTracking = (startIndex) => {
    for (let index = startIndex; index < nums.length; index++) {
      if (nowPath.length === 0) {
        let j = index - 1;
        while (j >= 0 && nums[j] !== nums[index]) {
          j--;
        }
        if (j >= 0) {
          continue;
        }
        nowPath.push(nums[index]);
        usedArray[index] = true;
        backTracking(index + 1);
        nowPath.pop();
        usedArray[index] = false;
      } else {
        if (nowPath[nowPath.length - 1] <= nums[index]) {
          let j = index - 1;
          while (nums[j] !== nums[index] && j >= startIndex) {
            j--;
          }
          if (usedArray[j] === true || j < startIndex) {
            nowPath.push(nums[index]);
            usedArray[index] = true;
            if (nowPath.length >= 2) {
              res.push(nowPath.slice());
            }
            backTracking(index + 1);
            nowPath.pop();
            usedArray[index] = false;
          }
        }
      }
    }
  };
  backTracking(0);
  return res;
}
// @lc code=end
