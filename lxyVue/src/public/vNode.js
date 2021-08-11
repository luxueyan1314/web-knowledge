export default function vNode(sel, data, children, text, elm, key){
  key = data === undefined ? undefined : undefined||data.key
  return {
    sel,
    data, 
    children, 
    text, 
    elm, 
    key
  }
}