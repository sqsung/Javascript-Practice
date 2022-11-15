class Element {
  constructor(key, value) {
  this.key = key;
  this.value = value; 
  }
}

class HashTable {
  constructor(size) {
  this.size = size; 
  this.table = new Array(this.size); 
  this.length = 0;
  }
}

HashTable.prototype.hashCode = function(key) {
  let hash = 0;
  for(let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size; 
}

HashTable.prototype.put = function(key) {
  let index = this.hashCode(key);
  let startIndex = index; 

  do {
    if(this.table[index] === undefined) {
      this.table[index] = new Element(key, index + 1);
      this.length++; 
      return true; 
    }

    index = (index + 1) % this.size;
  } while(index !== startIndex);

  return false; 
}

HashTable.prototype.get = function(key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if(this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index++; 
  } while(index !== startIndex);

  return undefined;
}

function solution(name) {
  let result = [],
    ht = new HashTable(name.length);
  
  for(let i = 0; i < name.length; i++) {
    ht.put(name[i]);
  }

  for(let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i]));
  }

  return result;
}

console.log(solution(["Mana", "Naomi", "Leila", "Morris", "Madonna"]));