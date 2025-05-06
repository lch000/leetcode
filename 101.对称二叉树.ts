/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  function recur(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    let isSym1: boolean = recur(node1.left, node2.right);
    let isSym2: boolean = recur(node1.right, node2.left);
    return isSym1 && isSym2;
  }
  if (root === null) return true;
  return recur(root.left, root.right);
}
// @lc code=end
