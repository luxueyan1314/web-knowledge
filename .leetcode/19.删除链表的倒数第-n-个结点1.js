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
  if (!head) return null;
  let len = getLength(head)
  if (n < len) {
    let prev = head
    for (let i = 0; i < len - n - 1; i++) {
      prev = prev.next
    }
    let current = prev.next
    prev.next = current.next
    current.next = null
    return head
  } else if (n === len) {
    let current = head
    head = current.next
    current.next = null
    return head
  } else {
    return null
  }
};
var getLength = function (head) {
  let len = 0
  while (head != null) {
    head = head.next
    len++
  }
  return len
}
// @lc code=end

