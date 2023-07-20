/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 双指针
  /*
  * 1. 定义两个指针分别指向两个数组的开头
  * 2. 比较两个指针所指向的元素大小，将较小的元素放入新数组中
  * 3. 指针后移，重复上述操作
  */
  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  let cur;
  while(p1 < m || p2 < n){
    // 如果p1指针已经到达nums1末尾
    if(p1 === m){
      cur = nums2[p2];
      p2++;
      // 如果p2指针已经到达nums2末尾
    } else if(p2 === n){
      cur = nums1[p1];
      p1++;
      // 如果p1指针所指向的元素小于等于p2指针所指向的元素
    } else if(nums1[p1] <= nums2[p2]){
      cur = nums1[p1];
      p1++;
      // 如果p1指针所指向的元素大于p2指针所指向的元素
    } else {
      cur = nums2[p2];
      p2++;
    }
    sorted[p1 + p2 - 1] = cur;
  }
  
  // 将新数组中的元素复制到nums1中
  for(let i = 0; i < m + n; i++){
    nums1[i] = sorted[i];
  }
};
// @lc code=end

