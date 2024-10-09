class Promise{
  constructor(executor){
    this._status = 'pending'; // 状态 pending resolved rejected
    this._data = undefined; // 返回值
    this._callbacks = []; // 储存then/catch回调函数
    const that = this;
    // 失败回调
    function reject(val){
      if (that._status !== 'pending') return;
      that._status = 'rejected';
      that._data = val
      // 循环this._callbacks,执行回调函数
      for(let item of that._callbacks){
        setTimeout(() => {
          item.onRejected(val)
        });
      }
    };
    // 成功回调
    function resolve(val){
      if (that._status !== 'pending') return;
      that._status = 'resolved';
      that._data = val
      for(let item of that._callbacks){
        setTimeout(() => {
          item.onResolved(val)
        });
      }
    }
    try {
      // 执行本体
      executor(resolve, reject)
    } catch (error) {
      throw error
      reject(error)
    }
  }
  then(onResolved, onRejected){
    let that = this
    onResolved = typeof onResolved === "function" ? onResolved : (value) => value;
    onRejected = typeof onRejected === "function" ? onRejected : (reason) => { throw reason; };
    return new Promise((resolve, reject)=>{
       function handle(cb){
        // 1、当resolve/reject传入值非Promise,直接返回value。
        // 2、当resolve/reject传入值是Promise,返回当前promise结果值
        let res;
        try {
          res = cb(that._data)
        } catch (error) {
          reject(error)
        }
        if(res instanceof Promise){
          res.then(value => resolve(value), rerson => reject(rerson))
        } else {
          // 改变当前
          resolve(res)
        }
       }
      // 判断当前状态,应对先改变状态后绑定回调函数
     if(that._status === 'resolved'){
        setTimeout(()=>{
          handle(onResolved) //这里调用handle会改变this指向
        })
     } else if(that._status === 'rejected'){
       setTimeout(()=>{
        handle(onRejected) // 这里调用handle也相同，会改变this指向
       })
     } else {
      that._callbacks.push({
        onResolved: handle.bind(null, onResolved),
        onRejected: handle.bind(that, onRejected)
      })
     }
    })
  }
  catch(onRejected){
    this.then(()=>{}, onRejected)
  }
  static resolve(value){
    return new Promise((reslove,reject)=>{
      if(value instanceof Promise){
        // resolve将会处理value是Promise的情况, 等待传入的promise处理完再处理当前promise结果
        // 等会儿测试当前传入value的Promise为rejected的情况
        value.then(reslove, reject)
      } else {
        reslove(value)
      }
    })
  }
  static reject(reason){
    return new Promise((reslove, reject)=>{
      // 与 Promise.resolve 不同，Promise.reject 方法不会重用已存在的 Promise 实例。
      reject(reason)
    })
  }
  static all(promises){
    if(!promises instanceof Array){
      throw "执行失败，请传入Array"
    }
    return new Promise((reslove, reject)=>{
      // 循环全部promises，若全部执行结果为reslove，则执行成功。若有一个出错就出错
      let len = promises.length
      let res = new Array(len) //保存执行结果
      let resCount = 0
      for(let i = 0,p; (p = promises[i++]);){
        // 防止p不是Promise类型，使用Promise.resolve包裹
        Promise.resolve(p).then(value=>{
          resCount++
          res[i-1]= value
          if(resCount === len){ // 最后一个成功
            reslove(res)
          }
        }, reason=>{
          reject(reason)
        })
      }
    })
  }
  static race(promises){
    if(!promises instanceof Array){
      throw "执行失败，请传入Array"
    }
    return new Promise((resole, reject)=>{
      /**
       * 只要一个执行失败，整个all就返回失败
       * 只要一个执行成功，成功并返回其执行结果
       *  */ 
      for(let i = 0, p; (p = promises[i++]);){
        Promise.resolve(p).then(value=>{
          resole(value)
        }, resason => {
          reject(resason)
        })
      }
    })
  }
  static finally(){

  }
}

//测试Promise
// 案例1
// new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(1)
//   },1000)
// }).then(value=>{
//   console.log('value', value)
//   return Promise.resolve(2)
// }).then(value=>{
//   console.log('value', value)
// })

// 案例2
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.all([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
}).catch(err=>{
  console.log(err)
});

