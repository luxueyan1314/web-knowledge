/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(!list1) return list2
  if(!list2) return list1
  // 定义两个指针分别指向两个链表p1， p2
  /* 循环链表1,判断两指针指向元素大小，
    1、若p1大于p2，在元素前插入list1；
    2、若p1小于p2，将p1指向下一个
    3、list1循环完毕，将p2以及后元素连到队尾
    4、若p2已到队尾，将不再循环
  */
  let p2 = list2
  let head = new ListNode(null, list1)
  let p1 = head

  while(p1.next && p2){
    if(p1.next.val > p2.val){
      let p2prev = p2
      // 循环链表2 
      while(p2.next&&(p1.next.val > p2.next.val)){
        p2 = p2.next
      }
      let temp1 = p1.next
      let temp2 = p2.next
      p1.next = p2prev
      p2.next = temp1

      p1 = temp1 // p1指针往后挪动
      p2 = temp2 // p2指针往后移动
    } else {
      p1 = p1.next
    }
  }
  if(p2){
    p1.next = p2
  }
  return head.next
};
// @lc code=end

