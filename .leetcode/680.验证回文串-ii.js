/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 贪心算法
function isPalindrome(s, left, right){
  while(left < right){
    if(s[left] !== s[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}
var validPalindrome = function(s) {
  if(!s) return true;
  let left = 0, right = s.length - 1;
  while(left < right){
    if(s[left] !== s[right]){
      return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
    } else {
      left++;
      right--;
    }
  }
  return true;
};
// @lc code=end

