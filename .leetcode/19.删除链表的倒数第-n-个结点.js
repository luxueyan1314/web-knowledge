/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head
  let marker = head
  let count = 1
  while (current.next) {
    if (count > n) marker = marker.next
    current = current.next
    count++
  }
  if (count === n) head = head.next
  if (count > n) {
    marker.next = marker.next.next
  }
  return head
};
// @lc code=end

