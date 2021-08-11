import creatElement from "./creatElement";
import updateChildren from "./updateChildren"
export default function patchVnode(oldNode, newNode){
    if(oldNode === newNode) return
    //精确比较
    // 判断是否有text节点
    if(newNode.text && (!newNode.children || newNode.children.length == 0)){
      if(oldNode.text !== newNode.text){
        oldNode.elm.innerText = newNode.text
      }
    }else{
      //清空
      //有子节点并且判断子节点是否相同
      if(newNode.children && !oldNode.children){
        oldNode.elm.innerHTML= ""
        for(let item of newNode.children){
          let chDom = creatElement(item)
          oldNode.elm.appendChild(chDom)
        }
      }else{
        //子节点比较
        updateChildren(newNode, oldNode)
      }
    }

}