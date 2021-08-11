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
    patchVnode(oldNode, newNode)
  }else{
    //将新节点插入老节点后，并删除老节点
    let vNode = creatElement(newNode)
    oldNode.elm.parentNode.insertBefore(vNode, oldNode.elm)
  }

}