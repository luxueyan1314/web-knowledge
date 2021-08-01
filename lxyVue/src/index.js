import patch from './public/patch'
import h from './public/h';
let vNode = h('ul', {}, 'aa'),
oldNode = h('ul', {}, [
  h("li", {}, "文字1"),
  h("li", {}, "文字2")
]), 
container = document.getElementById("container"),
button =  document.getElementById("handleNode")

patch(container, vNode)

button.onclick = function(){
  patch(vNode, oldNode)
}