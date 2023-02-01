export var fristName = "lxy"

//同
// var secondName = "lxy"
// var thirdName = "lxy"

// export { secondName, thirdName }

// var lastName = "lxy"
// export { title as lastName }

//可以用as对输出变量重命名

/*
    使用大括号指定所要输出的一组变量。它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。
*/

/*
export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

报错
export 1;
var m = 1;
export m;


上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。



function foo() {
  export default 'bar' // SyntaxError
}
foo()

export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。
function foo() {
  export default 'bar' // SyntaxError
}
foo()
*/

// export命令除了输出变量，还可以输出函数或类（class）
export function setName() {
    console.log("hhhhhhhhhhhhhhhhhhh")
}