
/*
* performance.timing计算
* navigationStart: 准备加载页面的起始时间
* domComplete: 页面解析完成的时间
*/
window.onload = function() {
  let {domComplete, navigationStart} = performance.timing;
  let fristScreenTime = domComplete - navigationStart;
  console.log('fristScreenTime', fristScreenTime)
}
