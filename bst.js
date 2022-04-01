class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
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
    if (root.data > node.data) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (root.data < node.data) {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  getRootNode() {
    return this.root;
  }
  // transversal
  // preorder => P L R
  preorder(root) {
    if (root != null) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  // postorder => L R P
  postorder(root) {
    if (root != null) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.data);
    }
  }
  // inorder => L P R
  inorder(root) {
    if (root != null) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(1);
bst.insert(2);
let root = bst.getRootNode();
console.log("Preorder");
bst.preorder(root);
console.log("Postorder");
bst.postorder(root);
console.log("Inorder");
bst.inorder(root);
