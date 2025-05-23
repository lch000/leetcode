/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const res = [];

  let temArr = [root];
  while (temArr.length) {
    const innerArr = [],
      innerArrValue = [];
    for (let index = 0; index < temArr.length; index++) {
      const item = temArr[index];
      innerArrValue.push(item.val);
      item.left && innerArr.push(item.left);
      item.right && innerArr.push(item.right);
    }
    res.push(innerArrValue);
    temArr = innerArr;
  }
  return res;
}
// @lc code=end
