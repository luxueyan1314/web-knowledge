import creatElement from "./creatElement";

export default function patchVnode(newNode, oldNode){
/**命中规则:
 * 1.新前旧前
 * 2.新后旧后
 * 3.新前旧后
 * 4.新后旧前
 * **/
  let newBeforeIndex = 0,
  newAfterIndex = 0,
  oldBeforeIndex = newNode.children.length - 1,
  oldAfterIndex = oldNode.children.length - 1,
  newChildren = newNode.children,
  oldChildren = oldNode.children

  while(newBeforeIndex <= newAfterIndex && oldBeforeIndex <= oldAfterIndex){
    // 新前旧前
    if(isEqualVnode(newChildren[newBeforeIndex], oldChildren[oldBeforeIndex]) ){
        newBeforeIndex++;
        oldBeforeIndex++;
    }else if(isEqualVnode(newChildren[newAfterIndex], oldChildren[oldAfterIndex])){
    //新后旧后
    newAfterIndex--
    oldAfterIndex--
    }else if(isEqualVnode(newChildren[newBeforeIndex],oldChildren[oldAfterIndex])){
    //新前旧后
    // 将新后全部元素挪到新前前面，继续匹配
    newChildren.unshift(oldChildren[oldAfterIndex])
    }else if(isEqualVnode(newChildren[newAfterIndex], oldChildren[oldBeforeIndex])){
    //新后旧后
    // 将新后全部元素挪到旧后后面，继续匹配

    }else{
    //循环查找有无相同，有相同置为undefined
        
    }
  }

  //旧节点指针先循环完，新节点前后指针之间为插入
  if(oldBeforeIndex < oldAfterIndex && newBeforeIndex >= newAfterIndex ){
      let len = (newAfterIndex - newBeforeIndex) + 1
      for(let i = 0; i < len; i++){
        let newElm = creatElement(newChildren[newBeforeIndex+i])
        oldNode.elm.appendChild(newElm);
    }
  }

}


function isEqualVnode(newNode, oldNode){
    if(oldNode.key === newNode.key && oldNode.sel === newNode.sel){
        return true
    }else{
        return false
    }
      
}