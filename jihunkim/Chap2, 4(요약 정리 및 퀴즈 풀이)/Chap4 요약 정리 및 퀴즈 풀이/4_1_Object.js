// 1. 객체형
// 1-1. 객체형 구조
let user_1 = new Object(); // 1) '객체 생성자'
let user_2 = {}; // 2) '객체 리터럴'

// 1-2. 프로퍼티 이름
 let obj = {
     for: 1,
     let: 2,
     return: 3,
 };
 alert(obj.for + obj.let + obj.return); // 결과: 6

 obj.__proto__ = 5; // 프로퍼티 이름 중 특별대우 - 그 이유는 뒤에서!!
 alert(obj.__proto__); // 결과: [object Object] (예상과 달리 할당해준 값 5가 아닌 객체가 할당됨)



// 2. 객체형 사용하기
// 2-1. 객체 생성
const user = { // let으로 선언하면 값 수정 불가능
    name: "Nowondu",
    "likes birds": true, // 프로퍼티 이름을 여러 단어로 조합하려면 따옴표로 묶기
    age: 55, // 마지막 프로퍼티 끝에 쉼표를 붙이면 모든 프로퍼티가 유사한 형태여서 사용하기 더 쉬움
};

// 2-2. 값 얻기
alert(user.name); // 결과: Nowondu
alert(user.age); // 결과: 55

// 2-3. 값 추가
user.idAdmin = true;
alert(user.idAdmin); // 결과: true

// 2-4. 값 삭제
delete user.age;

// 2-5. 값 수정
user.name = "Nowondoo"; // 프로퍼티의 이름은 수정 불가
alert(user.name); // 결과: Nowondoo


// 3. 대괄호 표기법
// 3-1. 값 추가
let key = "likes cat";
let key2 = prompt("사용자의 어떤 정보가 궁금한가요?", "name");
user["likes dog"] = true;
user[key] = false; // 윗줄과 같은 의미

// 3-2. 값 얻기
alert(user["likes dog"]); // 결과: true
alert(user[key]); // 결과: false
alert(user[key2]); // 결과: Mory (프롬프트 창에 "name"을 그대로 입력한 경우)

// 3-3. 값 삭제
delete user[key];
delete user[key2];


// 4. 계산된 프로퍼티
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {
    [fruit]: 5, // fruit 변수를 통하여 프로퍼티 이름을 동적으로 설정 
    [fruit + 'Honey']: 1, // 대괄호 안에 복잡한 표현식 사용 가능
};
alert(bag.apple); // 결과: 5 (프롬프트 창에서 작성한 값이 프로퍼티 이름)
alert(bag.appleHoney); // 결과: 1


// 5. 단축 프로퍼티
function makeUser(name, age) {
    return {
        name, // 'name: name,' 과 같은 의미
        age, // 'age: age,' 과 같은 의미
    }
}

let userInfo = makeUser("John", 30);
alert(userInfo.name); // 결과: John


// 6. 프로퍼티 존재 확인하기
// 6-1. undefined 타입 비교 이용하기
alert(user.noSuchProperty === undefined); // 결과: true (해당 프로퍼티 없음 -> undefined 반환 -> true 반환)

// 6-2. in 연산자 이용하기
// 프로퍼티 이름은 따옴표로 감싸기
user.age = 22;
alert("age" in user); // 결과: true
alert("address" in user); // 결과: false
let key3 = "age";
alert(key3 in user); // 결과: true (변수에 할당하여 사용할 경우는 그대로 사용)
alert("key3" in user); // 결과: false

// 6-3. 두 방법의 차이점
let obj2 = {
    address: undefined
};

alert(obj.address === undefined); // 결과: true (사실 할당 값이 undefined 인 것이지 프로퍼티 자체가 없는 것은 아님)
alert("address" in obj2); // 결과: true (존재 여부를 제대로 비교 가능)


// 7. for...in 반복문
// 7-1. 전체 코드 검색
let foodOrder = {
    cookie: 2,
    pizza: 1,
    icecream: 9,
}
for(let key in foodOrder) { // 반복 변수의 이름은 자유롭게 변경 가능
    alert(key); // 결과: cookie, pizza, icecream
    alert(foodOrder[key]); // 결과: 2, 1, 9
}

// 7-2. 정수 프로퍼티의 정렬 
let codes = {
    "49": "독일", // "+49"로 변경하면 정수형이 아니기 때문에 입력 순서대로 출력
    "41": "스위스",
    "44": "영국",
    "1": "미국"
};

for(let code in codes) {
    alert(code); // 결과: 1, 41, 44, 49 (codes 객체의 프로퍼티가 정수이기 때문에 자동 정렬)
}


// 과제
// 1. 객체 만들기
let user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
delete user2.name;


// 2. 객체가 비어있는지 확인하기
let schedule = {};

alert(isEmpty(schedule)); // 결과: true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // 결과: false

function isEmpty(schedule) {
    for(let info in schedule) { // 한개라도 존재하면 for문에 진입
        return false; // 비어있지 않기 때문에 false 반환
    }
    return true; // 비어있으면 true 반환
}


// 3. 프로퍼티 합계 구하기
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 140
}
let sum = 0;
for(let salary in salaries) {
    sum = sum + salaries[salary];
}
alert(sum); // 결과: 400


// 4. 프로퍼티 값 두배로 만들기
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let prop in obj) {
        if(typeof obj[prop] == 'number') { // 해당 프로퍼티의 타입을 문자열로 반환
            obj[prop] = obj[prop] * 2;
        }
    }
}
multiplyNumeric(menu);
alert(menu.width + ":" + menu.height);