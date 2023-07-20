/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  console.log('digits', digits)
  for(let i = digits.length; i >= 0; i++){
    if(digits[i] === 9){
      digits[i] = 0
    } else {
      digits[i] = digits[i] + 1
      break;
    }
  }
  return digits
};
// @lc code=end

