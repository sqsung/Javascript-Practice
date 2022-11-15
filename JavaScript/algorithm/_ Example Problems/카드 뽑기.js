function solution(num) {
    let temp = [],
        answer = [];

    for(let i = 1; i <= num; i++) {
        temp.push(i);
    }

    let removeCard = 1;
    while(temp.length) {
        if(removeCard === 1) {
            answer.push(temp[0]);
            temp.splice(0, 1);
            removeCard *= -1;
        } else {
            temp.push(temp[0]);
            temp.splice(0, 1);
            removeCard *= -1;
        }
    }
    return answer;
}

console.log(solution(4));
console.log(solution(7));
console.log(solution(10));