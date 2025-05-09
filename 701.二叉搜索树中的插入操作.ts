/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
 */

// @lc code=start
/**
 * Definition for a binary root node.
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return new TreeNode(val);
  }

  if (!root.left && !root.right) {
    const treeNode = new TreeNode(val);
    if (root.val >= val) {
      root.left = treeNode;
    } else {
      root.right = treeNode;
    }
    return root;
  }
  if (root.val >= val) {
    root.left = insertIntoBST(root.left, val);
  }
  if (root.val <= val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
// @lc code=end
