/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  const newHead = new ListNode(0, head);
  let current = newHead;
  while (current?.next?.next) {
    const before = current.next;
    const after = current.next.next;
    const tem = after.next;
    current.next = after;
    after.next = before;
    before.next = tem;
    current = before;
  }
  return newHead.next;
}
// @lc code=end
