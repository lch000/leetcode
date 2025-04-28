/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const newListNode = new ListNode(0, head);
  let current = newListNode;

  while (current) {
    while (current.next?.val === val) {
      current.next = current.next?.next ? current.next?.next : null;
    }
    current = current.next;
  }
  return newListNode.next;
}
// @lc code=end
