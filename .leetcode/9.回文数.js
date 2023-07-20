/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(!x) return true
  let xReverse = (''+x).split('').reverse().join('')
  return +xReverse === x
};
// @lc code=end

