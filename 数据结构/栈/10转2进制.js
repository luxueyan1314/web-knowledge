/* 1、存
   2、取
   3、查看栈顶
   4、获取长度
   5、清空
*/
const _item = Symbol()
class Stack{
    constructor(){
        this[_item] = []
    }
    push(val){
        this[_item].push(val)
        return val
    }
    pop(){
        return this[_item].pop()
    }
    peek(){
        return this[_item][this[_item].length - 1]
    }
    size(){
        return this[_item].length
    }
    clear(){
        this[_item] = []
    }
  
}

// 测试栈 开始================
// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// console.log(stack.size())
// console.log(stack.peek())
// stack.pop()
// console.log(stack.size())
// console.log(stack.peek())
// stack.clear()
// console.log(stack.size())
// console.log(stack.peek())
// 测试栈 结束================

/*
 10/2 ==> 5  余数0
 5/2 ==> 2   余数1
 2/2 ==> 1   余数0
 1/2 ===> 0.5 余数 0
*/

function trans2(num){
  if(typeof num !== 'number') {
    throw '请使用数值'
  }
  // 循环进栈：将数值除2余数进栈
  let stack = new Stack()
  let resVal = num
  while(resVal > 0){
    stack.push(resVal%2)
    resVal = Math.floor(resVal/2)
  }
  // 循环出栈
  let resArr = []
  while(stack.size() > 0){
    resArr.push(stack.pop())
  }
 return resArr.join("")
}

console.log(trans2(10))
