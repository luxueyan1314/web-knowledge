# 性能优化和指标

## 首屏加载时间

定义：首屏加载是指用户看到屏幕内页面渲染完成的时间， 注：是指dom元素加载完成的时间，包括图片、文本等

首屏加载时间计算的流程：
  * 1、通过MutationObserver监听被加载到dom树的dom
 * 2、判断监听到的dom是否在首屏中，将dom放入指定数组中，记录当下dom的变化时间
 * 3、同时，写一个防抖函数递归监听document.readyState，若状态为complete，为加载完成，
 * 4、并查找最后变化dom的时间减去performance.timingg.navigationStart的时间为本次计算结果
