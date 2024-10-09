// LCP 页面最大内容渲染时间
const lcp = new PerformanceObserver((entryList, observer) => {
  if(observe) observe.disconnect();
  const entries = entryList.getEntries();
  const lastEntry = entries[entries.length - 1];
  console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
}
);
const observe = lcp.observe({type: 'largest-contentful-paint', buffered: true});