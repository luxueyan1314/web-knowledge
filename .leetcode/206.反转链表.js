/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
/**
 * 定义两个指针 new old
 * new 指向未更新结点
 * old指向最新更新结点
 * 反转new和old的next
*/
let newNode = null
let oldNode = head
let temp = null
while(oldNode){
  temp = oldNode.next
  oldNode.next = newNode
  newNode = oldNode
  oldNode = temp
}
  return newNode
};
// @lc code=end

