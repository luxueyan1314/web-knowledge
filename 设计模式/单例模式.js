/**
 * 单例模式
 * 保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 例如：vuex中的store，全局的弹窗管理器
*/

// 使用class实现单例模式
class Singleton {
  constructor(name){
    this.name = name;
  }
  static getInstance(name){
    this.instance = this.instance || new Singleton(name);
    return this.instance
  }
}

let a = Singleton.getInstance('a');
let b = Singleton.getInstance('b');
console.log(a === b); // true