//将vnode创建为真正的dom，并返回
export default function creatElement(vnode){
  //目的是把 vnode 放到标杆pivot前
  //孤儿节点
  let domnode = document.createElement(vnode.sel)

  //如果有文本，并无自节点
  if(vnode.text != '' && (vnode.children == undefined || !vnode.children) ){
    domnode.innerText = vnode.text
    vnode.elm = domnode
  }else if(Array.isArray(vnode.children) && vnode.children.length){
    
  }
  return vnode
}