// 迭代实现
/**
 *  斐波那契数列是另一个可以用递归解决的问题。它是一个由 0、1、1、2、3、5、8、13、21、
    34 等数组成的序列。数 2 由 1 + 1 得到，数 3 由 1 + 2 得到，数 5 由 2 + 3 得到，以此类推。斐波
    那契数列的定义如下。
*/
function fabonacciIterative(n) {
  if(n < 1) return 0
  if(n <= 2) return 1
  let fibNMinus2 = 0
  let fibNMinus1 = 1
  let fibN = n
  for(let i = 2; i <= n; i++){
    fibN = fibNMinus1 + fibNMinus2
    fibNMinus1 = fibNMinus2
    fibNMinus2 = fibN
  }
  return fibN
}


// 递归实现
function fabonacci(n) {
  if(n < 1) return 0;
  if(n <= 2) return 1;

  return fabonacci(n-1) + fabonacci(n-2);
}

// 记忆化斐波那契数
function fabonacciMemoization(n){
  let map = [0, 1]
  const fabonacci = (n) => {
    if(map[n] !== undefined) return map[n];
    map[n] = fabonacci(n-1) + fabonacci(n-2);
    return map[n]
  }
  return fabonacci(n)
}
console.log(fabonacciMemoization(7))
