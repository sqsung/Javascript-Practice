// Node(): Data와 Point[현재 null인 부분]을 가지고 있는 객체, 즉 하나의 node 생성 
function Node(data) {
  this.data = data; 
  this.next = null;
}

//LinkedList(): head와 length를 가지고 있는 객체, 현재 상태에는 아무 것도 연결되어 있지 않음 
function LinkedList() {
  this.head = null; 
  this.length = 0;
}

//size(): Size는 연결리스트 내 노드 개수 확인할때 씀 
LinkedList.prototype.size = function () {
  return this.length;
}

// isEmpty(): "비었냐?" 객체 내 노드 존재 여부 파악 
LinkedList.prototype.isEmpty = function () {
  return this.length === 0; 
};

//printNode() : 예쁘게 노드 출력하기 
LinkedList.prototype.printNode = function() { 
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// append(): 연결 리스트 가장 끝에 노드 추가하는 방법 
LinkedList.prototype.append = function(value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node; 
  } else {
    while(current.next != null) {
      current = current.next; 
    }
    current.next = node; 
  }
  this.length++; 
} 

// insert(): position 위치에 노드 추가해줌 
LinkedList.prototype.insert = function(value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  
  let node = new Node(value),
    current = this.head,
    index = 0,
    prev; 

  if (position == 0) { //입력된 포지션값이 0, 즉 첫번째로 들어가야 될 때 
    node.next = current; //current는 현재 this.head, 새로 추가된 node가 head 가르키고 
    this.head = node;  //head 자리에 node가 들어감 
  } else {
    while(index++ < position) { //
    prev = current;
    current = current.next; 
    }
  node.next = current;
  prev.next = node; 
  }
  this.length++;
  return true;
}

//remove(): Value 데이터를 찾아 해당 노드 삭제 
LinkedList.prototype.remove = function(value) {
  let current = this.head,
    prev = current; 
  
  while (current.data != value && current.next != null) {
    prev = current; 
    current = current.next; 
  }

  if (current.data != value) {
    return null; 
  }

  if (current === this.head) {
    this.head = current.next; 
  } else {
    prev.next = current.next;
  }

  this.length--; 
  return current.data; 

}

//removeAt(): 입력받은 position에 위치한 노드 삭제 
LinkedList.prototype.removeAt = function(position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev; 

    if (position === 0) {
      this.head = current.next; 
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next; 
      }

      prev.next = current.next; 
    }

    this.length--; 
    return current.data;
}

//indexOf(): Value값을 갖는 노드의 위치를 반환해줌 
LinkedList.prototype.indexOf = function(value) { 
  let current = this.head,
    index = 0;

  while (current != null) { 
    if (current.data === value) {
      return index; 
    } 
    index++; 
    current = current.next; 
  }
  return -1; 
};

//remove2(): indexOf + removeAt = remove
LinkedList.prototype.remove2 = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
}



let new_ll = new LinkedList();

new_ll.insert(1);
new_ll.insert(10);
new_ll.insert(100);
new_ll.insert(2, 1);
new_ll.insert(3, 3);

console.log(new_ll.indexOf(1000));
console.log(new_ll.indexOf(1));
console.log(new_ll.indexOf(100));
console.log(new_ll.indexOf(10));

console.log(new_ll.remove2(1000));
new_ll.printNode();
console.log(new_ll.remove2(1));
new_ll.printNode();
console.log(new_ll.remove2(2));
new_ll.printNode();
console.log(new_ll.remove2(100));
new_ll.printNode();
console.log(new_ll.size());

