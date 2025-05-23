/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const treeBack = (
    tree: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ) => {
    if (!tree || tree === p || tree === q) {
      return tree;
    }

    const left = treeBack(tree.left, p, q);
    const right = treeBack(tree.right, p, q);

    if (left && right) {
      return tree;
    }
    if (!left) {
      return right;
    }
    return left;
  };
  return treeBack(root, p, q);
}
// @lc code=end
