/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
  let res = 9999999,
    pre = null;

  const getMin = (tree: TreeNode) => {
    if (!tree) {
      return;
    }
    getMin(tree.left);
    if (pre) {
      const tem = tree.val - pre.val;
      if (tem < res) {
        res = tem;
      }
    }
    pre = tree;
    getMin(tree.right);

    return;
  };
  getMin(root);
  return res;
}
// @lc code=end
