import vNode from "./vNode";
export default function h(sel, data, c){
  if(typeof c == "string" || typeof c == "number"){
   return vNode(sel, data,  undefined, c, undefined, undefined)
  }else if( Array.isArray(c)){
    let children = []
    for(let item of c){
      children.push(item)
    }
    return vNode(sel, data, children, c, undefined, undefined)
  }else if( Object.prototype.toString.call(c) == "[object Object]" && c.hasOwnProperty('sel')){
    return vNode(sel, data, c, undefined,  undefined, undefined)
  }
}