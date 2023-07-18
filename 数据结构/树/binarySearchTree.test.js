// BEGIN: yz7x5d9bcejpp
import BinarySearchTree from './binarySearchTree.js';

describe('BinarySearchTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  test('insert', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    expect(tree.root.data).toBe(5);
    expect(tree.root.left.data).toBe(3);
    expect(tree.root.left.left.data).toBe(2);
    expect(tree.root.left.right.data).toBe(4);
    expect(tree.root.right.data).toBe(7);
    expect(tree.root.right.left.data).toBe(6);
    expect(tree.root.right.right.data).toBe(8);
  });

  test('inOrderTraverse', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    const arr = [];
    tree.inOrderTraverse((item) => arr.push(item));
    expect(arr).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('preOrderTraverse', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    const arr = [];
    tree.preOrderTraverse((item) => arr.push(item));
    expect(arr).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  test('postOrderTraverse', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    const arr = [];
    tree.postOrderTraverse((item) => arr.push(item));
    expect(arr).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });

  test('storeyOrderTraverse', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    const arr = [];
    tree.storeyOrderTraverse((item) => arr.push(item));
    expect(arr).toEqual([5, 3, 7, 2, 4, 6, 8]);
  });

  test('min', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    expect(tree.min().data).toBe(2);
  });

  test('max', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);
    expect(tree.max().data).toBe(8);
  });
});
// END: yz7x5d9bcejpp