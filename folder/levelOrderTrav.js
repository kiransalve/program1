class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.data < root.data) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.data > root.data) {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  getRoot() {
    return this.root;
  }

  levelOrderTraversal(root) {
    let result = [];
    let currentLevelNodes = [];
    if(root) 
        currentLevelNodes.push(root);
    while(currentLevelNodes.length > 0) {
        let current = [];
        let len = currentLevelNodes.length;
        for (let i = 0; i< len; i++) {
            let node = currentLevelNodes.shift();
            current.push(node.data);
            if(node.left) {
                currentLevelNodes.push(node.left);
            }
            if(node.right) {
                currentLevelNodes.push(node.right);
            }
        }
        result.push(current);
    }
    return result;
  }
}

let bst = new BinarySearchTree();

bst.insert(3);
bst.insert(9);
bst.insert(20);
bst.insert(null);
bst.insert(null);
bst.insert(15);
bst.insert(7);

let root = bst.getRoot();

let levelOrder = bst.levelOrderTraversal(root);

console.log(levelOrder);