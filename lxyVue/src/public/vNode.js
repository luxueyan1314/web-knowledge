export default function vNode(sel, data, children, text, elm, key){
  console.log("node------", {
    sel,
    data, 
    children, 
    text, 
    elm, 
    key
  })
  return {
    sel,
    data, 
    children, 
    text, 
    elm, 
    key
  }
}