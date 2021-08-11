import patch from './public/patch'
import h from './public/h';
let vNode = h('ul', {}, 'aa'),
oldNode1 = h('ul', {}, [
  h("li", {key: "A"}, "A"),
  h("li", {key: "B"}, "B"),
  h("li", {key: "C"}, "C"),
 
]), 
oldNode2 = h('ul', {}, [
  h("li", {key: "C"}, "C"),
  h("li", {key: "E"}, "E"),
  h("li", {key: "F"}, "F"),
]), 
view = document.getElementById("view"),
button =  document.getElementById("handleNode")

patch(view, oldNode1)

button.onclick = function(){
  patch(oldNode1, oldNode2)
}