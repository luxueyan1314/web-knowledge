// FCP首次内容渲染时间，页面任意一部分内容首次渲染的时间
// 通过PerformanceObserver来监听performanceEntry，找到第一个FCP的时间
const entryHandler = (list) => {
  for(const entry of list.getEntries()){
    if(entry.name === 'first-contentful-paint'){
      observer.disconnect(); // 断开观察
      let FCP = entry.startTime; // 首次内容渲染时间
      console.log('FCP:', FCP);
    }
  }
}
// PerformanceObserver 是一个接口，用于监视与性能相关的信息
const observer = new PerformanceObserver(entryHandler);
// 观察页面中的绘制事件 entryTypes: ['paint'] 表示观察绘制事件
observer.observe({type: 'paint', buffered: true});
