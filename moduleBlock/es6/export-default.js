/* 
    正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
    export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。
    所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
*/
var a = 1;
export default a;

// export default var b=1; //不行，错