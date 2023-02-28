
/*
  计算：6 2 / 3 - 4 2 * + = ？
*/

function calcMultinomial(equation){
  let stack = []
  let equationList = equation.split('')
  let res = 0 
  equationList.forEach(item=>{
    if(['+', '-', '*', '/'].includes(item)){
      let num2 = stack.pop()
      let num1 = stack.pop()
      switch(item){
        case '+':
          res = num1 + num2
          break;
        case '-':
          res = num1 - num2
          break;
        case '*':
          res = num1 * num2
          break;
        case '/':
          res = num1 / num2
          break;
      }
      stack.push(res)
    } else {
      stack.push(item)
    }
  })
  return res
}

// console.log(calcMultinomial('62/3-42*+'))
/**
 * 
 * @param {*} exp 表达式
 * 中缀转换为后缀示例：2*(9+6/3-5)+4
 */
// 转换为后缀运算符
function transAfter(exp){
  let stack = [] //储存运算符
  let str = '' // 拼接好的后缀运算符字符串
  let expList = exp.split('')
  let optionsMap = {
    '(': 4,
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
    ')': 1
  }
  expList.forEach((item, index)=>{
    if(!isNaN(item)){
      str += item
    } else {
      let last = stack[stack.length-1]
      // 新增符号权重 小于 当前权重 处理之前符号
      if( last && (last !== '(') && (optionsMap[item] < optionsMap[last])){ 
        let options = stack.pop()
        while(options && options !== '('){
          str += options
          options = stack.pop()
        }
        str += options && !['(',')'].includes(options) ? options : ''
      }
      stack.push(item)
    }
    // 最后拼接
    if(index  === (expList.length -1)){
      str += stack.pop()
    } 
  })

  return str
}
// 拼接栈中存储运算符
function splitExp(stack){
  let str = ''
  let options = stack.pop()
  while(options && options !== '('){
    str += options
    options = stack.pop()
  }
  str += options && !['(',')'].includes(options) ? options : ''
}
console.log('transAfter', transAfter('2*(9+6/3-5)+4'))
// 正确结果2963/+5-*4+