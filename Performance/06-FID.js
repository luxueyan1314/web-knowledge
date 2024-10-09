// FID(first input delay) 首次输入延迟，标准是用户触发后，浏览器的响应时间，标准是小于100ms

// 1. 通过PerformanceObserver来收集FID
// 2. 通过entry.startTime 来判断是否是用户输入
// 3. 通过entry.processingStart - entry.startTime来计算延迟时间
// 4. 通过entry.duration来判断是否是用户输入
const entriesHandler = (list) => {
  for(const entry of list.getEntries()){
    const FID = entry.processingStart - entry.startTime;
    console.log('FID:', entry.duration);
  }
}
const observer = new PerformanceObserver(entriesHandler);
observer.observe({type: 'first-input', buffered: true});