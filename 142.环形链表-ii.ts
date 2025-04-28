/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head,
    start = head;

  while (fast?.next) {
    fast = fast?.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }

  if (fast?.next) {
    while (fast !== start) {
      fast = fast.next;
      start = start.next;
    }
    return start;
  } else {
    return null;
  }
}

// @lc code=end
