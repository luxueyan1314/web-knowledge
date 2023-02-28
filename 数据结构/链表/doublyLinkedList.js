/*
 * @Author: xueyan 2387480110@qq.com
 * @Date: 2023-01-09 18:03:45
 * @LastEditors: xueyan 2387480110@qq.com
 * @LastEditTime: 2023-02-09 15:07:38
 * @FilePath: /web-knowledge/algorithm/链表/doublyLinkedList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  // 在任意位置删除
  removeAt(index){
    let current = undefined
    if(index >= 0 && index <= this.count){
      if(index === 0){
        // 开头
        current = this.head
        this.head = current.next
        this.head.prev = undefined
      } else if(index === this.count){
        // 结尾
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        // 中间
        current = this.getElementAt(index)
        let previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      } 
      this.count--
      return current.element
    } else {
      return undefined
    }
  }
}

// test
let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.push(4)
linkedList.removeAt(2)
console.log("removeAt-2", doublyLinkedList.toString())
linkedList.inset(5,2)
console.log("inset-5,2", doublyLinkedList.toString())
console.log("indexOf-5", doublyLinkedList.indexOf(5))