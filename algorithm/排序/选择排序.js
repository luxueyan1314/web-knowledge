/**
 * 选择排序
 * @param {Array} list
 * @returns {Array} list 排序后的数组
 * 1. 从第一个元素开始，找到最小元素，放到第一个位置
 * 2. 从第二个元素开始，找到最小元素，放到第二个位置
 * 3. 重复上述步骤，直到排序完成
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 稳定性：不稳定
 * 
 * 选择排序是不稳定的排序算法，因为在排序的过程中，存在将一个元素交换到它前面的元素后面的情况
 * 例如：5, 8, 5, 2, 9
 * 第一次排序：2, 8, 5, 5, 9
 * 第二次排序：2, 5, 8, 5, 9
 * 第三次排序：2, 5, 5, 8, 9
 * 第四次排序：2, 5, 5, 8, 9
 * 
 * 选择排序是原地排序算法，不需要额外的存储空间
 * 选择排序的最好情况时间复杂度、最坏情况时间复杂度、平均情况时间复杂度都是O(n^2)
 * 选择排序的时间复杂度与输入数据的状态无关，所以它是稳定的排序算法
 */
function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let position = i
    // 找到最小元的下标
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[position]) {
        position = j
      }
    }
    // 交互嗯最小元到有序位置最后
    if (i != position) {
      let temp = list[i]
      list[i] = list[position]
      list[position] = temp
    }
    console.log('list=', list, ';p=', position, ';i=', i)
  }
}
let list = [5, 9, 2, 1, 4]
selectionSort(list)
console.log(list)
