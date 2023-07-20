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
var twoSum = function (nums, target) {
  let map = {}
  for (let index = 0; index < nums.length; index++) {
    let item = nums[index]
    const temp = map[target - item];
    if (temp != undefined) {
      return [temp, index]
    }
    map[item] = index
  }
};
// @lc code=end

