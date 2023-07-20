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
function isAnagram(s, p) {
  if(s.length !== p.length) return false
  let map = new Map()
  for(let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
  }
  for(let i = 0; i < p.length; i++) {
    if(map.has(p[i])) {
      map.set(p[i], map.get(p[i]) - 1)
      if(map.get(p[i]) === 0) {
        map.delete(p[i])
      }
    } else {
      return false
    }
  }
  return true
}

var findAnagrams = function(s, p) {
  let res = []
  // 滑动窗口
  for(let i = 0; i < s.length - p.length + 1; i++) {
    // 截取当前滑动窗口内字符串，与p比较
    if( isAnagram(s.substr(i, p.length), p) ){
      res.push(i)
    }
  }
  return res
};
// @lc code=end



// Test case 1
s1 = "cbaebabacd"
p1 = "abc"
expected1 = [0, 6]
result1 = findAnagrams(s1, p1)
console.assert(JSON.stringify(result1) === JSON.stringify(expected1), `Expected ${expected1}, but got ${result1}`)

// Test case 2
s2 = "abab"
p2 = "ab"
expected2 = [0, 1, 2]
result2 = findAnagrams(s2, p2)
console.assert(JSON.stringify(result2) === JSON.stringify(expected2), `Expected ${expected2}, but got ${result2}`)

// Test case 3
s3 = "aaaaa"
p3 = "a"
expected3 = [0, 1, 2, 3, 4]
result3 = findAnagrams(s3, p3)
console.assert(JSON.stringify(result3) === JSON.stringify(expected3), `Expected ${expected3}, but got ${result3}`)

// Test case 4
s4 = "ab"
p4 = "a"
expected4 = [0, 1]
result4 = findAnagrams(s4, p4)
console.assert(JSON.stringify(result4) === JSON.stringify(expected4), `Expected ${expected4}, but got ${result4}`)// Test case 1
s1 = "cbaebabacd"
p1 = "abc"
expected1 = [0, 6]
result1 = findAnagrams(s1, p1)
console.assert(JSON.stringify(result1) === JSON.stringify(expected1), `Expected ${expected1} but got ${result1}`)

// Test case 2
s2 = "abab"
p2 = "ab"
expected2 = [0, 1, 2]
result2 = findAnagrams(s2, p2)
console.assert(JSON.stringify(result2) === JSON.stringify(expected2), `Expected ${expected2} but got ${result2}`)

// Test case 3
s3 = "aaaaa"
p3 = "a"
expected3 = [0, 1, 2, 3, 4]
result3 = findAnagrams(s3, p3)
console.assert(JSON.stringify(result3) === JSON.stringify(expected3), `Expected ${expected3} but got ${result3}`)

// Test case 4
s4 = "ab"
p4 = "a"
expected4 = [0, 1]
result4 = findAnagrams(s4, p4)
console.assert(JSON.stringify(result4) === JSON.stringify(expected4), `Expected ${expected4} but got ${result4}`)// BEGIN: 5d7f3b8c5a7e
test("test1", () => {
  expect(findAnagrams("cbaebabacd", "abc")).toEqual([0, 6]);
});

test("test2", () => {
  expect(findAnagrams("abab", "ab")).toEqual([0, 1, 2]);
});

test("test3", () => {
  expect(findAnagrams("aaaaa", "a")).toEqual([0, 1, 2, 3, 4]);
});

test("test4", () => {
  expect(findAnagrams("abc", "def")).toEqual([]);
});
// END: 5d7f3b8c5a7e

