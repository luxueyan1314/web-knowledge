import Node from "./node.js";
import BinarySearchTree from './binarySearchTree.js'
import { defaultCompare, Compare} from '../util/index.js'
// 自平衡树
/**
 * 旋转规则：
 * 左-左旋转LL：插入结点在受影响结点的左子树的左子树上
 * 右-右旋转RR：插入结点在受影响结点的右子树的右子树上
 * 左-右旋转LR：插入结点在受影响结点的左子树的右子树上
 * 右-左旋转RR：插入结点在受影响结点的右子树的左子树上
 * **/

// 为了避免直接在代码中处理平衡因子的数值，我们还要创建一个用来作为计数器的JavaScript 常量。
const BalanceFactor = { 
  UNBALANCED_RIGHT: 1, 
  SLIGHTLY_UNBALANCED_RIGHT: 2, 
  BALANCED: 3, 
  SLIGHTLY_UNBALANCED_LEFT: 4, 
  UNBALANCED_LEFT: 5 
};
class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare){
    this.compareFn = compareFn
    this.root = null
  }
  getHeight(node){
    if(!node) return -1
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) +1
  }
  // 高度差
  getBalanceFactor(node){
    const heightDifference = this.getHeight(node.left) - this.getHeight(node.right)
    switch(heightDifference){
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
        break;
      case 1: 
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
        break;
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
        break;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
        break;
      default:
        return BalanceFactor.BALANCED
    }
  }
  inset(key){
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key){
    if(!node){
      return new Node(key)
    } else if(this.compareFn(key, node.data) === Compare.LESS_THAN){
      node.left = this.insertNode(node.left, key)
    } else if(this.compareFn(key, node.data) === Compare.BIGGER_THAN){ 
      node.right = this.insertNode(node.right, key)
    } else {
      return node //重复的项
    }

    // 如果需要，将进行平衡操作
     let BalanceFactor  = this.getBalanceFactor(node)
     if(BalanceFactor === BalanceFactor.UNBALANCED_LEFT){
      if(this.compareFn(key, node.left.data) === Compare.LESS_THAN){
        this.rotationLL(node)
      } else {
        this.rotationLR(node)
      }
     } 
     if(BalanceFactor === BalanceFactor.UNBALANCED_RIGHT){
      if(this.compareFn(key, node.left.data) === Compare.BIGGER_THAN){
        this.rotationRR(node)
      } else {
        this.rotationRL(node)
      }
     }
  }
  rotationLL(node){
    // node 受影响的结点
    let temp = node.left //需挪动结点
    node.left = temp.right
    temp.right = node
    return temp
  }
  rotationRR(node){
    let temp = node.right
    node.left = temp.left
    temp.left = node
    return temp
  }
  rotationLR(node){
    node.left = this.rotationLL(node)
    return this.rotationRR(node)
  }
  rotationRL(node){
    node.right = this.rotationRR(node)
    return this.rotationLL(node)
  }

}