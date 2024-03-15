/**
 * 代理模式
 * 定义：代理对象与本体对象具有一致的接口，对外提供一致的服务，代理对象在本体对象的基础上进行了功能的增强。
 * 实例：图片预加载
*/

/**
 * 图片预加载
*/
let relImage = (function() {
  let img = document.getElementById('myImg');
   return {
    setSrc: function(src) {
      img.src = src;
    }
   }
})();

let proxyImage = (function() {
  let img = new Image();
  img.onload = function(){
    relImage.setSrc(this.src);
  }
  return {
    setSrc: function(src) {
      relImage.setSrc('../images/loading.gif');
      img.src = src;
    }
  }
})();

// 加载图片
proxyImage.setSrc('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');