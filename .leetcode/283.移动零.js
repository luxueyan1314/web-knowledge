/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力解法
// var moveZeroes = function(nums) {
//   let len = nums.length
//   // 从后往前遍历，遇到0就删除，然后在数组末尾添加0
//   for(let i = 0; i < len; i++){
//     // 如果当前元素为0，就删除当前元素，然后在数组末尾添加0
//     if(nums[i] === 0) {
//         let tem = nums[i]
//         // 删除当前元素
//         for(let j = i; j < nums.length - 1; j++){
//             nums[j] = nums[j + 1]
//         }
//         // 在数组末尾添加0
//         nums[nums.length - 1] = tem
//         // 当为0的元素删除后，下一个元素就会前进一位占据该位置，所以要从该位置在进行判断
//         i--
//         // 当移动到末尾的元素，就不用再一次进行遍历了，所以遍历的长度要减去1位
//         len--;
//     }
//  }
//  return nums
// };
// 填充0
var moveZeroes = function(nums) {
  let index = 0;
  for(let i = 0; i < nums.length;i++){
    if(nums[i] !== 0){
      nums[index] = nums[i]
      index++
    }
  }
  for(let i = index; i < nums.length;i++){
    nums[i] = 0
  }
}
// @lc code=end

