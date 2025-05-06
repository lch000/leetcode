/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  const getDepth = (tree: TreeNode | null) => {
    if (!tree) {
      return 0;
    }
    const leftDepth = getDepth(tree.left);
    if (leftDepth === -1) return -1;
    const rightDepth = getDepth(tree.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return Math.max(leftDepth, rightDepth) + 1;
    }
  };

  return getDepth(root) !== -1;
}
// @lc code=end
