/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return []
  // 1、递归
  // const res = [];
  // preorder(root)
  // function preorder(node){
  //   res.push(node.val)
  //   if(node.children){
  //     node.children.forEach(item=>{
  //       preorder(item)
  //     })
  //   }
  // }
  // return res

  // 2、迭代
  let res = []
  let stack = [root]
  let cur = root
  while(stack.length){
    // 结点出栈，保存结点值
    cur = stack.pop()
    res.push(cur.val)
    if(cur.children){
      // 子结点，从右到左入栈
      for(let i = cur.children.length - 1;  i >= 0; i--){
        stack.push(cur.children[i])
      }
    }
  }
  return res
};
// @lc code=end

