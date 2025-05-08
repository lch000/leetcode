/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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
  let res = null;

  const getValue = (tree: TreeNode | null) => {
    if (!tree) {
      return;
    }
    if (p.val < q.val && tree.val >= p.val && tree.val <= q.val) {
      res = tree;
      return tree;
    }
    if (p.val > q.val && tree.val <= p.val && tree.val >= q.val) {
      res = tree;
      return tree;
    }
    getValue(tree.left);
    getValue(tree.right);
  };
  getValue(root);
  return res;
}
// @lc code=end
