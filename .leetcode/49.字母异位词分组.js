/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for(let i = 0; i < strs.length; i++) {
    let key = strs[i].split('').sort().join('')
    map.has(key) ? map.get(key).push(strs[i]) : map.set(key, [strs[i]])
  }
  return [...map.values()]
};
// @lc code=end

