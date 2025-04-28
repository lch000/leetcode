/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const newHead = new ListNode(0, head);
  let fast = head,
    slow = newHead,
    index = 0;

  while (index < n) {
    fast = fast.next;
    index++;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return newHead.next;
}
// @lc code=end
