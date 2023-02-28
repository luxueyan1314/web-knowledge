// 循环队列---击鼓传花游戏
import Queue from './Queue.js'

function HotPotato(elementsList, num){
  let queue = new Queue()
  const elimitatedList = []

  // 循环进入队列
  for(let i = 0; i < elementsList.length; i++){
    queue.enqueue(elementsList[i])
  }

  while(queue.size() > 1){
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue())
    }
    let val = queue.dequeue()
    elimitatedList.push(val)
  }
   
  return {
    elimitatedList,
    winner: queue.dequeue()
  }
}
console.log(HotPotato(['小红', '小花', '小虎', '小亮'], 3))