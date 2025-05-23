/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val === key) {
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    let cur = root.right,
      left = root.left;
    while (cur.left) {
      cur = cur.left;
    }
    cur.left = left;
    return root.right;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  return root;
}
// @lc code=end
