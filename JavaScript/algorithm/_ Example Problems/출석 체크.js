function solution(attendance) {
  let result = [],
    class_1 = attendance[0],
    class_2 = attendance[1];

  class Dictionary {
    constructor(items = {}) {
      this.items = items; 
    }
  } 

  Dictionary.prototype.has = function(key) {
    return this.items.hasOwnProperty(key); 
  }
  
  Dictionary.prototype.set = function(key, value) {
    this.items[key] = value; 
  }
  
  let dict = new Dictionary(); 
  for(let i = 0; i < class_2.length; i++) {
    dict.set(class_2[i], true);
  }

  for(let i = 0; i < class_1.length; i++) {
    if(dict.has(class_1[i])) result.push(class_1[i]);
  }
 
  return result;
}


console.log(solution([["Kali", "Oliver", "Naomi"], ["Oliver", "Naomi", "Maya"]]));
