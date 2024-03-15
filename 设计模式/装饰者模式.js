/**
 * 装饰者模式
 * 定义：是在不改变原对象的基础上，动态的给对象增加一些额外的职责
 * 
 * 应用案例：在函数执行前后添加方法
*/
Function.prototype.before = function(beforFn){
  let _self = this; // 保存原函数的引用
  return function(){
    console.log(this === window) // true
    // 这里的this指向的是window
    beforFn.apply(this, arguments);
    return _self.apply(this, arguments);
  }
}
Function.prototype.after = function(afterFn){
  let _self = this;
  return function(){
    _self.apply(this, arguments);
    return afterFn.apply(this, arguments);
  }
}
function fn(){
  console.log('fn')
}

// 执行前后添加方法
function beforeFn1(){
  console.log('beforeFn1')
}

function afterFn1(){
  console.log('afterFn1')
}

fn = fn.before(beforeFn1).after(afterFn1);
fn(); // beforeFn1 fn afterFn1
