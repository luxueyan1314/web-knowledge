
function maxSubseqSum(list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    let sum = list[i]
    for (let j = i + 1; j < list.length; j++) {
      sum += list[j]
      if (sum > max) {
        max = sum
      }
    }
  }
  return max
}
// console.log(maxSubseqSum([1,2,3,4,5,-8,-10,10,20]))
// 在线处理
function maxSubseqSum2(list){
  let maxSum = thisSum = 0
  for(let i = 0; i < list.length; i++){
    thisSum += list[i]
    if(thisSum > maxSum){
      maxSum = thisSum
    } else if(thisSum < 0){
      thisSum = 0
    }
  }
  return maxSum
}
// console.log(maxSubseqSum2([-1,3,-2,4,-6,1,6,-1]))
console.log(maxSubseqSum2([4,-3,5,-2,-1,2,6,-2]))

// 分而治之
function maxSubseqSum3(list){

}

