/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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

function findMode(root: TreeNode | null): number[] {
  let res = [],
    maxCount = 1,
    nowCount = 1,
    pre = null;
  const getValue = (tree: TreeNode | null) => {
    if (!tree) {
      return;
    }
    getValue(tree.left);
    if (pre) {
      if (pre.val === tree.val) {
        nowCount++;
      } else {
        nowCount = 1;
      }
      if (nowCount === maxCount) {
        res.push(tree.val);
      }
      if (nowCount > maxCount) {
        maxCount = nowCount;
        res = [tree.val];
      }
    } else {
      res.push(tree.val);
    }
    pre = tree;
    getValue(tree.right);
  };
  getValue(root);
  return res;
}
// @lc code=end
