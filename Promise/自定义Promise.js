
import {Promise} from "./Promise.js"
console.log("Promise", Promise)
var p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
      reslove(2)
  }, 100)
})
p1.then(value => {
  console.log("resolved2-then1------", value)
  return 1
}).then(value => {
  console.log("resolved2-then2------", value)
}).catch(reason => {
  console.log("reject1-------", reason)
})