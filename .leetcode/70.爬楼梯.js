/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <= 1) return 1;
  if(n <= 2) return 2;
  let n0 = 1 //n=1
  let n1 = 1 //n=2
  let sum = 0
  // n=3
  for(let i = 2; i <= n;i++){
    sum = n0 + n1
    n0 = n1
    n1 = sum
  }
  return sum
};
// @lc code=end

