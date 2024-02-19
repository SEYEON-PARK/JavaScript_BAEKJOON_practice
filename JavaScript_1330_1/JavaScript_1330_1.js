/*
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

첫째 줄에 다음 세 가지 중 하나를 출력한다.
  - A가 B보다 큰 경우에는 '>'를 출력한다.
  - A가 B보다 작은 경우에는 '<'를 출력한다.
  - A와 B가 같은 경우에는 '=='를 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백을 기준으로 잘라서 배열을 만들어 input에 저장
const A = parseInt(input[0]); // input[0]을 정수형으로 바꿔서 A에 저장
const B = parseInt(input[1]); // input[1]을 정수형으로 바꿔서 B에 저장

if(A>B){ // 만약, A가 B보다 크다면
    console.log('>'); // '>' 출력하기
}
else if(A===B){
    console.log('==');
}
else{
    console.log('<');
}
