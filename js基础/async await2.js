/* 手动实现async await
* 参考文档：https://juejin.cn/post/7007031572238958629#heading-6
*/
/** generaor函数介绍
 * 1、函数定义: generaor函数用*定义
 * 2、yield: yield是只有generaor函数，相当于generaor函数的“中途暂停点”
 * 3、next：generaor函数不会自己执行，需要调用next函数，每一次调用next将会下一个yield定义的点。
*/
// generaor函数使用实例
function* gen() {
  const num1 = yield 1
  console.log('num1:', num1)
  const num2 = yield 2
  console.log('num2:',num2)
  yield 3
}
// 执行generaor函数
setInterval(() => {
  console.log('generaor函数执行========')
  const g = gen()
  g.next()
  //next传参，可以通过yield来接收（注：第一个next传参无用）
  g.next(22222)  //控制台打印 22222
  g['throw']('测试执行报错') //控制台打印 测试报错
}, 8000)


// async await 实例
const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000));
async function test() {
  const data = await getData();
  console.log("data: ", data);
  const data2 = await getData(); 
  console.log("data2: ", data2);
  return "success";
}

// 测试 async await
setTimeout(() => {
  console.log('原始async await ===========================')
  test().then(res => console.log(res))
}, 8000);
 

// 转换为generaor实现
function* generatorFn(){
  const data = yield getData();
  console.log("data:", data);
  const data2 = yield Promise.reject('error'); // 测试reject,控制台打印 error,终端执行报错
  console.log("data2:", data2);
  return "success";
}



// 手动执行generaor函数
setTimeout(() => {
  console.log('测试：手动执行generaor函数===========================')
  let genTest = generatorFn()
  let data = genTest.next()
  data.value.then(value1 => {
    // data1的value被拿到了，继续调用next
    let data2 = genTest.next(value1)
    data2.value.then(value2 => {
      // data2的value拿到了 继续调用next并且传递value2
      genTest.next(value2)
    })
  })
}, 5000)

// 手动实现async await
//  高阶函数实现（传入参数是函数，并且返回函数）
function generatorToAsync(generatorFn) {
  return function(){
    /**
     * 为何这里必须要apply改变this指向
     * 回答： 因为generatorFn是一个函数，函数是有this指向的，如果不使用apply改变this指向，那么generatorFn的this指向就是调用generatorToAsync的对象
     */
    const gen = generatorFn.apply(this, arguments) // gen有可能传参

    return new Promise((reslove, reject)=>{
      function go(key, args){
        let res
        // 执行gen
        try{
          res = gen[key](args) //执行next函数
        }catch(error){
          return reject(error) // 若执行出错，直接退出
        }
        let {value, done} = res
        if(done){ 
          //如果执行结束
          return reslove(value)
        } else {
          // await关键字后面跟Promise,执行Promise并将其返回值
          value.then(value=>{
            go('next', value)
          },reason => {
            go('throw', reason)
          })
        }
      }
      go('next') // 第一次执行
    })
  } 
}
// 测试generatorToAsync
setTimeout(() => {
  console.log('测试: generatorToAsync===========================')
  const asyncTest = generatorToAsync(generatorFn)
  asyncTest().then(res => console.log(res))
}, 0)


