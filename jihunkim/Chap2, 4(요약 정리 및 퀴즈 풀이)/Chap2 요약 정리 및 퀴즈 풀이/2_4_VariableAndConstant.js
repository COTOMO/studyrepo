// 1. 변수를 생성하여 alert 실행하기
let admin;
let name;

name = "John";
admin = name;

alert(admin);
alert(name);

// 2. 변수명 정하기
var EARTH;
var userName;

// 3. 대문자 상수 올바르게 사용하기
const BIRTHDAY = '03.09.1988'; // 생년월일은 실행 전 이미 그 값을 알 수 있음
const age = someCode(BIRTHDAY); // 나이는 실행 후 계산을 통해 알 수 있음