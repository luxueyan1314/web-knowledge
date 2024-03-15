/**
 * 发布-订阅模式
 * 概念：订阅者订阅事件，发布者通过发布事件的方式通知订阅者。 
 * 优点：解耦，发布者和订阅者不需要知道对方的存在。
 * 缺点：订阅者需要知道发布者的存在，发布者和订阅者之间的关系是松散的。
*/
/**
 * 1、角色：发布者、观察者、订阅者
* 2、方法：发布者发布通知、订阅者绑定观察者（注册），接受通知。
*/

/**
 * 使用：
 * 1、订阅者通过on方法绑定事件
 * 2、发布者通过emit方法发布事件
 * 3、订阅者通过off方法删除订阅
 * 4、订阅者通过once方法只订阅一次
*/
class EventBus{
  constructor(){
    this.task = {}
  }
  on(type, fn){
    if(this.task.hasOwnProperty(type)){
      this.task[type].push(fn)
    } else {
      this.task[type] = [fn]
    }
  }
  emit(type, ...args){
    if(this.task.hasOwnProperty(type)){
      for(let i = 0,item; (item = this.task[type][i++]); ){
         item(...args)
      }
    }
  }
  off(type, fn){
    // 删除事件
    if(this.task.hasOwnProperty(type)){
      this.task[type] = this.task[type].filter(item => item !== fn)
    }
  }
  once(type,fn){
    let _self = this
    function f(...args){
      fn(...args)
      _self.off(type, f)
    }
    this.on(type, f)
  }
}

 //测试
let bus = new EventBus()
// 订阅
bus.on('test', function(...args){
  console.log("监听事件1", args)
})

bus.once('test', function(...args){
  console.log("监听事件2", args)
})

setTimeout(()=>{
  bus.emit('test', 1,2)
  bus.emit('test', 3,4)
}, 1000)
