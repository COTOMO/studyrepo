// 1. if문
let year = prompt('올해는 몇 년도 일까요?', '');

if(year == 2021) { // 동등 비교를 통해 true/false를 반환
    alert("정답입니다:)");
    alert(`올해는 ${year}년 소띠의 해 입니다.`);
}

// 1-1. 절대 실행되지 않는 조건문 (falsy 값이 들어가는 경우)
if(0) {
    alert("절대 실행되지 않습니다!");
    alert("falsy 값으로는 0, 빈문자열, null, undefined, NaN 등이 있습니다.");
}

// 1-2. 항상 실행되는 조건문 (truthy 값이 들어가는 경우)
if(1) {
    alert("항상 실행됩니다!");
}


// 2. if문 + else절 (조건이 2가지로만 나눠지는 경우)
if(year == 2021) {
    alert("정답입니다:)"); // year가 2021일 경우
} else {
    alert("오답입니다:("); // year가 2021이 아닌 경우
}

// 3. if문 + else if절 (조건이 3개 이상일 경우)
if(year < 2021) {
    alert("숫자를 좀 더 올려보자!");
} else if (year > 2021) {
    alert("숫자를 좀 더 내려보자");
} else {
    alert("축하합니다! 정답입니다~"); // else는 선택사항
}


// 4. 조건부 연산자 '?' - 단일
let age = prompt("나이를 입력해 주세요", '');
let accessAllowed = (age > 18) ? true : false; 
let accessAllowed2 = age > 18; // 비교 연산자 자체가 true, false를 반환하기 때문에 이렇게 사용 가능


// 5. 조건부 연산자 '?' - 다중
let message = (age < 3) ? '아가야 안녕?' : 
                (age < 18) ? '학생 안녕?' : 
                    (age < 100) ? '아조씨 안녕?' : '당신은 100살 이상인가요 아니면 잘못 입력하셨나요?';
alert(message);

// 6. 부적절한 조건부 연산자 사용
let company = prompt('자바스크립트는 어떤 회사가 만들었을까?', '');
(company == 'Netscape') ? 
    alert('정답입니다!') : alert('오답입니다!');


// 과제
// 1. if와 문자열 0
// 결과: alert 실행됨, 이유: 빈문자열이 아니기 때문에 true
if("0"){
    alert("Halo!!");
}

// 2. if..else구문 사용1
let javascriptName = prompt("자바스크립트의 공식 이름은 무엇일까요?", '');
if(javascriptName == 'ECMAScript') {
    alert("정답입니다!");
} else {
    alert("정답은 ECMAScript입니다!");
}

// 3. if..else구문 사용2
let num = prompt("숫자를 입력하세요", '');
if(num > 0) {
    alert(1);
} else if(num < 0) {
    alert(-1);
} else {
    alert(0);
}

// 4. if를 ?로 교체하기
let a = 1;
let b = 3;
let result = (a + b < 4) ? '미만' : '이상';
alert(result);

// 5. if..else를 ?로 교체하기
let login = '';
let loginMessage = (login == '직원') ? '안녕하세요' : 
                (login == '임원') ? '환영합니다' :
                    (login == '') ? '로그인이 필요해요' : '';
alert(loginMessage);