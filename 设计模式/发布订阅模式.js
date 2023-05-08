/* 事件归纳
  1、角色：发布者、观察者、订阅者
  2、方法：发布者发布通知、订阅者绑定观察者（注册），接受通知。
  on：注册
  emit：发送通知
  off：删除通知
  once：只通知一次
*/
class EventBus {
  constructor(){
    this.task = {}
  }
  on(type, fn){
    if(!this.task[type]){
      this.task[type] = [fn]
    }
    this.task[type].push(fn)
  }
  emit(type, ...args){
    this.task[type].forEach(fn => {
      fn.call(thie, ...args)
    });
  }
  off(type){
    if(this.task[type]){
      this.task[type] = this.task[type].filter(item)
    }
  }
  once(type, fn){
    function f(...args){
      fn(...args)
      this.off(type, f)
    }
   this.on(type, f)
  }
}