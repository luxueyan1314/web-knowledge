/**
 * 
 * @param {*} list 
 * @param {*} k 查找的值
 */
function binarySearch(list, k){
  let left,right,mid,Nofound = -1
  left = 0
  right = list.length-1
  while (left <= right) {
    mid = Math.round((left + right)/2)
    if(list[mid] > k ){
      right = mid - 1
    } else if(list[mid] < k){
      left = mid + 1
    } else {
      return mid
    }
  }
  return Nofound
}
console.log(binarySearch([1,2,3,4,5,6,7], 8))