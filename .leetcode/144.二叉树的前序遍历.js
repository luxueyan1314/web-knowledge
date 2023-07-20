/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
/**
 * 前序遍历：根左右
 */
var preorderTraversal = function(root) {
  // 1.递归
  // let res = []
  // preorder(root)
  // function preorder(root) {
  //   if(!root) return
  //   res.push(root.val)
  //   preorder(root.left)
  //   preorder(root.right)
  // }
  // return res
  // 2.迭代
  /**
   * 1.遇到结点就推到结果数组中
   * 2.遇到结点就入栈，然后遍历左子树，左子树遍历完，出栈，遍历右子树
  */
  let res = []
  let stack = []
  let cur = root
  while(cur || stack.length) {
    while(cur){
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return res
};
// @lc code=end

