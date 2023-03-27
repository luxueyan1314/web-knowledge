import Node from "./node.js";
import { defaultCompare, Compare} from '../util/index.js'
// 创建二叉搜索树
/**
 *   insert(key)：向树中插入一个新的键。
     search(key)：在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回false。
     inOrderTraverse()：通过中序遍历方式遍历所有节点。
     preOrderTraverse()：通过先序遍历方式遍历所有节点。
     postOrderTraverse()：通过后序遍历方式遍历所有节点。
     min()：返回树中最小的值/键。
     max()：返回树中最大的值/键。
     remove(key)：从树中移除某个键。
 */
class BinarySearchTree {
  constructor(compareFn = defaultCompare){
    this.compareFn = compareFn
    this.root = null
  }
  insert(key){
    if(!this.root){
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key){
    if(this.compareFn(key, node.data) === Compare.LESS_THAN){
      if(!node.left){
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else { 
      if(!node.right){
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  search(key){
  }
  // 中序遍历 左结点 根 右结点
  inOrderTraverse(callback){ 
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback){
    if(node != null){
      this.inOrderTraverseNode(node.left, callback)
      callback(node.data)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  // 先序遍历 根结点 左结点 右结点
  // 堆栈实现
  /** 
   * 1、遇到一个结点就把它压入栈中
   * 2、循环左子树结点结束后，在从栈顶取出元素，并访问其元素，指针指向其元素右子树
   * 3、对右子树继续处理上两步重复处理
   * */ 
  preOrderTraverse(callback){ 
    let q = []
    let node = this.root
    while(node || q.length){
      while(node) {
        q.push(node)
        callback(node.data)
        node = node.left
      } 
      
      if(q.length){
        let curNode = q.pop()
        node = curNode.right
      }
    }
  } 
  // 后序遍历 左结点 右结点 根结点
  postOrderTraverse(callback){ 
    let q = []
    let node = this.root
    while(node || q.length){
      while(node) {
        q.push(node)
        node = node.left
      } 
      if(q.length){
        let curNode = q.pop()
        node = curNode.right
      }
    }
  }
  storeyOrderTraverse(callback){
    // 层级遍历 队列实现
    let q = []
    q.push(this.root) 
    while(q.length){
      let curNode = q.shift()
      callback(curNode.data)
      //左右子节点入队
      curNode.left && q.push(curNode.left)
      curNode.right && q.push(curNode.right) 
    }
  }
  // 获取最小值
  min(){
    let node = this.root
    while(node.left){
      node = node.left
    }
    return node
  }
  // 获取最大值
  max(){
    let node = this.root
    while(node.right){
      node = node.right
    }
    return node
  }
  remove(key){ //从树中移除
    // if()
  }
}
const tree = new BinarySearchTree(); 
tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(7); 
tree.insert(6); 
tree.insert(8); 
// tree.inOrderTraverse((item => console.log(item))); //中序遍历
// tree.preOrderTraverse((item => console.log(item))); //先序遍历
tree.postOrderTraverse((item => console.log(item)))// 后序遍历
