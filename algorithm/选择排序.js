//选择排序
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
