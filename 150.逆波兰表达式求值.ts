/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const queue = [];
  for (let index = 0; index < tokens.length; index++) {
    let nowToken = tokens[index];

    if (
      nowToken !== "+" &&
      nowToken !== "/" &&
      nowToken !== "*" &&
      nowToken !== "-"
    ) {
      queue.push(Number(nowToken));
    }
    if (nowToken === "+") {
      const sum = queue.pop() + queue.pop();
      queue.push(sum);
    }
    if (nowToken === "*") {
      const result = queue.pop() * queue.pop();
      queue.push(result);
    }
    if (nowToken === "-") {
      const result = queue.pop() - queue.pop();
      queue.push(-result);
    }
    if (nowToken === "/") {
      const right = queue.pop(),
        left = queue.pop();
      const res = left / right;
      queue.push(parseInt(String(res)));
    }
  }
  return queue[0];
}
const test = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

evalRPN(test);

// @lc code=end
