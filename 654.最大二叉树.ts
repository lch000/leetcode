/*
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }
  const maxNumber = Math.max(...nums);
  const index = nums.findIndex((item) => item === maxNumber);
  const leftNums = index === 0 ? [] : nums.slice(0, index);
  const rightNums = index === nums.length - 1 ? [] : nums.slice(index + 1);
  return new TreeNode(
    maxNumber,
    constructMaximumBinaryTree(leftNums),
    constructMaximumBinaryTree(rightNums)
  );
}
// @lc code=end
