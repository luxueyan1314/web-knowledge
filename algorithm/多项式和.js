// 多项式和
function f(n, a, x) {
  let p = a[0]
  for (let i = 1; i <= n; i++) {
    p += a[i] * Math.pow(x, i)
  }
  return p
}
let arr = Array.from({ length: 11 }, (v, i) => i + 1)

console.time('f')
console.log(f(10, arr, 2))
console.timeEnd('f')
// 多项式和
function f1(n, a, x) {
  let p = a[n - 1] + a[n] * x
  for (let i = n - 2; i >= 0; i--) {
    p = a[i] + x * p
  }
  return p
}
console.time('f1')
console.log(f1(10, arr, 2))
console.timeEnd('f1')