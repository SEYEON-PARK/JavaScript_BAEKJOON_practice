/*
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백을 기준으로 잘라서 배열을 만들어 input에 저장
const A = parseInt(input[0]); // input[0]을 정수형으로 바꿔서 A에 저장
const B = parseInt(input[1]); // input[1]을 정수형으로 바꿔서 B에 저장
const C = parseInt(input[2]); // input[2]을 정수형으로 바꿔서 C에 저장

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);
