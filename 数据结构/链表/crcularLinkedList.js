import Node from "./node.js"
import LinkedList from "./linkedList.js"
import { defaultEquals } from '../util/index.js'
// 循环链表
class CrcularLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals){
    super(equalsFn)
    // this.tail = null
  }
  // 重写插入方法
  insert(element, index){
    if(index >= 0 && index <= this.count){
      let current = this.head
      let node = new Node(element)
      if(index === 0) { //表头
        if(this.count == 0){
          this.head = node
          node.next = this.head
        } else {
          this.head = node
          node.next = current
          let tail = this.getElementAt(this.size())
          console.log( 'current', current.element, 'head', this.head.element,"tail", tail.element)
          tail.next = this.head
        }
      } else {
        // 表尾/中间
        let prev = this.getElementAt(index - 1)
        node.next =  prev.next
        prev.next = node
      }
      this.count++
    }
    return false
  }
  // 重写删除方法
  removeAt(index){
    if(this.count){
      let current = this.head
      if(index === 0){
        if(this.count === 1) {
          this.head = null
        } else {
          this.head = current.next
          current = this.getElementAt(this.size()-1)
          current.next = this.head
        }
      } else {
        let prev = this.getElementAt(index - 1)
        current = prev.next
        prev.next = current.next
      }
      this.count--
      return current
    }
    return undefined
  }
}
let list = new CrcularLinkedList()
list.insert(1,0)
list.insert(2,0)
list.insert(3,0)
console.log(list.size())
list.removeAt(0)
console.log('size-----', list.size(), 'string:', list.toString())