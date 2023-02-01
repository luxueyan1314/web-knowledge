import DoublyNode from './doublyNode.js'
import LinkedList from "./linkedList.js"
class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals){
    this.head = undefined
    this.tail = undefined
    this.count = 0
    this.equalsFn = equalsFn
  }
  //重写插入函数
  inset(element, index){
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      if(index===0) { // 开头
        let current = this.head
        if(this.count === 0){ //如果链表为空，head和tail都指向当前元素
          this.head = node
          this.tail = node
        } else {
          current.prev = node
          node.next = this.head
          this.head = node
        }
      } else if (index === this.count) { // 结尾
        //如果不为空，为链表结尾，tail指向当前元素
        let current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else { //中间任意位置
        let previous = this.getElementAt(index-1)
        let current = previous.next
        node.next = current
        current.prev = node
        previous.next = node
        node.prev = previous
      }
      this.count++
      return true
    } else {
      return false
    }
  }
  removeAt(index){
    let current = undefined
    if(index >= 0 && index <= this.count){
      if(index === 0){
        // 开始
        current = this.head
        this.head = current.next
        this.head.prev = undefined
      } else if(index === this.count){
        // 结束

      } else {

      } 
    } else {
      return undefined
    }
  }
}