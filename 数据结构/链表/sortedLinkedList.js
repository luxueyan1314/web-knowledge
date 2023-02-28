import Node from "./node.js"
import LinkedList from "./linkedList.js"
import { defaultEquals } from '../util/index.js'

function defaultCompare(a, b) { 
  if (a === b) { // {1} 
  return 0; 
  } 
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2} 
}
const Compare = { 
  LESS_THAN: -1, 
  BIGGER_THAN: 1 
};

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare){
    super(equalsFn)
    this.compareFn = compareFn
  }
  getIndexNextSortedElement(element){
    let current = this.head
    
  }
}