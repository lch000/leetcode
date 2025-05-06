/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const res = [];
  const stack = [root];
  let current = root;
  while (stack.length) {
    current = stack.pop();
    res.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }

  return res;
}
// @lc code=end
