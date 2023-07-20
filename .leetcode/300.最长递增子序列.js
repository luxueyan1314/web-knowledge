/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 动态规划实现
  /**
   * 思路：
   * 1、定义一个数组dp，dp[i]表示以第i个值为结尾的【最长递增子序列的长度】(默认存储1)
   * 2、循环一遍数组，存储当前值dp[i]，循环之前前面每一个值dp[j]进行比较，如果比dp[i]小，dp[j]由dp[i]状态转移而来，即：dp[j] = max(dp[j],dp[i]+1)
  */
  let dp = new Array(nums.length).fill(1)
  for(let i = 1,len = nums.length; i < len; i++){
    for(let j = 0; j < i; j++){
      if(nums[j] < nums[i]){
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  return Math.max(...dp)
};

// @lc code=end

