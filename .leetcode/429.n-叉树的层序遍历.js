/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // 堆栈实现
  /*
  * 1、初始化队列，将根节点入队
  * 2、当队列不为空时，进行循环
  * 3、获取当前队列的长度，这个长度相当于当前这一层的节点个数
  * 4、将这些节点从队列中弹出，并获取值放入数组中
  * 5、如果节点有左右子节点，继续将左右子节点入队
  * 6、将数组放入返回结果中
  */
  if (!root) return [];
  let queue = [root];
  const res = [];
  while (queue.length) {
    let level = []
    let valList = []
    queue.forEach(node=>{
      valList.push(node.val)
      if(node.children){
        level.push(...node.children)
      }
    })
    res.push(valList)
    queue = level
  }
  return res
};
// @lc code=end

