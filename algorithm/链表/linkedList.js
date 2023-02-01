import Node from "./node.js"
import { defaultEquals } from '../util/index.js'

/**
 * push(element): 向链表尾部添加一个新元素
 * inset(element, position): 向链表特定位置插入元素
 * getElementAt(index): 获取位置元素
 * remove(element): 从链表中删除一个元素
 * indexOf(element): 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
 * removeAt(position): 删除链表的特定位置的元素
 * isEmpty(): 是否为空
 * size():返回列表包含的个数
 * toString(): 返回表示整个链表的字符串
 */
 export default class LinkedList {
  constructor(equalsFn = defaultEquals){
    this.head = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }
  push(element) {
    let node = new Node(element)
    if(!this.head) {
      this.head = node
      this.count = 1
    } else {
      let lastNode = this.head
      while(lastNode.next){
        lastNode = lastNode.next
      }
      lastNode.next = node
      this.count++
    }
  }
  inset(element, index) {
    if(index >= 0 && index < this.count){
      let node = new Node(element)
      if(index === 0){
        node.next = this.head
        this.head = node
      } else {
        let previous = this.getElementAt(index-1)
        let current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    } else {
      return false
    }
  }
  // 循环返回第index元素
  getElementAt(index){
    // 判断index是否在链表中存在
    if(index < 0 || index > this.count){
      return false
    }
    let node = this.head
    for(let i=0; i < index; i++){
      node = node.next
    }
    return node
  }
  // 返回元素的位置
  indexOf(element){ 
    let node = this.head
    let index = -1
    for(let i = 0; i < this.count; i++){
      if(this.equalsFn(element, node.element)){
        index = i
        break
      }
      node = node.next
    }
    return index
  }
  remove(element){
    let index = this.indexOf(element)
    this.removeAt(index)
  }
  removeAt(index){
    if(index >= 0 && index < this.count){
      let current = this.head
      if(index === 0){
        this.head = this.head.next
      } else {
        let previous = this.getElementAt(index-1)
            current = previous.next
            previous.next = current.next
      }
      this.count--
      return current.element
    } else {
      return undefined
    }
  }
  size(){
    return this.count
  }
  isEmpty(){
    return this.count === 0
  }
  toString(){
    let lastNode = this.head
    let str = JSON.stringify(lastNode.element)
    while(lastNode.next){
      lastNode = lastNode.next
      str += JSON.stringify(lastNode.element)
    }
    return str
  }
}

let linkedList = new LinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.removeAt(2)
console.log("removeAt-2", linkedList.toString())
linkedList.inset(5,2)
console.log("inset-5,2", linkedList.toString())
console.log("indexOf-5", linkedList.indexOf(5))
