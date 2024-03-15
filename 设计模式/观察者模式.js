/**
 * 观察者模式
 * 定义：一个对象🈶一系列的依赖它的观察者watcher。当这个对象变更，会通知观察者进行更新。
 * 
 * 实例：vue响应式系统
*/

let data = {
  name: 'zhangsan',
  age: 18
}

Object.keys(data).forEach(key => {
  let value = data[key]
  Object.defineProperty(data,key,{
    get(){
      console.log('访问，收集依赖', key)
      return value
    },
    set(newValue){
      if(newValue !== value){
        console.log('更新，通知依赖', key)
        value = newValue
      }
    }
  })
})
data.name = 'lisi'
console.log(data.name)
// 输出 更新，通知依赖 => 访问，收集依赖 => name