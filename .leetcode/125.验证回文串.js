/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 let str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
 let left = 0, right = str.length - 1;
 while(left < right){
  if(str[left] !== str[right]) return false;
  left++;
  right--;
 };
 return true;
};
// @lc code=end

