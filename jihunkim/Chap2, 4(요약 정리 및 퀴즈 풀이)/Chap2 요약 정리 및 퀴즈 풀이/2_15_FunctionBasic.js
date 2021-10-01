// 1. 함수 기본
function showMessage() { // 괄호안에 매개변수를 1개 이상 넣을 수 있음
    alert('안녕하세요!');
}
showMessage(); // 생성한 함수를 호출


// 2. 지역 변수
function localMessage() {
    let message = "안녕하세요, 지역변수입니다."; // 함수 외부에서 message 변수 접근 불가
    alert(message);
}
localMessage(); // 결과: 안녕하세요, 지역변수입니다.


// 3. 외부 변수
let userName = 'Jane';
let age = 22;

function outerMessage() {
    userName = 'Jann' // 외부에서 선언한 변수를 수정
    let age = 23; // 외부변수와 이름이 동일하면 지역변수를 사용

    let message = "안녕? " + userName + ". 난 " + age + "살이야!";

    alert(message);
}
alert("이름 변경 전: " + userName); // 결과: Jane
outerMessage(); // 결과: 안녕? Mory. 난 23살이야!
alert("이름 변경 후: " + userName); // 결과: Jann


// 4. 매개변수
let from = "Jacob";

function parameterMessage(from, text) {
    from = '*' + from + '*'; // from 변수를 변경
    alert(from + ': ' + text);
}
parameterMessage(from, "Hello!!"); // 결과: *Ann*: Hello!!
alert("from은 변경되었을까? " + from); // 결과: from은 변경되었을까? Jacob 
                                      // 이유: 매개변수로 받은 변수는 복사해서 사용하므로 바뀌지 않음


// 5. 기본값 설정
// 5-1. undefined 자동 설정
function defaultMessageOne(from, text) {
    alert(from + " - " + text);
}
defaultMessageOne("Ryon"); // 결과: Ryon - undefined

// 5-2. 원하는 값 설정 - 문자열 (비교적 간단한 표현식)
function defaultMessageTwo(from, text = "no text given") {
    alert(from + " - " + text);
}
defaultMessageTwo("Ryon"); // 결과: Ryon - no text given

// 5-3. 원하는 값 설정 - 함수 (비교적 복잡한 표현식)
function defaultMessageThree(from, text = anotherFunction()) {
    alert(from + " - " + text);
}
function anotherFunction() {
    return "함수로 만든 기본 설정 메시지!";
}
defaultMessageThree("Jim"); // 결과: Jim - 기본 설정을 위한 메시지!

// 5-4. 함수 내부에서 설정 - 분기
function defaultMessageFour(text) {
    if(text === undefined) {
        text = '빈 문자열1';
    }
    alert(text);
}
defaultMessageFour(); // 결과: 빈 문자열1

// 5-5. 함수 내부에서 설정 - 논리연산자
function defaultMessageFive(text) {
    text = text || '빈 문자열2';
    alert(text);
}
defaultMessageFive(); // 결과: 빈 문자열2

// 5-6. 함수 내부에서 설정 - null병합연산자
// 0과 같이 falsy 값들을 일반 값으로 처리할 때 좋음
function defaultMessageSix(count) {
    alert(count ?? "알 수 없음"); // null 또는 undefined 일 때 대체 
}
defaultMessageSix(0); // 결과: 0
defaultMessageSix(null); // 결과: 알 수 없음
defaultMessageSix(); // 결과: 알 수 없음


// 6. 반환 값
// 6-1. return 지시자와 반환 값 
function checkAge(age) {
    if(age >= 18) {
        alert("성인입니다.")
        return true;
    } else {
        return confirm('보호자 동의를 받았나요?'); // '확인' 클릭 시 true 반환, '취소' 클릭 시 false 반환
    }
}

let userAge = prompt('나이를 알려주세요', 18);

if(checkAge(userAge)) {
    alert('접속 완료'); // 18세 이상 또는 18세 미만 중 보호자 동의를 받은 사용자
} else { 
    alert('접속 차단'); // 18세 미만 중 보호자 동의를 받지 못한 사용자
}

// 6-2. return 지시자가 없는 함수
function doNothing() {

}
alert(doNothing() === undefined); // 결과: true (지시자가 없으면 undefined 반환)

// 6-3. return 지시자만 있는 경우
function doNothing2() {
    return;
}
alert(doNothing2() == undefined); // 결과: true (반환 값 없이 지시자만 있는 경우도 undefined 반환)


// 과제
// 1. else의 필요성 - 두 함수의 기능은 똑같을까?
function checkPwd(password) {
    if(password == 123) {
        return true;
    } else {
        return confirm('비밀번호가 틀렸습니다');
    }
}
checkPwd(1234);

function checkPwd2(password) {
    if(password == 123) {
        return true;
    }
    return confirm('비밀번호가 틀렸습니다');
}
checkPwd2(1234);
// 정답: 동일하다
// 이유: 비밀번호가 일치할 경우 if문의 return 지시자를 통해 함수가 끝나고 틀릴 경우에만 confirm을 수행한다.


// 2. 함수 다시 작성하기
// 2-1. '?' 사용하기
function checkUserAge1(userAge) {
    return (userAge > 18 ? true : confirm('보호자 동의를 받았나요?')); // userAge > 18 부분을 괄호로 감싸면 가독성 증가
}
checkUserAge1(6);

function checkUserAge2(userAge) {
    return (userAge > 18 || confirm('보호자 동의를 받았나요?')); // userAge > 18 부분을 괄호로 감싸면 가독성 증가
}
checkUserAge2(6);


// 3. min(a, b) 함수 만들기
function min(a, b) {
    return (a < b) ? a : b; 
}
let minNum1 = min(2, 5);
let minNum2 = min(3, -1);
let minNum3 = min(1, 1);
alert("min 값 확인: " + minNum1 + ", " + minNum2 + ", " + minNum3); // 결과: 2, -1, 1


// 4. pow(x, n) 함수 만들기
function pow(x, n) {
    n = checkNumber(n); // n값이 1 이상의 자연수인지 확인하는 함수
    let result = 1;
    for(let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function checkNumber(n) {
    if(n < 1) {
        alert('1 이상의 자연수를 입력하세요!');
        n = prompt('n 값을 입력하세요.', '1');
        return checkNumber(n); // 1 이상의 자연수를 입력할때까지 검사 계속 실행 
    }
    return n;
}

let x = prompt('x 값을 입력하세요.', '');
let n = prompt('n 값을 입력하세요.', '1');
let answer = pow(x, n);
alert(answer);