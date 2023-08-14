/**
 * 插入排序
 * @param {Array} arr
 * @return {Array}
 * 插入排序是一种基于分支思想的算法。它的基本思路是
 * 思路：将数组分成两个部分，左边的部分是已排序的，右边的部分是未排序的。然后从右边的部分取出一个值，插入到左边的部分中，使得左边的部分依然有序。
*/
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let temp = arr[i] // 当前比较的值
    for(let j = i; j >= 0; j--){
      if(temp < arr[j]){
        // 插入到当前位置
        arr.splice(j, 0, temp)
      }
    }
  }
}
// 测试插入排序
let arr = [0,5,2,1,6,3]
insertionSort(arr)
console.log(arr) // [ 0, 1, 2, 3, 5, 6 ]

