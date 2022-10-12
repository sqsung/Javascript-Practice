//Node(): Value와 left/right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//BinaryTree(): 시작 노드이 root를 저장하기 위한 생성자 
function BinaryTree() {
  this.root = null;
}

// _insertNode(): 재귀로 트리 순환하며 노드 추가해주는 메서드 (내부 사용)
BinaryTree.prototype._insertNode = function(node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
      node.left = this._insertNode(node.left, value);
  } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
  }
    
  return node; 
}

//insert(): Node 추가 
BinaryTree.prototype.insert = function(value) {
  this.root = this._insertNode(this.root, value);
}

//preOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function(node, callback) {
  if (node === null) {
    return;
  }

  callback(node); 
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
}

//전위 순회하며 노드 출력 
BinaryTree.prototype.preOrderTraverse = function(callback) {
  this._preOrderTraverseNode(this.root, callback);
}

//inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회 (내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function(node, callback) {
  if (node === null) {
    return;
  }

  this._inOrderTraverseNode(node.left, callback);
  callback(node); 
  this._inOrderTraverseNode(node.right, callback);
}

//중위 순회하며 노드 출력 
BinaryTree.prototype.inOrderTraverse = function(callback) {
  this._inOrderTraverseNode(this.root, callback);
}

//postOrderTraverseNode(): 재귀로 트리를 순회하며 후위 순회 (내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function(node, callback) {
  if (node === null) {
    return;
  }

  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node); 
}

//후위 순회하며 노드 출력 
BinaryTree.prototype.postOrderTraverse = function(callback) {
  this._postOrderTraverseNode(this.root, callback);
}

/* 
Level Order 시작 
*/

function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function(){
  return this.array.length === 0;
}

Queue.prototype.enqueue = function(element) {
  return this.array.push(element);
}

Queue.prototype.dequeue = function() {
  return this.array.shift();
}
// levelOrderTraverse(): 층별 순회하며 노드 출력 
BinaryTree.prototype.levelOrderTraverse = function(callback) {
  let q = new Queue();
  let node; 

  q.enqueue(this.root);
  while (!q.isEmpty()){
    node = q.dequeue();
    callback(node);
    if(node.left !== null) q.enqueue(node.left);
    if(node.right !== null) q.enqueue(node.right);
  }
}


let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
  process.stdout.write(`${node.value} -> `)
}

console.log("************ Pre-Order ************")
tree.preOrderTraverse(printNode);
console.log("end");

console.log("************ inOrder ************")
tree.inOrderTraverse(printNode);
console.log("end");

console.log("************ postOrder ************")
tree.postOrderTraverse(printNode);
console.log("end");

console.log("************ levelOrder ************")
tree.levelOrderTraverse(printNode);
console.log("end");