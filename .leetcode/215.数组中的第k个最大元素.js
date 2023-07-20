/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // let max = new Array(k).fill(nums[0]) // 前k个最大值
  // 实现一个堆排序
  /*
  * 1. 建立一个大顶堆
  * 2. 堆顶元素就是最大值
  * 3. 堆顶元素和数组最后一个元素交换
  * 4. 堆的长度减一
  */
  let heapSize = nums.length
  buildMaxHeap(nums, heapSize) // 构建好了一个大顶堆
  // 删除堆顶元素，直到删除k次
  for(let i = nums.length - 1; i >= nums.length - k + 1; i--){
    swap(nums, 0, i)
    heapSize--
    maxHeap(nums, 0, heapSize)
  }
  return nums[0]
  // 建立一个大顶堆
  function buildMaxHeap(nums, heapSize){
    // 从最后一个非叶子节点开始
    for(let i = Math.floor(heapSize / 2); i >= 0; i--){
      maxHeap(nums, i, heapSize)
    }
  }
  // 向下比较，交换
  function maxHeap(nums, i,heapSize){
    let l = 2 * i + 1
    let r = 2 * i + 2
    let largest = i
    if(l < heapSize && nums[l] > nums[largest]){
      largest = l
    }
    if(r < heapSize && nums[r] > nums[largest]){
      largest = r
    }
    if(largest !== i){
      swap(nums, i, largest)
      // 继续向下比较
      maxHeap(nums, largest, heapSize)
    }
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
};
// @lc code=end

