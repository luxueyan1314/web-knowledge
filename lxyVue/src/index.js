import patch from './public/patch'
import h from './public/h';
let vNode = h('ul', {}, 'aa'),
oldNode1 = h('ul', {}, [
  h("li", {}, "A"),
  h("li", {}, "B"),
  h("li", {}, "C"),
 
]), 
oldNode2 = h('ul', {}, [
  h("li", {}, "C"),
  h("li", {}, "B"),
  h("li", {}, "A"),
]), 
view = document.getElementById("view"),
button =  document.getElementById("handleNode")

patch(view, oldNode1)

button.onclick = function(){
  patch(oldNode1, oldNode2)
}