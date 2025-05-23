/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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

function invertTree(root: TreeNode | null): TreeNode | null {
  const reverseTree = (tree: TreeNode | null) => {
    if (!tree) {
      return;
    }
    const tem = tree.left;
    tree.left = tree.right;
    tree.right = tem;
    reverseTree(tree.left);
    reverseTree(tree.right);
  };
  reverseTree(root);
  return root;
}
// @lc code=end
