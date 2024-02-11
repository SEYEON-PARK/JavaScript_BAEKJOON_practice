/*
두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

첫째 줄에 A×B를 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백을 기준으로 잘라서 배열을 만들어 input에 저장
const A = parseInt(input[0]); // input[0]을 정수형으로 바꿔서 A에 저장
const B = parseInt(input[1]);

console.log(A*B);
