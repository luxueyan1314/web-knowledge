// 白屏时间FP
const entryHandler = (list) => {
  for(const entry of list.getEntries()){
    if(entry.name === 'first-paint'){
      observer.disconnect(); // 断开观察
      let FP = entry.startTime; // 白屏时间
      console.log('FP:', FP);
    }
  }
}
// PerformanceObserver 是一个接口，用于监视与性能相关的信息
const observer = new PerformanceObserver(entryHandler);
// 观察页面中的绘制事件 entryTypes: ['paint'] 表示观察绘制事件
observer.observe({type: 'paint', buffered: true});




