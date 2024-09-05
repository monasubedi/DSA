//Tree Usage

//File Systems
//DOM



//root - that does not have any parent node.
//leaf - that does not have any child node.

//binary tree - is a tree data structure in which each node has at most two children.

//- value of each left node must be smaller than the parent node.
//- value of each right node must be greater than the parent node.
//- each node has at most two children.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        this.insertNode(this.root, newNode);
    }

    insertNode(root, newNode) {
        if(this.root === null){
            this.root = newNode;
        }
        else if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        }
        if (root.value === value) {
            return true;
        }
        else if (value < root.value) {
            return this.search(root.left, value);
        }
        else {
            return this.search(root.right, value);
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);


console.log(bst.search(bst.root,10));
