/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let res = 0;
  while (queue.length) {
    res++;
    const length = queue.length;
    for (let index = 0; index < length; index++) {
      const item = queue.shift();
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
      if (!item.left && !item.right) {
        return res;
      }
    }
  }
  return res;
}
// @lc code=end
