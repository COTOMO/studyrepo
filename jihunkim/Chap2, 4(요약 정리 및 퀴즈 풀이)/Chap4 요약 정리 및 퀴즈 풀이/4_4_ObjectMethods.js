// "use strict"
// 1. 객체 프로퍼티로 메서드 할당하기
// 1-1. 함수 표현식을 사용하여 새로 만들기
let user = {
    name: "John",
    age: 22
};

user.sayHi = function() { // user.sayHi 프로퍼티에 함수 할당
    alert("안녕하세요!!");
};

user.sayHi(); // 함수 호출

// 1-2. 이미 정의된 함수 할당하기
function sayBye() {
    alert("잘가요!!");
};

user.sayBye = sayBye; // user.sayBye 프로퍼티에 이미 선언된 함수 할당

user.sayBye(); // 함수 호출

// 1-3. 메서드 단축 구문 사용하기
user = {
    name: "Jane",
    age: 25,
    sayHi() { // sayHi: function(){...} 동일
        alert("또 안녕하세요!!");
    }
}
user.sayHi();


// 2. 메서드와 this의 관계
let userInfo = {
    name: "Nowondu",
    age: 55,

    sayName() {
        alert("안녕하세요. " + this.name + "입니다!!"); // this는 현재 객체인 userInfo를 의미
        alert("외부 변수 참조를 통해서도 가능합니다..." + userInfo.name); // this를 useInfo로 대체 가능
    }
};

userInfo.sayName(); // 결과: Nowondu, Nowondu

let admin = userInfo;
userInfo = null; // userInfo를 null로 변경
//admin.sayName(); // 결과: Nowondu (admin.name으로 접근), 
                 //       2번째 알럿은 오류 발생 (Uncaught TypeError: Cannot read property 'name' of null)


// 3. 객체마다 달라지는 this
let student = {
    name: "Jann"
};

let teacher = {
    name: "Maria"
};

function welcomeMsg() {
    alert("제 이름은 " + this.name + "입니다~");
}

// 서로 다른 객체에서 동일한 함수 할당
student.func = welcomeMsg;
teacher.func = welcomeMsg;

student.func(); // 결과: Jann ('.' 앞의 객체인 student를 참조)
teacher.func(); // 결과: Maria ('.' 앞의 객체인 teacher를 참조)

student['func'](); // 결과: Jann (위 방식과 동일)


// 4. 객체 없이 호출하기
// 4-1. 엄격모드에서 실행 (최상단에 "use strict" 주석 풀고 테스트)
function noObject() {
    alert(this);
}
noObject(); // 결과: undefined

// 4-2. 엄격모드가 아닌 경우
// 1) 브라우저 환경
noObject(); // 결과: [object Window] (window라는 전역 객체 참조)

// 2) 객체의 프로퍼티로 할당
student.f = noObject;
student.f(); // 결과: [object Object] (속해있는 객체가 해당 함수의 전역이 됨)


// 5. 화살표 함수에서 this 사용하기
let guest = {
    firstName: "Bora",

    sayHi() {
        alert("함수없이 바로접근: " + this.firstName);

        let arrow = () => alert("화살표 함수에서 접근: " + this.firstName); // guest.sayHi()가 가리키는 this를 의미
                                                                           // 즉, sayHi 함수에서 바로 this.firstName으로 접근하는 것과 같은 의미
        arrow();

        function arrow2() {
            alert("일반함수에서 접근: " + this.firstName); // this가 가리키는 값이 없음
        }
        arrow2();
    }
};
guest.sayHi(); // alert 결과: Bora
               // arrow 결과: Bora (화살표 함수는 this가 없기 때문에 this는 외부를 가리키게 된다)
               // arrow2 결과: undefined (엄격모드 아닐 경우), 오류 (엄격모드인 경우)


// 과제
// 1. 객체 리터럴에서 this 사용하기
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();
alert(user.ref.name); 
// 결과: 결과없음 (엄격모드 아닐 경우), Uncaught TypeError (엄격모드인 경우)
// 이유: this는 호출되는 시점에서 가리키고 있는 객체를 의미하는데 makeUser() 함수 내에서 this는 undefined
// 수정
function makeUser2() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
};

user = makeUser2();
alert(user.ref().name); // 결과: John (user.ref() -> this -> '.' 앞의 객체)


// 2. 계산기 만들기
// 1) 별도 변수 선언 - 나의 풀이 (정상작동)
let num1 = 0;
let num2 = 0;

let calculator = {
    read() {
        num1 = +prompt("첫번째 값 입력", '');
        num2 = +prompt("두번째 값 입력", '');
    },
    sum() {
        return num1+num2;
    },
    mul() {
        return num1*num2;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 2) 별도 변수 선언 없음 - 정답 (this 활용)
let calculator2 = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt("첫번째 값 입력", 0); // calculator2 객체에 a 라는 변수로 선언한 것과 같음
        this.b = +prompt("두번째 값 입력", 0); // calculator2 객체에 b 라는 변수로 선언한 것과 같음
    }
};

calculator2.read();
alert(calculator2.sum());
alert(calculator2.mul());


// 3. 체이닝 - 메서드 호출 체이닝이 가능하도록 변경하기
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // up() 함수가 속해있는 객체 ladder를 가리킴
    },
    down() {
        this.step--;
        return this; // down() 함수가 속해있는 객체 ladder를 가리킴
    },
    showStep() {
        alert(this.step); // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        return this; // showStep() 함수가 속해있는 객체 ladder를 가리킴
    }
};

ladder.up().up().down().showStep().up().up().showStep(); // 결과: 1, 3