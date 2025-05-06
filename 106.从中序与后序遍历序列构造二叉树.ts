/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) {
    return null;
  }
  const nowRoot = postorder.pop();
  const index = inorder.findIndex((item) => item === nowRoot);

  const leftInorder = inorder.slice(0, index),
    rightInordet = inorder.slice(index + 1);
  const leftPostOrder = postorder.slice(0, index),
    rightPostOrdet = postorder.slice(index);
  return new TreeNode(
    nowRoot,
    buildTree(leftInorder, leftPostOrder),
    buildTree(rightInordet, rightPostOrdet)
  );
}
// @lc code=end
