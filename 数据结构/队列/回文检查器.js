// 双端队列---回文检查器
import DoubleQueue from './DoubleQueue.js'
function palidromeChecker(aString){
  //循环存入队列
  if(!aString){
    return false
  }
  let queue = new DoubleQueue()
  let lowerString = aString.toLocaleLowerCase().split('')
  for(let i=0; i < lowerString.length; i++){
    queue.enqueueBack(lowerString[i])
  }

  let isEqual = true
  // 判断栈顶与栈尾是否相同
  while(isEqual&&queue.size()>1){
    if(queue.removeFront() !== queue.removeBack()){
      isEqual = false
    }
  }
  console.log('isEqual', isEqual)
  return isEqual
}
palidromeChecker('racecar')