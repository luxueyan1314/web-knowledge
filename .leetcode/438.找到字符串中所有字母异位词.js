/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// function isAnagram(s, p) {
//   if(s.length !== p.length) return false
//   let map = new Map()
//   for(let i = 0; i < s.length; i++) {
//     map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
//   }
//   for(let i = 0; i < p.length; i++) {
//     if(map.has(p[i])) {
//       map.set(p[i], map.get(p[i]) - 1)
//       if(map.get(p[i]) === 0) {
//         map.delete(p[i])
//       }
//     } else {
//       return false
//     }
//   }
//   return true
// }

// var findAnagrams = function(s, p) {
//   let res = []
//   // 滑动窗口
//   for(let i = 0; i < s.length - p.length + 1; i++) {
//     // 截取当前滑动窗口内字符串，与p比较
//     if( isAnagram(s.substr(i, p.length), p) ){
//       res.push(i)
//     }
//   }
//   return res
// };
function findAnagrams(s, p) {
  const result = [];
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - aCode]++;
  }

  for(let i = 0; i < s.length; i++){ 
    // 窗口右侧，加一个字符
    sCount[s.charCodeAt(i) - aCode]++;
    if(i >= p.length){
      // 窗口左侧，减去一个字符
      sCount[s.charCodeAt(i - p.length) - aCode]--;
    };
    if(pCount.join('') === sCount.join('')){
      result.push(i - p.length + 1);
    }
  }

  return result;
}
// @lc code=end

