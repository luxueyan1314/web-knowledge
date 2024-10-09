// 累计布局偏移值 CLS
let clsValue = 0;
let clsCount = [];

let sessionValue = 0;
let sessionEntries = [];

const entryHandler = (list) => {
  for(const entry of list.getEntries()){
   //只将不带有最近用户输入标志的布局偏移计算在内
    if(!entry.hadRecentInput){
      const firstSessopnEntry = sessionEntries[0]; // 第一个布局偏移
      const lastSessionEntry = sessionEntries[sessionEntries.length - 1]; // 最后一个布局偏移

      /**
       * 如果条目与上一条目的相隔时间小于1秒且与绘画中第一个条目的时间相隔小于5秒，那么将其添加到会话中。否则，开始新的会话。
      */
      if(sessionValue&& entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessopnEntry.startTime < 5000){
        sessionEntries.push(entry);
        sessionValue += entry.value;
      } else {
        sessionEntries = [entry];
        sessionValue = entry.value;
      }

      // 如果当前会话值大于当前CLS值，则更新CLS值及其相关条目
      if(sessionValue > clsValue){
        clsValue = sessionValue;
        clsCount = sessionEntries;
        observer.disconnect();
      }
      // 获取cls值
      console.log('CLS:', clsValue);
    }
  }
}

const observer = new PerformanceObserver(entryHandler);
observer.observe({type: 'layout-shift', buffered: true});

/**
 * 计算过程：
 * 1、通过PerformanceObserver来收集CLS
 * 2、通过entry.hadRecentInput来判断是否是用户输入
 * 3、通过entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessopnEntry.startTime < 5000来判断是否是同一个会话
 * 4、通过sessionValue > clsValue来判断是否更新CLS值
 * 5、获取cls值
 * 
*/