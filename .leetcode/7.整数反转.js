/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  while(x){
    result = result*10 + x%10
    x = parseInt(x/10)
  }
  let range = [-Math.pow(2, 31), Math.pow(2, 31) - 1];
  if( result < range[0] || result > range[1]) return 0

  return result
}
// @lc code=end

