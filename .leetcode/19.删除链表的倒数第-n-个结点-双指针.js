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
  if (!head) return null
  let p1 = 0 // 指针1
  let p2 = 0 // 指针2 指向删除元素的前一个元素
  let temp = head
  let prev = head // 指向删除元素的前一个元素
  while (temp) {
    temp = temp.next
    p1++
    if ((p1 - p2) > (n + 1)) {
      p2++
      prev = prev.next
    }
  }
  // 长度为1 或者 n溢出
  if (p1 < n || p1 === 1) return null
  if (p2 === 0 && (p1 - p2) === n && n !== 1) { // 待删除元素位于开头
    head = prev.next
    prev.next = null
  } else { // 待删除元素位于中间/结尾
    let current = prev.next
    prev.next = current.next
    current.next = null
  }
  return head
};
// @lc code=end

