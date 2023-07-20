/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
/*
  * 后续遍历：左右根
*/
var postorder = function(root) {
  if(!root) return []
  // 2、迭代
  let res = []
  let stack = [root]
  let cur = root
  while(stack.length){
    // 结点出栈，保存结点值
    cur = stack.pop()
    res.push(cur.val)
    if(cur.children){
      // 子结点，从左到右入栈
      for(let i = 0;  i < cur.children.length; i++){
        stack.push(cur.children[i])
      }
    }
  }
  // 由于是后序遍历，所以需要反转
  return res.reverse()
};
// @lc code=end

