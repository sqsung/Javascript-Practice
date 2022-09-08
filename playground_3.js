function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

function answer(n, k) {
  let result = [];
  let ll = new LinkedList();
  let current, prev;

  for (let i = 1; i < n + 1; i++) {
    current = new Node(i);

    if (i === 1) {
      ll.head = current;
    } else {
      if (i === n) {
        prev.next = current;
        current.next = ll.head;
      } else {
        prev.next = current;
      }
    }
    prev = current;
  }
  //c = 7, p = 7

  current = ll.head;
  while (--k) {
    prev = current;
    current = current.next;
  }
  // c = 3, prev = 2
  
  let count;
  while (--n) {
    result.push(current.data);
    prev.next = current.next;
    ll.length--;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }
  result.push(current.data)
  return result;
}

console.log(answer(7, 3));