/*
  栈特点：先进后出
  包含方法：
  push 入栈
  pop 出栈(删除堆栈顶部的元素)
  peek 栈顶
  isEmpty 判断是否为空
  size 获取栈个数
  getMin 获取栈中最小元素
*/
class Stack{
  constructor(){
    this.items = {}
    this.count = 0
  }
  push(element){
    this.items[this.count] = element
    this.count++
  }
  pop(){
    let current
    if(!this.isEmpty()){
      current = this.items[this.count-1]
      delete this.items[this.count-1]
      this.count--
    }
    return current
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[this.count-1]
    } else {
      return undefined
    }
  }
  isEmpty(){
    return this.count == 0
  }
  size(){
    return this.count
  }
  getMin(){
    if(!this.isEmpty()){
      let min = this.items[0]
      for(let i in this.items){
        if(min > this.items[i]){
          min = this.items[i]
        }
      }
      return min
    } else {
      return undefined
    }
  }
}

let test = new Stack()
test.push(1)
test.push(2)
test.push(3)
console.log('最小值----', test.getMin())
console.log('栈顶----', test.peek())
test.pop()
test.pop()
test.pop()
console.log('栈顶----', test.peek())
console.log('栈size----', test.size())

