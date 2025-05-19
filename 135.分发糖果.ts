/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

// @lc code=start
function candy(ratings: number[]): number {
  const candies: number[] = [];
  candies[0] = 1;
  // 保证右边高分孩子一定比左边低分孩子发更多的糖果
  for (let i = 1, length = ratings.length; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    } else {
      candies[i] = 1;
    }
  }
  // 保证左边高分孩子一定比右边低分孩子发更多的糖果
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      //   candies[i] = candies[i + 1] + 1;
    }
  }
  return candies.reduce((pre, cur) => pre + cur);
}
// @lc code=end
