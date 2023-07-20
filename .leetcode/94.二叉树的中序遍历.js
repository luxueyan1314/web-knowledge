/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // 1.递归
  // let res = []
  // inorder(root)
  // function inorder(root) {
  //   if(!root) return
  //   inorder(root.left)
  //   res.push(root.val)
  //   inorder(root.right)
  // }
  // return res
  // 2.迭代
  /*
    * 1.遇到结点，就把它压入栈中，并继续遍历左子树
    * 2.当左子树遍历完，从栈顶取出结点并访问它
    * 3.遍历右结点，再将右结点当做根结点，重复1、2步骤
  */
  let res = []
  let stack = []
  let cur = root
  // 初次stack为空，cur为根结点，此处判断条件为cur
  while(cur || stack.length) {
    // 判断结点有左子树，将其压入栈中
    while(cur){
      stack.push(cur)
      cur = cur.left
    }
    console.log(stack)
    // 当左子树遍历完，从栈顶取出结点并访问它
    cur = stack.pop()
    res.push(cur.val)
    // 遍历右结点，再将右结点当做根结点，重复1、2步骤
    cur = cur.right
  }
  return res
};
// @lc code=end

