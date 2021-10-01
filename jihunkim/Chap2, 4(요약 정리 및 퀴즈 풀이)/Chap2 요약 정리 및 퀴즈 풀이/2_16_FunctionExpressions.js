// 1. 함수 표현식 기본 구조

/*
// sayHi 함수를 함수 선언문으로 작성
function sayHi() { 
    alert("Nowondu!!");
}
*/

let sayHi = function() { // sayHi라는 변수에 함수를 할당
    alert("Nowondu!!");
}; // 하나의 값으로 취급하기 때문에 세미콜론을 붙이는 것이 좋음

let func = sayHi; // 다른 변수에 값 복사

func(); // 결과: Nowondu!!
sayHi(); // 결과: Nowondu!!


// 2. 콜백 함수
function ask(question, yes, no) { // yes == showOK(), no == showCancel()
    if(confirm(question)) yes() // 동의를 누르면 yes() 함수가 호출되므로 showOK() 함수가 콜백 함수
    else no(); // 취소를 누르면 no() 함수가 호출되므로 showCancel() 함수가 콜백 함수
}

function showOK() {
    alert("동의!!");
}

function showCancel() {
    alert("취소!!");
}

ask("동의하십니까?", showOK, showCancel); // 함수의 인수로 함수 자체를 전달


// 3. 익명 함수
ask("익명함수 동의하십니까?",
    function() {alert("익명 동의!!"); }, // showOK와 동일한 기능의 함수를 이름 없이 생성
    function() {alert("익명 취소"); } // showCancel과 동일한 기능의 함수를 이름 없이 생성
);


// 4. 함수 선언식 vs 함수 표현식
// 4-1. 실행 시점의 차이
// 1) 선언식
sayBye(); // 결과: Bye! (함수 선언이 더 뒤에있어도 정상 작동 -> 자바스크립트 엔진이 실행 전 선언문을 찾아서 생성)
function sayBye() {
    alert("Bye!");
}

// 2) 표현식
sayBye2(); // 결과: ReferenceError (아직 할당 전이기 때문에 접근 불가)
let sayBye2 = function() {
    alert("Bye Bye!");
}

// 4-2. 스코프의 차이
// 1) 선언식
let age = prompt("당신의 나이는?", 18);

// 의도: 조건에 따른 함수 선언
if(age < 18) {
    welcome(); // 결과: 안녕 (코드 블록 내에서 실행 가능)
    function welcome() {
        alert("안녕");
    }
    welcome(); // 결과: 안녕
} else {
    welcome(); // 결과: 안녕하세요
    function welcome() {
        alert("안녕하세요");
    }
    welcome(); // 결과: 안녕하세요
}
welcome(); // 결과: ReferenceError (의도와 달리 코드 블록 외부에서 실행 불가)

// 2) 표현식
let welcome; // 함수를 할당할 변수 선언

if(age < 18) {
    welcome = function() {
        alert("안녕");
    };
} else {
    welcome = function() {
        alert("안녕하세요");
    };
}
welcome(); // 결과: 안녕하세요 (의도에 맞게 코드블록 외부에서도 실행 가능)
