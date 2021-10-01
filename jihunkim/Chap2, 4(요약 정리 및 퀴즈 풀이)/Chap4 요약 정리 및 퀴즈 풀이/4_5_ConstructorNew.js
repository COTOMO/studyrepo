// 1. 생성자 함수 만들기
function User(name) {
  this.name = name;
  this.isAdmin = false;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let user = new User("NowonDu");

alert("유저 이름 : " + user.name); // 결과: NowonDu
alert("유저 권한 : " + user.isAdmin); // 결과: false
user.sayHi(); // 결과: My name is: NowonDu

// 2. 생성자 함수 내부 동작 원리
function User2(name) {
  // 1) 빈 객체가 암시적 생성
  // this = {};

  // 2) 새로운 프로퍼티를 this에 추가
  this.name = name;
  this.isAdmin = false;

  // 3) this의 암시적 변환
  // return this;
}

let user2 = new User2("Apche");

// 4) 위 방식은 객체 리터럴 문법으로 만드는 것과 같음
//   let user2 = {
//       name: "Sejun",
//       isAdmin: false
//   }

// 3. 익명함수로 만들기
let user3 = new (function () {
  this.name = "NowonDu";
  this.isAdmin = false;

  // 지역 변수, 로직, 구문 등의 코드 작성.
})();

// 4. new.target 이용하기
function User3(name) {
  if (!new.target) {
    // new 없이 실행했을 경우
    return new User(name); // new를 붙여서 반환해주기
  }

  this.name = name;
}

let john = User3("John"); // new를 붙인 것과 동일하게 작동
alert(john.name); // 결과: John

// 5. 생성자 함수에서 return 사용하기
function BigUser() {
  this.name = "Bee";

  return { name: "Ant" }; // this가 아닌 새로운 객체 반환
}
alert(new BigUser().name); // 결과: Ant

function SmallUser() {
  this.name = "Bee";

  return; // this를 반환
}
alert(new SmallUser().name); // 결과: Bee

// ------------------------------------------
// 과제
// 1. 함수 두 개로 동일한 객체 만들기
let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // 결과: true (두 함수 모두 this 대신 동일한 객체를 반환하면 같아진다)

// 2. 계산기 만들기
function Calculator() {
  let numObj = {
    num1: 0,
    num2: 0,
  };

  this.read = function () {
    numObj.num1 = +prompt("첫 번째 숫자를 입력하세요 ", "");
    numObj.num2 = +prompt("두 번째 숫자를 입력하세요 ", "");
    return numObj;
  };

  this.sum = function () {
    return numObj.num1 + numObj.num2;
  };

  this.mul = function () {
    return numObj.num1 * numObj.num2;
  };
}

let calculator = new Calculator();
calculator.read();
alert("Sum= " + calculator.sum());
alert("Mul= " + calculator.mul());

// numObj 객체 생성없이 만들기
function Calculator2() {
  this.read = function () {
    this.num1 = +prompt("첫 번째 숫자를 입력하세요 ", "");
    this.num2 = +prompt("두 번째 숫자를 입력하세요 ", "");
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let calculator2 = new Calculator2();
calculator2.read();
alert("Sum= " + calculator2.sum());
alert("Mul= " + calculator2.mul());

// 3. 누산기 만들기
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("숫자 입력: ", "");
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
