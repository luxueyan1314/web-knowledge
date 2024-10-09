/**
 * 首屏加载时间和首页加载时间不一样， 首屏指的是用户看到屏幕内页面渲染完成的时间
 * 比如首页需要好几屏展示，这种情况下屏幕以外的元素不考虑在内
*/
// 介绍MutationObserver
/* MutationObserver是一个构造函数，用于监听dom变化，当dom发生变化时，会触发回调函数
* MutationObserver的实例化需要传入一个回调函数，该回调函数会在dom发生变化时触发
* MutationObserver的实例化还需要传入一个配置对象，该对象中的属性有childList、attributes、characterData、subtree、attributeOldValue、characterDataOldValue、attributeFilter
*/
// 实例
/**
 * MutationObserver回调函数参数
 * mutationsList: MutationRecord对象的数组，每个对象代表一个dom变化
 * observer: MutationObserver对象
*/
const target = document.getElementById('target');
let observerTest = new MutationObserver((mutationsList, observer) => {
  for(let mutation of mutationsList){
    console.log(mutation.type);
  }
});
observerTest.observe(target, // 监听目标节点
  {
    attributes: true, // 监听属性的变化
    childList: true, // 监听子节点的变化
    subtree: true // 监听所有后代节点的变化
  });
target.classList.add('active'); // 触发监听
setTimeout(() => {
  observerTest.disconnect(); // 断开监听
}, 1000);

/* 
* document.readyState介绍
* document.readyState属性返回当前文档的状态，有loading、interactive、complete
* loading: 文档正在加载
* interactive: 文档已经加载完成，正在解析
* complete: 文档解析完成
*/
// 实例
console.log('document', document.readyState); // loading
document.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded 当文档加载完成时触发
 
  console.log('document', document.readyState); // interactive
});
window.onload = () => {
  console.log('document', document.readyState); // complete
};

/**
 * 计算首屏加载时间流程：
 * 1、利用MutationObserver监听document对象，每当dom变化时触发该事件
 * 2、判断监听到的dom是否在首屏内，将该dom放到指定的数组中，记录下当前dom变化的时间点
 * 3、在MutationObserver的callback函数中，通过防抖函数，监听document.readyState状态
 * 4、当document.readyState为complete时，计算首屏加载时间，停止定时器和取消对document的监听
 * 5、遍历存放dom的数组，找出最后变化节点的时间，用该时间点减去performance.timing.navigationStart即为首屏加载时间
*/
let timer = null;
let isOnLoaded = false; // 是否已经加载完成
let entries = []; // 存放首屏内的dom
let observer = null;
// 防抖函数，监听document.readyState状态
function checkDOMChange(callback){
  // 清空定时器requestAnimationFrame
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(() => {
    if(document.readyState === 'complete'){
      isOnLoaded = true;
    }
      // 如果加载完成，计算首屏加载时间
    if(isOnLoaded){
      // 获取渲染时间
      const renderTime = getRenderTime();
      // 取消监听
      observer.disconnect();
      callback(renderTime);
    }else{
      //递归调用，监听dom变化
      checkDOMChange(callback);
    }
  });
 
};
// 获取渲染时间
function getRenderTime(){
 // 根据entries数组中取最大的时间
  let max = 0;
  // 遍历entries数组
  console.log(entries, 'entries');
  entries.forEach(entry => {
    if(entry.time > max){
      max = entry.time;
    }
  });
  // performance.timing.navigationStart 页面的起始时间
  return max - performance.timing.navigationStart;
}

let viewportHeight = window.innerHeight; // 视口高度
let viewportWidth = window.innerWidth; // 视口宽度
// dom对象是否在屏幕内
function isInScreen(dom){
  const rect = dom.getBoundingClientRect();
  // 判断dom的left和top是否小于视口的宽度和高度
  return rect.left < viewportWidth  && rect.top < viewportHeight;
}
// 外部通过callback函数获取首屏加载时间
function observeFirstScreenPaint(callback){
  // 忽略dom
  const ignoreTags = ['SCRIPT', 'STYLE', 'META', 'LINK'];
  // document中所用渲染的dom，都会触发该事件
  observer = new MutationObserver((mutationsList, observer) => {
    // 监听dom变化
    checkDOMChange(callback);
    const entry = {children:[]} // 存放子节点
    for(const mutation of mutationsList){
      // mutation.addedNodes 为添加的节点
      if(mutation.addedNodes.length && isInScreen(mutation.target)){
        // 遍历添加的节点
        for(const node of mutation.addedNodes){
          // 忽略script、style、meta、link标签
          // node.nodeType === 1 为元素节点
          //nodeType: 节点类型 1：元素节点 2：属性节点 3：文本节点 8：注释节点 9：document 11：documentFragment
          if( node.nodeType === 1 && !ignoreTags.includes(node.target) && isInScreen(node)){
            entry.children.push(node); // 将节点放入entry.children数组中
          }
        }
      }
    }
    if(entry.children.length){
      entry.time = new Date().getTime(); // 记录当前时间
      entries.push(entry); // 将entry放入entries数组中
    }
  })
  observer.observe(document, {
    childList: true, // 监听子节点的变化
    subtree: true, // 监听所有后代节点的变化
    characterData: true,// 监听文本节点的变化
    attributes: true // 监听属性的变化
  });
}
 
// 通过回调函数，拿到首屏加载时间
observeFirstScreenPaint((data) => {
  console.log(data, '首屏加载时间');
});

/**
 * 总结首屏加载时间
 * 首屏加载是指用户看到屏幕内页面渲染完成的时间， 注：是指dom元素加载完成的时间，包括图片、文本等
 * 
 * 首屏加载时间计算的流程：
 * 1、通过MutationObserver监听被加载到dom树的dom
 * 2、判断监听到的dom是否在首屏中，将dom放入指定数组中，记录当下dom的变化时间
 * 3、同时，写一个防抖函数递归监听document.readyState，若状态为complete，为加载完成，
 * 4、并查找最后变化dom的时间减去performance.timingg.navigationStart的时间为本次计算结果
*/
