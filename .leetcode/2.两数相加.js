/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let heard = null;
  let length = 0;
  while(l1.length || l2.length){
    let sum = (l1[0]||0) + (l2[0]||0)
    if(sum > 10)l1[1] = (l1[1]||0) + Math.floor(sum/10);
    append(sum%10)
    l1 = l1.next
    l2 = l1.next
  }
  // 向链表后面添加元素
  function append(element) {
    var Node = new ListNode(element)
    if(heard==null){
        heard = Node
    }else {
      var curren = heard
      while(curren.next){
        curren = curren.next
      }
      curren.next = Node
      length++
    }
  }

  return heard
};
// @lc code=end

