/*
  双端队列
  1、队首、队尾可入队列
  2、队首、队尾可出队列
  3、可查看队首和队尾元素
  4、同样是用object模拟队列
*/
export default class DoubleQueue {
  constructor(){
    this.items = {}
    this.lowCount = 0
    this.count = 0
  }
  enqueueFront(element){
    if(this.isEmpty()){
      this.enqueueBack(element)
    } else if(this.lowCount === 0){
      for(let key in this.items){
        this.items[+key+1] = this.items[key]
      }
      this.items[0] = element
      this.count++
    } else {
      this.items[this.lowCount] = element
      this.lowCount--
    }
  }
  enqueueBack(element){
    this.items[this.count] = element
    this.count++
  }
  removeFront(){
    if(this.isEmpty()) return
    let deleteElement = this.items[this.lowCount]
    delete this.items[this.lowCount]
    this.lowCount++
    return deleteElement
  }
  removeBack(){
    if(this.isEmpty()) return
    let deleteElement = this.items[this.count-1]
    delete this.items[this.count-1]
    this.count--
    return deleteElement
  }
  peekFont(){
    if(this.isEmpty()) return
    return this.items[this.lowCount]
  }
  peekBack(){
    if(this.isEmpty()) return
    return this.items[this.count-1]
  }
  size() {
    return this.count - this.lowCount
  }
  isEmpty() {
    return this.count - this.lowCount === 0
  }
  clear() {
    this.items = {}
    this.lowCount = 0
    this.count = 0
  }
  toString() {
    let string = ''
    for(let key in this.items){
      this.items[key] = this.items[key]
      string += (string ? ',':'') + this.items[key] 
    }
    return string
  }
}
// let test = new DoubleQueue()
// test.enqueueFront(1)
// test.enqueueFront(2)
// console.log('size', test.size())
// console.log('peekFont', test.peekFont())
// test.enqueueBack(3)
// console.log('size', test.size())
// test.removeFront()
// console.log('peekFont', test.peekFont())
// console.log('size', test.toString())