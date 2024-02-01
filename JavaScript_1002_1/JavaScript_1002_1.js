/*
조규현과 백승환은 터렛에 근무하는 직원이다.
하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.
이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.
조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고,
조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때,
류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.
한 줄에 공백으로 구분 된 여섯 정수 x1, y1, r1, x2, y2, r2가 주어진다.

각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다.
만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(input[0]);
const other = input.slice(1).map(line => line.split(' ').map(Number));

const result = [];

for(let i=0;i<n;i++){
    const [x1, y1, r1, x2, y2, r2] = other[i];
    const R = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    
    let big, small;
    
    if(r1>r2){
        big=r1;
        small=r2;
    }
    else{
        big=r2;
        small=r1;
    }
    
    if(big>=R && R>0){
        if(big>R+small)
            result.push(0);
        else if(big<R+small)
            result.push(2);
        else
            result.push(1);
    }
    else if(R>big){
        if(R>big+small)
            result.push(0);
        else if(R===big+small)
            result.push(1);
        else
            result.push(2);
    }
    else{
        if(big==small)
            result.push(-1);
        else
            result.push(0);
    }
}

console.log(result.join('\n'));
