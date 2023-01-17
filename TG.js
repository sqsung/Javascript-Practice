const target = 'A AA AAA AAAA AAAAA'; 
// 'A'가 최소 1번, 최대 3번 반복되는 문자열을 전역 검색  
const regExp = /A{2}/g;

console.log(target.match(regExp)); // --> ['A', 'AA', 'AAA'];