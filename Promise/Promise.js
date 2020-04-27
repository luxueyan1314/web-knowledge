(function(window) {
    const PENDING = "pending";
    const REJECTED = "rejected";
    const RESOLVED = 'resolved';

    function Promise(executor) {
        this._status = "pending"; //状态
        this._data = undefined; //返回值
        this._callbacks = []; //储存then/catch回调函数
        const that = this;

        function reject(val) {
            if (that._status !== PENDING) return; //只有状态为等待才能执行
            that._status = REJECTED;
            that.data = val;
            if (that._callbacks.length > 0) {
                that._callbacks.forEach(item => {
                    setTimeout(() => {
                        item.onRejected(val);
                    })
                })
            }
        }

        function resolve(val) {
            if (that._status !== PENDING) return; //只有状态为等待才能执行
            that._status = RESOLVED;
            that.data = val;
            if (that._callbacks.length > 0) {
                that._callbacks.forEach(item => {
                    setTimeout(() => {
                        item.onResolved(val);
                    })
                })
            }
        }

        try {
            executor(resolve, reject); //Promise回调函数
        } catch (error) { //抛出异常
            reject(error)
        }

    }
    /**
     * 定义then方法,
     */
    Promise.prototype.then = function(onResolved, onRejected) {
            const that = this;
            onResolved = typeof onResolved === "function" ? onResolved : (value) => value;
            onRejected = typeof onRejected === "function" ? onRejected : (reason) => { throw reason; };

            return new Promise((resolve, reject) => {
                //判断当前状态,应对先改变状态后绑定回调函数
                /**
                 * 1、当resolve/reject传入值非Promise,直接返回value。
                 * 2、当resolve/reject传入值是Promise,返回当前promise结果值
                 * 3、如果当前状态是Pending，存储回调函数
                 */
                function handle(cb) {
                    try {
                        let res = cb(that.data);
                        //
                        if (res instanceof Promise) { //当resolve/reject传入值是Promise,返回当前promise结果值
                            // res.then(value=> resolve(value), reason=>reject(reject));//也可这样写
                            res.then(resolve, reject) //简化写法
                        } else {
                            resolve(res) // 改变return的promise状态为resolved
                        }
                    } catch (error) {
                        reject(error) //异常处理,改变return的promise状态为rejected
                    }
                }

                if (that._status === RESOLVED) { //成功 
                    setTimeout(() => { //这里setTimeOut代表微任务，后面有文章会讲
                        handle(onResolved);
                    })
                } else if (that._status === REJECTED) { //失败
                    setTimeout(() => { //这里setTimeOut代表微任务，后面有文章会讲
                        handle(onRejected);
                    })
                } else { //等待 如果当前状态是Pending，存储回调函数
                    this._callbacks.push({
                        onResolved(value) { //这里包一层是为了改变return的Promise的状态
                            handle(onResolved)
                        },
                        onRejected(reason) {
                            handle(onRejected);
                        }
                    });
                }
            })
        }
        /**
         * 定义catch方法,
         */
    Promise.prototype.catch = function(onRejected) {
            this.then(undefined, onRejected);
        }
        /**
         * 定义resolve方法
         */
    Promise.resolve = function(value) {
            const that = this;
            return new Promise((resolve, reject) => {
                if (value instanceof Promise) {
                    value.then(resolve, reject);
                } else {
                    resolve(value)
                }
            })
        }
        /**
         * 定义reject方法
         */
    Promise.reject = function(reason) {
        const that = this;
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    /**
     * 定义all方法
     */
    Promise.all = function(promise) {
            if (Object.prototype.toString.call(promise) !== "[object Array]") {
                throw "执行失败，请传入Array";
            }
            var values = new Array(promise.length); //定义数组存放返回值
            var returnCount = 0; //计数器；
            return new Promise((resolve, reject) => {
                promise.forEach((p, index) => {
                    //Promise.resolve包裹p，确保p为Promise
                    Promise.resolve(p).then(value => {
                        returnCount++;
                        values[index] = value;
                        if (returnCount == promise.length) {
                            resolve(values);
                        }
                    }, reason => { //只要一个执行失败，整个all就返回失败
                        reject(reason);
                    })
                })
            })
        }
        /**
         * 定义race方法
         */
    Promise.race = function(promise) {
        if (Object.prototype.toString.call(promise) !== "[object Array]") {
            throw "执行失败，请传入Array";
        }
        return new Promise((resolve, reject) => {
            promise.forEach((p, index) => {
                //Promise.resolve包裹p，确保p为Promise
                Promise.resolve(p).then(value => {
                    //返回最先执行完的值
                    resolve(value);
                }, reason => {
                    reject(reason);
                })
            })
        })
    }

    window.Promise = Promise;
})(window)