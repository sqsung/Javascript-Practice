//열차가 [1, 2, 3] 순으로 들어온다고 했을 때, 입력 순서대로 나갈 수 있는지 판단하는 함수 작성 

function solution(order) {
    order = order.split('');
    let washer = [],
        dishes = order.slice().sort();
        answer = [];

    while(true) {
        if(dishes.length === 0) break;
        washer.push(dishes[0]);
        answer.push(0);
        dishes.shift(); 

        if(washer[washer.length - 1] === order[0]) {
            for(let i = washer.length - 1; i >= 0; i--) {
                if(washer[i] !== order[0]) {
                    if(dishes.length === 0) return [];
                    else break;
                }

                if(washer[i] === order[0]) {
                    washer.pop();
                    answer.push(1);
                    order.shift();
                }
            }
        }
    }
    return answer;
}


console.log(solution('bacd'))
console.log(solution('dabc'))
console.log(solution('edcfgbijha'))