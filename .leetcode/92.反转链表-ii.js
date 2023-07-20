/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * 
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if(!head || !head.next || left === right) return head;
/**
 * 1、建立两个指针： current指向更新到的结点、newIndex 指向更新的下个结点
 * 2、newIndex的next指向current, 置空current.next
 * 3、current指向新更新的newIndex结点，newIndex指向原始未更新前的newIndex的next
 * 4、循环2、3两步
*/
let preNode = head;
let nextNode = preNode.next;
let preLeft = null //left结点的前一个结点
let leftNode = null
let count = 1;
while(count < right){
  if(count === left-1){
    preLeft = preNode
  }
  if(count === left){
    leftNode = preNode
  }
  let temp = nextNode.next
  if(count >= left){
    nextNode.next = preNode 
  }
  preNode = nextNode
  nextNode = temp // 更新结点
  count++
}

// 修改反转段链表前后指针指向
leftNode.next = nextNode ? nextNode : null // 第left个结点指向rigth.next
if(preLeft){
  preLeft.next = preNode // 前left的最后一个结点指向第right个结点
} else {
  head = preNode
}

return head
};

// @lc code=end

