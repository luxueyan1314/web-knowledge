import Node from "./node.js"
class LinkedList{
  constructor(){
    this.head = null
    this.count = 0
  }
  getElement(index){
    if(!this.head) return
    let current = this.head
    let count = 0
    while(count < index){
      current = current.next
      count++
    }
    return current
  }
  push(e){
    let newNode = new Node(e)
    if(!this.head){
      this.head = newNode
    } else {
      let prev = this.getElement(this.count-1)
      prev.next = newNode
    }
    this.count++
  }
  insert(i,e){
    if(i>this.count) return null
    let newNode = new Node(e)
    if(i === 0){
      newNode.next = this.head
      this.head = newNode
    } else {
      let prev = this.getElement(i-1)
      newNode.next = prev.next
      prev.next = newNode
    }
    this.count++
  }
  findIndex(i){
    if(i >= this.count) return null
    let current = this.head
    if(i > 0){
      current = this.getElement(i)
    }
    return current.e
  }
  remove(i){
    let current = this.head
    if(i === 0){
      this.head = this.head.next
    }else if(i > 0 && i <= this.count){
      let prev = this.getElement(i-1)
      current = prev.next
      prev.next = current.next
    }
    this.count--
    return current
  }
  size(){
    return this.count
  }
  toString(){
    let list = []
    let temp = this.head
    while(temp){
      list.push(temp.e)
      temp = temp.next
    }
    return list.join(',')
  }
  [Symbol.iterator](){
    let current = this.head
    return { 
      next(){
        if(!current) return {done: true}
        let value = current.e
        current = current.next
        return {
          value: value,
          done: false
        }
      }
    }
  }
}
let linkedList = new LinkedList()
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.insert(3,4)
console.log('size',linkedList.toString())
linkedList.remove(3)
console.log('findIndex',linkedList.findIndex(3))

for(let item of linkedList){
  console.log("item=------",item)
}