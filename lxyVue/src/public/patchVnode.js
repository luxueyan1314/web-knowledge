import creatElement from "./creatElement";

export default function patchVnode(newNode, oldNode) {
  /**命中规则:
   * 1.新前旧前
   * 2.新后旧后
   * 3.新前旧后
   * 4.新后旧前
   * **/
  let newBeforeIndex = 0,
    newAfterIndex = newNode.children.length - 1,
    oldBeforeIndex = 0,
    oldAfterIndex = oldNode.children.length - 1,
    newChildren = newNode.children,
    oldChildren = oldNode.children;

  while (newBeforeIndex <= newAfterIndex && oldBeforeIndex <= oldAfterIndex) {
    // 新前旧前
    if (
      isEqualVnode(newChildren[newBeforeIndex], oldChildren[oldBeforeIndex])
    ) {
      newBeforeIndex++;
      oldBeforeIndex++;
    } else if (
      isEqualVnode(newChildren[newAfterIndex], oldChildren[oldAfterIndex])
    ) {
      //新后旧后
      newAfterIndex--;
      oldAfterIndex--;
    } else if (
      isEqualVnode(newChildren[newAfterIndex], oldChildren[oldBeforeIndex])
    ) {
      // 新后旧前
      // 将当前节点移动到旧后的后面（所有未处理节点的后面）
      // 新后指针往上移动
      // 旧前节点置为undefined
      let newElm = creatElement(newChildren[newAfterIndex])
      let lever = oldChildren[oldAfterIndex].elm;
      oldNode.elm.insertAfter(newElm,lever);
      oldChildren[oldBeforeIndex] = undefined;
      newAfterIndex--;
    } else if (
      isEqualVnode(newChildren[newBeforeIndex], oldChildren[oldAfterIndex])
    ) {
      // 新前旧后
      // 将当前节点移动到旧前的前面（所有已处理节点的后面）
      // 新前指针往下移动
      // 旧后节点置为undefined
      
      let newElm = creatElement(newChildren[newBeforeIndex])
      let lever = oldChildren[oldBeforeIndex].elm;
      oldNode.elm.insertBefore(newElm,lever);
      oldChildren[oldAfterIndex] = undefined;
      newBeforeIndex++;

    } else {
      //循环查找有无与新前相同，有相同置为undefined, 并将此节点放到旧前的前面（未处理节点前面）
      let index = oldChildren.findIndex(item=>{
        return isEqualVnode(newChildren[newBeforeIndex], item)
      })
      console.log("index----------", index)
      if(index > -1){
        oldChildren[index] = undefined
      }
      let newElm = creatElement(newChildren[newBeforeIndex])
      let lever = oldChildren[oldBeforeIndex].elm;
      oldNode.elm.insertBefore(newElm,lever);
      newBeforeIndex++;
    }
  }
  console.log(
    `oldBeforeIndex=${oldBeforeIndex}; oldAfterIndex=${oldAfterIndex}, newBeforeIndex=${newBeforeIndex}, newAfterIndex=${newAfterIndex}`,oldChildren
  );
  //旧节点指针先循环完，新节点前后指针之间为插入
  if (oldBeforeIndex > oldAfterIndex) {
    let len = newAfterIndex - newBeforeIndex + 1;
    for (let i = 0; i < len; i++) {
      let newElm = creatElement(newChildren[newBeforeIndex + i]);
      oldNode.elm.appendChild(newElm);
    }
  } else if (newAfterIndex < newBeforeIndex) {
    // 删除的情况， 新节点指针先循环完毕
    // 删除旧节点前后指针之间节点
    let len = oldAfterIndex - oldBeforeIndex + 1;
    for (let i = 0; i < len; i++) {
      let chElm = oldChildren[oldBeforeIndex + i];
      chElm&&oldNode.elm.removeChild(chElm.elm);
    }
  }
}

function isEqualVnode(newNode, oldNode) {
  if (oldNode.key === newNode.key && oldNode.sel === newNode.sel && oldNode.text === newNode.text ) {
    return true;
  } else {
    return false;
  }
}
