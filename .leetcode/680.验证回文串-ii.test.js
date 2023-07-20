// BEGIN: 5c9d3c5f3d9d
var validPalindrome = function(s) {
  if(!s) return true;
  let reg = true;
  let left = 0, right = s.length - 1;
  while(left < right){
    if(s[left] !== s[right]){
      if(reg){
        reg = false;
        if(s[left+1] === s[right]){
          left++;
        } else if(s[left] === s[right-1]){
          right--;
        } else {  
          return false;
        }
      } else {
        return false;
      }
    } else {
      left++;
      right--;
    }
  }
  return true;
};
test("empty string is a valid palindrome", () => {
  expect(validPalindrome("")).toBe(true);
});

test("single character string is a valid palindrome", () => {
  expect(validPalindrome("a")).toBe(true);
});

test("two character string is a valid palindrome", () => {
  expect(validPalindrome("aa")).toBe(true);
  expect(validPalindrome("ab")).toBe(true);
});

test("three character string is a valid palindrome", () => {
  expect(validPalindrome("aba")).toBe(true);
  expect(validPalindrome("abb")).toBe(true);
  expect(validPalindrome("aab")).toBe(true);
});

test("four character string is a valid palindrome", () => {
  expect(validPalindrome("abba")).toBe(true);
  expect(validPalindrome("abca")).toBe(true);
});

test("longer palindrome string is a valid palindrome", () => {
  expect(validPalindrome("racecar")).toBe(true);
});

test("non-palindrome string is not a valid palindrome", () => {
  expect(validPalindrome("hello")).toBe(false);
  expect(validPalindrome("leetcode")).toBe(false);
  // expect(validPalindrome("lcuucul")).toBe(true);
});
// END: 5c9d3c5f3d9d