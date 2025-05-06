/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const res = [],
    nowPath = [];
  const getRes = (tree: TreeNode) => {
    if (tree) {
      nowPath.push(tree.val);
    }
    if (tree.left) {
      getRes(tree.left);
    }
    if (tree.right) {
      getRes(tree.right);
    }
    if (!tree.left && !tree.right) {
      const temPath = nowPath.slice().join("->");
      res.push(temPath);
    }
    nowPath.pop();
  };
  if (!root) {
    return [];
  }
  getRes(root);
  return res;
}
// @lc code=end
