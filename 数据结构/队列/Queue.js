/* 
  队列特点：
  1、先进先出
  2、使用对象模拟队列，能提高出队列效率
*/
export default class Queue{
  constructor(){
    this.lowCount = 0
    this.count = 0
    this.items = {}
  }
  // 对列末尾存入
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 队列头部取出
  dequeue() {
    if(this.isEmpty()) return
    let deleteElement = this.items[this.lowCount]
    delete this.items[this.lowCount]
    this.lowCount++
    return deleteElement
  }
  peek() {
    if(this.isEmpty()) return
    return this.items[this.lowCount]
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
}
// let test = new Queue()
// test.enqueue(1)
// test.enqueue(2)
// test.enqueue(3)
// test.enqueue(4)
// console.log("dequeue1", test.dequeue())
// console.log("dequeue2", test.dequeue())
// console.log("size", test.size())
// console.log("size", test.peek())