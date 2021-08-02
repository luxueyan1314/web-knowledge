//上树
import vNode from "./vNode";
import creatElement from "./creatElement";
import patchVnode from "./patchVnode"
export default function patch(oldNode, newNode){
  //判断oldNode是否是第一次上树，若是第一次，包装一层
  if( !oldNode.hasOwnProperty('sel') ){
    oldNode = vNode(oldNode.tagName.toLowerCase(), {},[], undefined , oldNode)
  }
  //比较oldNode是否与newNode同一个对象, 如果不同替换
  if(oldNode.key === newNode.key && oldNode.sel === newNode.sel){
    //精确比较
    // 判断是否有text节点
    if(newNode.text && (!newNode.children || newNode.children.length == 0)){
      if(oldNode.text !== newNode.text){
        oldNode.elm.innerText = newNode.text
      }
    }else{
      //清空
      oldNode.elm.innerHTML= ""
      //有子节点并且判断子节点是否相同
      if(newNode.children && !oldNode.children){
        for(let item of newNode.children){
          let chDom = creatElement(item)
          oldNode.elm.appendChild(chDom)
        }
      }else{
        //子节点比较
        patchVnode(newNode, oldNode)
      }
    }
  }else{
    //将新节点插入老节点后，并删除老节点
    let vNode = creatElement(newNode)
    oldNode.elm.parentNode.insertBefore(vNode, oldNode.elm)
  }

}