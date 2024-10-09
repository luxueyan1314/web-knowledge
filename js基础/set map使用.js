
    // set使用 开始===================
    let set = new Set()
    set.add(1)
    console.log("size", set.size)

    set.delete(1) // 删除value
    set.add(2) // 添加value
    console.log("has(1)", set.has(1))
    console.log(Array.from(set, x=>x+1)) //转为数组

    set.clear() //清除
    console.log('size', set.size)

    // 遍历操作
    set.add(1)
    set.add(2)
    set.add(3)
    // 返回键值的遍历器
    for(let item of set.values()){
      console.log("values", item)
    }
    // 返回键名的遍历器
    for(let item of set.keys()){
      console.log("key", item)
    }
    // 返回键值对的遍历器
    for(let item of set.entries()){
      console.log("entries", item)
    }

    // set使用 结束===================


    // WeakSet使用 开始================
    /*
      首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
      其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
      也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用
      的内存，不考虑该对象还存在于 WeakSet 之中。

      Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题.

      WeakSet 结构有以下三个方法。
        WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
        WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
        WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

        WeakSet 没有size属性，没有办法遍历它的成员。
    */
    const ws = new WeakSet();
    let a = {name: "a"}
    ws.add(a)
    a = null //a被垃圾回收，ws中a也不存在了
    console.log(ws)
    // WeakSet结束 开始================

    // Map使用 开始================
    /*
      Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，
      各种类型的值（包括对象）都可以当作键。
      也就是说，Object 结构提供了“字符串—值”的对应，
      Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
      如果你需要“键值对”的数据结构，Map 比 Object 更合适。
    */
   let map = new Map()
   let o = {a: 1}
   map.set(o, 'centent')
   console.log('mag.get',map.get(o))
  // map参数也可以接受一个数组
   const m = new Map([
      ['name', '张三'],
      ['title', 'Author']
    ]);

    m.size // 2
    m.has('name') // true
    m.get('name') // "张三"
    m.has('title') // true
    m.get('title') // "Author"

    // map的key值都是字符串的情况下可以转为object
    function strMapToObj(strMap) {
      let obj = Object.create(null);
      for (let [k,v] of strMap) {
        obj[k] = v;
      }
      return obj;
    }
    function strMapToJson(strMap) {
      return JSON.stringify(strMapToObj(strMap));
    }
    strMapToJson(m)

    // 如果读取一个未知的键，则返回undefined。
    new Map().get('asfddfsasadf') // undefined
    
    // Map使用 结束================


    // WeakMap使用 开始============
    /*
    WeakMap与Map的区别有两点。
    首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
    其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。

    WeakMap 与 Map 在 API 上的区别主要是两个，
      一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。
      二是无法清空，即不支持clear方法。
      因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
    */
   let weakmap = new WeakMap()
   let obj = {'name': 1}
   weakmap.set(obj, 'content')
   console.log(weakmap.get(obj))
    // WeakMap使用 结束============

