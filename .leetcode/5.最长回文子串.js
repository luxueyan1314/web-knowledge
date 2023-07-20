/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  let res = '';
  for(let i = 0; i < s.length; i++){
    expandAroundCenter(s, i, i); // 假设回文串长度为奇数
    expandAroundCenter(s, i, i+1); // 假设回文串长度为偶数
  }
  function expandAroundCenter(s,m,n){
    // 从中心向两边扩散
    while(m >= 0 && n < s.length && s[m] === s[n]){
      m--;
      n++;
    }
    // 新的回文串长度大于之前的回文串长度
    if(n - m - 1 > res.length){
      res = s.substring(m+1, n);
    }
  }

  return res;
};
// @lc code=end

