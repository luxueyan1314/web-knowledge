/**
 * 策略模式
 * 定义：将一组算法封装起来，并且使它们可以相互替换。根据不同的情况命中不同的策略。
 * 优点：1. 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
 *     2. 策略模式提供了对开放-封闭原则的完美支持，可以在不修改原有系统的基础上，满足新的需求。
 *    3. 策略模式提供了相同行为的不同实现，客户可以选择不同的实现来得到相同的结果，提供了更好的代码复用性。
 * 缺点：1. 客户端必须知道所有的策略，并且自行决定使用哪一个策略类。
 *    2. 策略模式将造成产生很多策略类。
 * 使用场景：表单验证
*/
/*
* 表单验证
*/
let strategies = {
  'isNoEmpty': function(value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  'minLength': function(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  'maxLength': function(value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
  },
  'isMobile': function(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
  'isEmail': function(value, errorMsg) {
    if (!/(^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$)/.test(value)) {
      return errorMsg;
    }
  },
  'isNumber': function(value, errorMsg) {
    if (!/^\d+$/.test(value)) {
      return errorMsg;
    }
  },
  'isSame': function(value, value2, errorMsg) {
    if (value !== value2) {
      return errorMsg;
    }
  }
}

 class Validator {
  constructor(){
    this.cache = [];
    this.errorMsg = []
  }
  add(value, rules){
   // 传入定义的规则
    for(let i = 0,rule; (rule = rules[i++]);){
      let strategyAry = rule.strategy.split(':')
      let errorMsg = rule.errorMsg
      this.cache.push(()=>{
        // 处理传入strategies的参数格式
        let strategy = strategyAry.shift()
        strategyAry.unshift(value)
        strategyAry.push(errorMsg)

        // 执行校验规则
        let errMag = strategies[strategy](...strategyAry)
        if(errMag){
          this.errorMsg.push(errMag)
        }
      })
    }
  }
  start(){
    // 循环cache 获取报错信息
    for(let i = 0; i < this.cache.length; i++){
      this.cache[i]()
    }
    return this.errorMsg;
  }
 }

let validataFunc = function(info) {
  let validator = new Validator();
  validator.add(info.userName, [
      {
        strategy: "isNoEmpty",
        errorMsg: "用户名不可为空"
      },
      {
        strategy: "minLength:2",
        errorMsg: "用户名长度不能小于2位"
      }
  ]);
  validator.add(info.password, [
    {
      strategy: 'minLength:6',
      errorMsg: "密码长度不能小于6位"
    }
  ])
  validator.add(info.phoneNumber, [
    {
      strategy: 'isMobile',
      errorMsg:'手机号格式错误'
    }
  ])
  return  validator.start();
}

// 需要验证表单的对象
let userInfo = {
  userName: "王",
  password: "1234",
  phoneNumber: "666"
};

let errorMsg = validataFunc(userInfo)
console.log(errorMsg) // [ '用户名长度不能小于2位', '密码长度不能小于6位', '手机号格式错误' ]