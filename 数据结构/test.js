function test(list) {
  let str = ''
  for (let i = list.length-1; i>=0; i--) {
    if (list[i]) {
      if (i == 0) {
        str += '+' + list[i]
      } else {
        str += `${list[i]}x${i}${list[i+1] > 0 ? '+': ''}`
      }
    }
  }
  return str
}
console.log(test([1, 0, -3, 0, 0, 4]))