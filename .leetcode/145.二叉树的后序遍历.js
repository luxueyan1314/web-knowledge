/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * 后序遍历：左右根
*/
var postorderTraversal = function(root) {
  if (!root) return []
  // 堆栈实现
  /**
   * 1. 将根节点入栈, 根节点出栈, 将根节点的值插入到结果数组的头部
   * 2. 将根节点的左子节点入栈, 将根节点的右子节点入栈
   * 3. 将栈顶的节点出栈, 将节点的值插入到结果数组的头部
   * 4. 重复 2, 3 步骤, 直到栈为空
  */
  let res = []
  let stack = [root]
  let cur = root
  while (stack.length) {
    cur = stack.pop()
    res.push(cur.val)
    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }
  return res.reverse()
};
// @lc code=end

