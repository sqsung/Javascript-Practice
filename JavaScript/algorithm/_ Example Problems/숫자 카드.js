const HASH_SIZE = 21;

function HashTable() {
  this.table = new Array(HASH_SIZE);
}

HashTable.prototype.hashCode = function (key) {
  return (key + 10) % HASH_SIZE;
}

HashTable.prototype.put = function(key) {
  let index = this.hashCode(key); 

  if (this.table[index] === undefined) {
    this.table[index] = 0;
  }

  this.table[index]++; 
}

HashTable.prototype.get = function(key) {
  let index = this.hashCode(key);
  return this.table[index] === undefined ? 0 : this.table[index]; 
}

function solution(card, select) {
  let result = [];
  let ht = new HashTable(); 

  for(let i = 0; i < card.length; i++) {
    ht.put(card[i]);
  }

  for(let i = 0; i < select.length; i++) {
    result.push(ht.get(select[i]));
  }

  return result;
}

console.log(solution([-6, -1, 6, 1, 1], [-2, 1, 3]));
console.log(solution([7, 4, 3, 10, 10, 10, -10, -10, 7, 3], [10, 9, -5, 4, 6, -10]));
console.log(solution([5, -3, -7, 10, -3, 4, 8, 4, -3, 3, 8, -2, -9, -8, -1], [4, 5, 1, 10, -2, -3, 3, -8]));