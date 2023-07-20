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
var removeNthFromEnd = function(head, n) {
    if(!head) return null
    let stack = [] //栈存入元素
    let temp = head
    while(temp){
      stack.push(temp)
      temp = temp.next
    }
    if(n > stack.length) return null
    let removed = stack[stack.length-n] 
    let current = stack[stack.length-n-1]
    if(current){ // 待删除元素位于中间/尾部
      current.next = removed.next
      removed.next = null
    } else { // 待删除元素位于head
      head = removed.next
      removed.next = null
    }
    return head

};
// @lc code=end

