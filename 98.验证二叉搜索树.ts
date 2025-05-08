/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  let pre = null;
  const compareTree = (tree: TreeNode | null) => {
    if (!tree) {
      return true;
    }
    const left = compareTree(tree.left);
    if (pre && pre.val >= tree.val) {
      return false;
    }
    pre = tree;
    const right = compareTree(tree.right);
    return left && right;
  };
  return compareTree(root);
}
// @lc code=end
