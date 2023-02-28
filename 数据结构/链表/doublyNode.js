import Node from "./node.js"
// 双向链表
export default class DoublyNode extends Node{
  constructor(element, next, prev){
    super(element,next);
    this.prev = prev
  }
}