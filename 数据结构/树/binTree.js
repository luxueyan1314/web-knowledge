import TreeNode from "./node";
class BinTree {
  constructor() {
    this.root = null
    this.count = 0
  }
  push(element) {
    let node = new TreeNode(element, null, null)
    let lastNode = this.getElement(this.root)
  }
  getElement(node) {
    if(this.isLeftAndRight(node)){
      if(!this.isLeftAndRight(node.left)){
        return node.left
      } else if(!this.isLeftAndRight(node.right)){
        return node.right
      }
    } else {
      return node
    }
  }
  // 判断是否有左右结点
  isLeftAndRight(node){
    return node.left && node.right ? true : false
  }
}