/**
 * 函数柯里化
 * 定义: 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
*/

// 1. 通用的柯里化函数
function curry(fn){
  // fn.length 获取函数的参数个数
  // 如果参数个数小于等于1, 则直接返回
  if(fn.length <= 1) return fn;
  return function curried(...args){
    if(args.length < fn.length){
      return function(){
        // 递归调用, 直到参数个数满足条件
        return curried.apply(null, args.concat([].slice.call(arguments)));
      }
    }
    return fn.apply(null, args);
  }
}

// 2. 柯里化函数的应用
function add(a, b, c){
  return a + b + c;
}

let curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6