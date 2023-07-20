/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let left = 0, right = height.length - 1;
    while(left < right){
      let minHeight = height[left]
      if(height[left] > height[right]){
        minHeight = height[right]
        right--
      } else {
        left++
      }
      let area = minHeight * (right - left + 1)
      max = Math.max(max, area);
  }
  return max
};
// @lc code=end

