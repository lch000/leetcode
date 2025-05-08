/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
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

function convertBST(root: TreeNode | null): TreeNode | null {
  let pre = 0;
  const changeTree = (tree: TreeNode) => {
    if (!tree) {
      return;
    }
    changeTree(tree.right);
    pre += tree.val;
    tree.val = pre;
    changeTree(tree.left);
  };
  changeTree(root);
  return root;
}
// @lc code=end
