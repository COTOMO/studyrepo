// 1. '본문 한 줄 + 인수 여러개' 존재하는 함수
/* 화살표 함수로 축약할 함수

let sum = function(a, b) {
  return a + b;
};
*/

let sum = (a, b) => a + b;

alert(sum(1, 2)); // 결과: 3


// 2. '본문 한 줄 + 인수 1개' 존재하는 함수
// 괄호 생략 가능
let double = n => n * 2;

alert(double(3)); // 결과: 6


// 3. '본문 한 줄 + 인수 0개' 존재하는 함수
// 인수가 0개인 경우 괄호 필수
let sayHi = () => alert("Halo!");

sayHi(); // 결과: Halo!


// 4. '본문 여러줄 + 인수 여러개' 존재하는 함수
// 여러줄인 경우 중괄호를 사용하고 그 안에 return 지시자로 결과값 반환
let calNum = (a, b) => {
    let result = a + b;
    return result;
};
alert(calNum(1, 2)); // 결과: 3


// 5. 동적으로 만들기
let age = prompt("당신의 나이는?", 18);

let welcome = (age < 18) ? 
    () => alert("안녕") :
    () => alert("안녕하세요!");

welcome(); // 결과: 18


// 과제
// 화살표 함수로 변경하기
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}
ask(
    "동의합니까?",
    () => alert("동의!!"),
    () => alert("취소!!")
)