// BEGIN: q8f7d6g3h4j5
const assert = require("assert");
const { TreeNode } = require("./utils");

const { inorderTraversal } = require("./94.二叉树的中序遍历");

const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree3 = null;

describe("94.二叉树的中序遍历", () => {
  it("测试用例应该全部通过", () => {
    assert.deepStrictEqual(inorderTraversal(tree1), [1, 3, 2]);
    assert.deepStrictEqual(inorderTraversal(tree2), [2, 1, 3]);
    assert.deepStrictEqual(inorderTraversal(tree3), []);
  });
});
// END: q8f7d6g3h4j5