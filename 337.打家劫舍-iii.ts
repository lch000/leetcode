/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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

function rob(root: TreeNode | null): number {
  const getMaxvalue = (tree: TreeNode | null) => {
    if (!tree) {
      return [0, 0];
    }
    const left = getMaxvalue(tree.left);
    const right = getMaxvalue(tree.right);
    return [
      Math.max(left[1], left[0]) + Math.max(right[1], right[0]),
      tree.val + left[0] + right[0],
    ];
  };
  return Math.max(...getMaxvalue(root));
}
// @lc code=end
