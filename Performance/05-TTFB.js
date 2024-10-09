window.onload = function() {
  // 首字节时间（Time To First Byte，TTFB）是指从用户发起请求到接收到服务器的第一个字节所花费的时间
  let TTFB = responseStart - navigationStart;
  console.log('TTFB:', TTFB);
};