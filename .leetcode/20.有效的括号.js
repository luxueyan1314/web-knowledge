/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if( s.length % 2 === 1 ) {
      return false
    }
    let pairs = new Map([
      ['{','}'],
      ['(',')'],
      ['[',']'],
    ]) 
    let arr = s.split('')
    let stk = [];
    for(let str of arr){
     if(pairs.has(str)){
        stk.push(str)
     } else {
      if(!stk.length || str !== pairs.get(stk[stk.length-1])){
        return false
      }
      stk.pop()
     }
    }
    if(stk.length){
      return false
    }
    return true
};
// @lc code=end

