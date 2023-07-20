/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let end = nums.length -1 //结束指针
  let i = 1
  while(i <= end){
    if(nums[i] == nums[i-1]){
      let temp = nums[i]
      for(let j = i; j < end; j++){
        nums[j] = nums[j+1]
      }
      nums[end] = temp
      end--
    } else {
      i++
    }
  }
  return end+1
};
// @lc code=end

