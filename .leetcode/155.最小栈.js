/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
  this.items = {}
  this.minItems = {}
  this.count = 0
  return null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.items[this.count] = val
  this.minItems[this.count] = val > this.minItems[this.count-1] ? this.minItems[this.count-1]: val
  this.count++
  return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let current = null
  if(this.count > 0){
    current = this.items[this.count-1]
    delete this.items[this.count-1]
    delete this.minItems[this.count-1]
    this.count--
  }
  return current
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if(this.count > 0){
    return this.items[this.count-1]
  } else {
    return null
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if(this.count > 0){
    // let min = this.items[0]
    // for(let i in this.items){
    //   if(min > this.items[i]){
    //     min = this.items[i]
    //   }
    // }
    return this.minItems[this.count-1]
  }else{
    return null
  }
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// @lc code=end

