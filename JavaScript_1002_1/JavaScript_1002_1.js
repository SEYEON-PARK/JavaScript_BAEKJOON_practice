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
const input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 한 줄 단위로 잘라서 input에 저장
const n = parseInt(input[0]); // input[0]을 정수형으로 형변환하여 n에 저장

// input의 첫 번째 요소만 제외하고 나머지 요소들을 하나씩 line에 넣는다.
// line을 공백을 기준으로 잘라 숫자로 형변환하여 배열 형태로 반환한다. 결론적으로 2차원 배열이 만들어져서 other에 저장된다.
const other = input.slice(1).map(line => line.split(' ').map(Number));

const result = []; // 결과를 저장할 배열 result 선언

for(let i=0;i<n;i++){ // 0부터 n보다 작을 때까지 1씩 증가시킨 값을 i에 대입하며 반복
    const [x1, y1, r1, x2, y2, r2] = other[i]; // other[i] 요소들을 변수에 저장
    const R = Math.sqrt((x2-x1)**2 + (y2-y1)**2); // 두 점 사이의 거리 구하기!
    
    let big, small; // 두 점 중 큰 값과 작은 값을 넣을 변수 선언
    
    if(r1>r2){ // 만약, r1이 r2보다 크다면
        big=r1; // big에 r1 대입하기
        small=r2; // small에 r2 대입하기
    }
    else{ // r1이 r2보다 크지 않다면(작거나 같다면)
        big=r2; // big에 r2 대입하기
        small=r1; // small에 r1 대입하기
    }

    /*
    big == 긴 반지름
    small == 짧은 반지름
    R == 두 점 사이의 거리
    */
    if(big>=R && R>0){ // 만약, big이 R보다 크거나 같고, R이 0보다 크다면
        if(big>R+small) // 만약, big이 R+small보다 크다면
            result.push(0); // 결과 배열에 0 저장하기(교점 없음)
        else if(big<R+small) // 만약 big이 R+small보다 크지 않고, 작다면
            result.push(2); // 결과 배열에 2 저장하기(교점 두 개)
        else // big이 R+small보다 크지도 않고, 작지도 않다면(같다면)
            result.push(1); // 결과 배열에 1 저장하기(교점 한 개)
    }
    else if(R>big){ // 만약 첫 번째 경우가 아니고, R이 big보다 크다면
        if(R>big+small) // 만약, R이 big+small보다 크다면
            result.push(0); // 결과 배열에 0 저장하기(교점 없음)
        else if(R===big+small) // 만약 R이 big+small보다 크지 않고, 같다면
            result.push(1); // 결과 배열에 1 저장하기(교점 한 개)
        else  // 만약 R이 big+small보다 크지 않고, 같지도 않다면(작다면)
            result.push(2); // 결과 배열에 2 저장하기(교점 두 개)
    }
    else{ // 첫 번째 경우와 두 번째 경우가 아니라면
        if(big==small) // 만약, big과 small이 같다면
            result.push(-1); // 결과 배열에 -1 저장하기(같은 원이 그려짐, 무한대)
        else // big과 small이 같지 않다면
            result.push(0); // 결과 배열에 0 저장하기(교점 없음)
    }
}

console.log(result.join('\n')); // 결과 배열 result의 요소들을 한 줄 띄기로 띄어서 출력하기
