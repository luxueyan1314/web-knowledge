/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
var maxSubArray = function (nums) {
  let thisSum = 0
  let MaxSum = nums[0]
  for (let i = 0; i < nums.length; i++) {
    thisSum += nums[i]
    if (thisSum > MaxSum) {
      MaxSum = thisSum
    } 
    if (thisSum < 0) {
      thisSum = 0
    }
  }
  return MaxSum
};
// @lc code=end

