/**
* 1.create(maxSize)：创建一个空的最小堆
* 2.isFull(MinHeap H)：判断最小堆H是否已满
* 3.Insert(MinHeap H,  ElementType item): 将元素item插入最小堆H。
* 4.Boolean isEmpty(MinHeap H): 判断最小堆H是否为空
* 5.ElementType DeleteMin(MinHeap H):返回H中最小元素（高优先级）。
*/
class MinHeap {
  constructor(maxSize){
    this.maxSize = maxSize
    this.data = []
    this.count = 0
  }
  isFull(){
    return this.count >= this.maxSize
  }
  isEmpty(){
    return this.count === 0
  }
  getLeftIndex(index){
    return 2 * index + 1;
  }
  getRightIndex(index){
    return 2 * index - 1;
  }
  getParentIndex(index) { 
    if (index === 0) { 
    return undefined; 
    } 
    return Math.floor((index - 1) / 2); 
  }
  swap(i1, i2){
    let tem = this.data[i1]
    this.data[i1] = this.data[i2]
    this.data[i2] = tem
  }
  insert(item){
    /**
     * 1、新来一个结点，先放到数组的最后一个位置
     * 2、然后和父结点比较，如果比父结点小，就交换位置
     */
    if(this.isFull()){
      throw new Error('堆已满')
    }
    this.data[this.count] = item
    let i = this.count
    let parent = this.getParentIndex(i)
    // 如果当前结点大于父结点
    while(i > 0 && this.data[i] < this.data[parent]){
      let tem = this.data[parent]
      this.data[parent] = this.data[i]
      this.data[i] = tem
      i = parent 
      parent = this.getParentIndex(i)
    }
    this.count++
  }
  deleteMin(){
    /*
    * 1、删除第一个，将最后一个元素替换到当前
    * 2、比较子结点，若当前元素比子结点大，与子结点交换
    */
    if(this.isEmpty()){
      throw new Error('堆为空')
    }
    if (this.count === 1) {
      this.count--;
      return this.data.shift();
    }
    // 删除第一个元素
    let min = this.data.shift()
    // 交换最后一个元素到第一个
    this.data.unshift(this.data.pop())// 将最小的元素替换到第一个
    this.count--
    this.siftDown(0)
    
    return min
  }
  siftDown(i) { // 下移
    let tem = this.data[i]
    const left = this.getLeftIndex(i)
    const right = this.getRightIndex(i)
    let elementIndex = i
    if (this.data[left] < tem) {
      elementIndex = left
    }
    if (this.data[right] < tem) {
      elementIndex = this.data[right]
    }
    if (elementIndex !== i) {
      this.swap(i, elementIndex)
      this.siftDown(elementIndex)
    }
  }
}

const heap = new MinHeap(5);
heap.insert(3);
heap.insert(1);
heap.insert(4);
heap.insert(2);
heap.insert(5);

heap.deleteMin()
console.log(heap.data);

// module.exports = MinHeap
