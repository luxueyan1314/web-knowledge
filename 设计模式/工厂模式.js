/**
 * 工厂模式
 * 定义：工厂模式是用来创建对象的一种最常用的设计模式。 不暴漏创建对象的具体逻辑，而将逻辑封装在一个函数中，这个函数就是工厂。
 * 应用场景：jQuery的$()函数，Vue的component()函数
*/

// 简单工厂模式
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Creator {
  static create(name, price) {
    switch (name) {
      case 'A':
        return new Product(name, price);
      case 'B':
        return new Product(name, price);
    }
  }
}
let productA = Creator.create('A', 100);
let productB = Creator.create('B', 200);
console.log(productA);
console.log(productB);