/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
	const len = s.length;
  const wordSet = new Set(wordDict);

	const canBreak = (start) => { // 判断从start到末尾的子串能否break
		if (start == len) {//指针越界，s一步步成功划分为单词，才走到越界这步，现在没有剩余子串
			return true;   //返回真，结束递归
		}
		for (let i = start + 1; i <= len; i++) { //指针i去划分两部分，for枚举出当前所有的选项i
			const prefix = s.slice(start, i);    // 切出的前缀部分
			if (wordSet.has(prefix) && canBreak(i)) {// 前缀部分是单词，且剩余子串能break，返回真
				return true;                            
			} // 如果前缀部分不是单词，就不会执行canBreak(i)。进入下一轮迭代，再切出一个前缀串，再试
		}
		return false; // 指针i怎么划分，都没有返回true，则返回false
	}

	return canBreak(0); // 递归的入口，从0到末尾的子串能否break
}
wordBreak("leetcode", ["leet", "code"])
// @lc code=end

