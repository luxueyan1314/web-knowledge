/*
  分区： partition
  步骤：
  前提条件：取最后一个值为轴，左指针指向最左侧，右指针指向最右侧
  1、左指针遇到比轴小的值往右挪动，当遇到比轴大或者和轴相等的值就停下来
  2、右指针遇到比轴大的值往左挪动，当遇到比轴小或者和轴相等的值就停下来
  3、交换左指针和右指针指向的值
  4、重复上述步骤直到左指针与右指针重合、左指针移到右指针右边
  5、将轴与左指针指向的值交换位置
*/ 

function partition(array, start=0, end=0){
  if(start === end) return start
  let left = start // 左指针
  let right = end - 1 // 右指针
  
  while(left < right){
    // 当左指针小于轴值时，左指针往右移动
    if(array[left] < array[end] &&  left < end){
      left++
    } else if(array[right] > array[end] && right > start){
      right--
    } else {
      // 交换左右指针指向的值
      swap(array, left, right)
    }
  }
  // 交换轴与左指针指向的值
  swap(array, left, end)

  return left
}
// 交换数组中两个值
function swap(array, pointer_1, pointer_2){
  let t = array[pointer_1];
  array[pointer_1] = array[pointer_2]
  array[pointer_2] = t
}

// 测试分区
// let arr = [0,5,2,1,6,3]
// console.log(partition(arr, 0, arr.length-1), arr) // 3 [ 0, 1, 2, 3, 6, 5 ]


/**
 * 快速排序
 * @param {Array} array
 * @param {Number} start
 * @param {Number} end
 * @return {Array}
 * 快速排序是一种基于分支思想的算法。它的基本思路是
 * 思路1：选择一个轴，将数组分成两个子数组，一个子数组中的值都比轴小，另一个子数组中的值都比轴大。然后对子数组进行递归操作，直到子数组的长度为1。
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 * 稳定性：不稳定
 * 思路2: 选择一个轴，将数组分成两个部分，左边的值都比轴小，右边的值都比轴大。然后对左右两个部分进行递归操作，直到子数组的长度为1。
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 * 稳定性：不稳定
 */
  // 思路2 实现
 function quickSort(array, start=0, end=array.length-1){
  console.log(array, start, end)
  if(start < end){
    let pivot = partition(array, start, end) // 分区, pivot为轴的索引
    quickSort(array, start, pivot-1) // 对左边的子数组进行快速排序
    quickSort(array, pivot+1, end) // 对右边的子数组进行快速排序
  }
  return array
}

// 测试快速排序
let arr = [0,5,2,1,6,3]
console.log(quickSort(arr)) // [ 0, 1, 2, 3, 5, 6 ]
