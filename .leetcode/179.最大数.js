/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  // 1. 排序
  nums.sort((a, b) => {
    const str1 = `${a}${b}`;
    const str2 = `${b}${a}`;
    return str2 - str1;
  });
  // 2. 拼接
  let res = nums.join('');
  
  // 3. 处理前导0
  if (res[0] === '0') {
    return '0';
  }
  return res;
};
// @lc code=end

