/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 暴力法
  nums.sort((a,b)=>a-b)
  let res = []
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        let item = [nums[i], nums[j], nums[k]]
        if(nums[i] + nums[j] + nums[k] === 0 && !map.has(item.join(','))) {
          res.push(item)
          map.set(item.join(','), 1)
        }
      }
    }
  }
  return res
};
// @lc code=end

