const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
   return this.tree
  }

  add(data) {
  this.tree = addList(this.tree, data);

  function addList(node, data) {
    if (!node) {
      return new Node(data)
    }

    if (node.data === data) {
      return node
    }

    if (data < node.data) {
      node.left = addList(node.left, data)
    } else if (data > node.data) {
      node.right = addList(node.right, data)
    }
    return node;
  }
  }

  has(data) {
    return searchList(this.tree, data);
    
    function searchList(node, data) {
      if (!node) {
        return false
      }
  
      if (node.data === data) {
        return true
      }
      if (node.data < data) {
        return searchList(node.right, data);
      }
      if (node.data > data) {
        return searchList(node.left, data);
      }
    }

  }

  find(data) {
    return search(this.tree, data);

    function search(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return search(node.left, data);
      } else if (data > node.data) {
        return search(node.right, data);
      }
    }
  }

  remove(data) {
    this.tree = removeList(this.tree, data);
    
    function removeList(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeList(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeList(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeList(node.right, minRight.data)
        return node
      }
    }

  }

  min() {
  if (!this.tree) {
    return undefined;
  }
  let node = this.tree;
  while (node.left) {
    node = node.left
  }
  return node.data
  }

  max() {
    if (!this.tree) {
      return undefined;
    }
    let node = this.tree;
    while (node.right) {
      node = node.right
    }
    return node.data
  
  }
}

module.exports = {
  BinarySearchTree
};