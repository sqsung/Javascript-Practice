//열차가 [1, 2, 3] 순으로 들어온다고 했을 때, 입력 순서대로 나갈 수 있는지 판단하는 함수 작성 

function solution(order) {
    let station = [],
        train = [1, 2, 3];

    while(true) {
        if(train.length === 0) break;
        station.push(train[0]);
        train.shift(); 

        if(station[station.length - 1] === order[0]) {
            for(let i = station.length - 1; i >= 0; i--) {
                if(station[i] !== order[0]) break;
                if(station[i] === order[0]) {
                    station.pop();
                    order.shift();
                }
            }
        }
    }
    return station.length === 0 ? true : false;
}


console.log(solution([1, 2, 3]));
console.log(solution([3, 2, 1]));
console.log(solution([3, 1, 2]));