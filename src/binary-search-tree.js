const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	root() {
		return this.rootTree;
	}

	add(data) {
    this.rootTree = addWithin(this.rootTree, data)
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left , data);
      } else {
        node.right = addWithin(node.right , data);
      }
        return node;
      }
    
		// const newNode = new Node(data);
		// if (!this.rootTree) {
		// 	this.rootTree = newNode;
		// 	return;
		// }
		// let currentNode = this.rootTree;
		// while (currentNode) {
		// 	if (newNode.data < currentNode.data) {
		// 		if (!currentNode.left) {
		// 			currentNode.left = newNode;
		// 			return;
		// 		}
		// 		currentNode = currentNode.left;
		// 	} else {
		// 		if (!currentNode.right) {
		// 			currentNode.right = newNode;
		// 			return;
		// 		}
		// 		currentNode = currentNode.right;
		// 	}
		// }
	}

	has(data) {
		return searchWithin(this.rootTree, data);
		function searchWithin(node, data) {
			if (!node) {
				return false;
			}
			if (node.data === data) {
				return true;
			}
			return data < node.data
				? searchWithin(node.left, data)
				: searchWithin(node.right, data);
		}
	}

	find(data) {
		return findWithin(this.rootTree, data);
		function findWithin(node, data) {
			if (!node) {
				return null;
			}
			if (node.data === data) {
				return data;
			}
			return data < node.data
				? findWithin(node.left, data)
				: findWithin(node.right, data);
		}
	}

	remove(data) {
   
		this.rootTree = removeNode(this.rootTree, data);
		function removeNode(node, data) {
			if (!node) {
				return null;
			}
			if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.right;
					return node;
				}
				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.data = minFromRight.data;
				node.right = removeNode(node.right, minFromRight.data);
				return node;
			}
		}
	}

	min() {
		if (!this.rootTree) {
			return;
		}
		let node = this.rootTree;
		while (node.left) {
			node = node.left;
		}
		return node.data;
	}

	max() {
		if (!this.rootTree) {
			return;
		}
		let node = this.rootTree;
		while (node.right) {
			node = node.right;
		}
		return node.data;
	}
}
module.exports = {
	BinarySearchTree,
};
// const myTree = new BinarySearchTree();
// myTree.add(8);
// myTree.add(7);
// myTree.add(9);
// myTree.add(5);
// myTree.add(10);
// myTree.add(20);
// myTree.add(6);
// myTree.add(2);
// myTree.add(2);
// console.log(myTree.remove(20), '2000000000000000');

// console.log(myTree, 'resuuuuuuuuuuuuult');
// console.log(myTree.has(20), '88888888888888888');
// console.log(myTree.max(), 'maxmaxmaxmax');
// console.log(myTree.min(), 'minminminminmin');
// console.log(myTree.find(18), 'exist?');
