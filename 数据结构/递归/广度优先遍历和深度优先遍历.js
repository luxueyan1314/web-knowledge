
// 定义一个简单的树结构
const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        { value: 'D' },
        { value: 'E' },
      ],
    },
    {
      value: 'C',
      children: [
        { value: 'F' },
        { value: 'G' },
      ],
    },
  ],
};

// 深度优先遍历
/**
 * 
 * @param {*} tree 
 * 在深度优先遍历中，在树中，意味着首先访问根节点，然后递归访问根节点的所有子树。
 * 深度优先遍历的一个特点是它会“深入”到一个分支的最深部分，然后回溯到其他分支。
 */
function dfs(tree) {
  console.log(tree.value);
  (tree.children||[]).forEach(dfs)
}
// dfs(tree)

// 广度优先遍历
/**
 * 特点：在树结构中，意味着先访问根节点，然后访问完一层的所有节点，然后再访问下一层级的节点。
*/
function bfs(tree){
 // 使用队列存储children
 let queue = [tree]
 while(queue.length){
    let obj = queue.shift()
    console.log(obj.value)
   (obj.children || []).forEach(item => queue.push(item))
  }
}
bfs(tree)