// 手写实现async await 

/* 
  Generator 生成器对象是由一个generator function返回，符合可迭代协议
  只有在generator函数中才可使用yield
  generator函数不会自己执行需调用next()执行，可停留在下一个yield位置
*/
function* gen() {
  var a = yield 1;
  yield a * 10
}
let it = gen()
console.log(it.next())
console.log(it.next(2))

// 使用generator函数和promise实现async await
// 模拟promise
function fn(num) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(num * 2)
    }, 1000)
  })
}

function* gen() {
  let num1 = yield fn(1)
  let num2 = yield fn(num1)
  let num3 = yield fn(num2)
  return num3
}

function generatorToAsync(genTofn) {
  let gen = genTofn.apply(genTofn, arguments)
  return new Promise((reslove, reject) => {
    function go(key, arg) {
      let res
      try {
        res = gen[key](arg)
      } catch (error) {
        reject(error)
      }
      let { value, done } = res
      if (done) {
        reslove(value)
      } else {
        res.value.then(val => go('next', val)).catch(err => go('throw', err))
      }
    }
    go('next')
  })
}
generatorToAsync(gen).then(val => {
  console.log("模拟async await--------", val)
})
