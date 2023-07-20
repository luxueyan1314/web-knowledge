/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index1 = 0
    while(index1 < nums.length){
      let index2 = index1+1
      while(index2 < nums.length){
        if(nums[index1]+nums[index2] === target){
          return [index1,index2]
        }
        index2++
      }
      index1++
    }
};
// @lc code=end

