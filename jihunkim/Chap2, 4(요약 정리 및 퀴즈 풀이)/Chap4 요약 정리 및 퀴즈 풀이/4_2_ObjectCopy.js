// 1. 원시타입 복사 
let message = "Hey!!!";
let pharse = message; // 독립된 변수에 새롭게 복사 및 저장
alert("message: " + message + ", pharse: " + pharse); // 결과: Hey!!!, Hey!!!

message = "Hello!!!";
alert("message: " + message + ", pharse: " + pharse); // 결과: Hello!!!, Hey!!!


// 2. 객체 복사
let user = {
    name: "John"
};
let admin = user; // 객체가 복사되는 것이 아니라 참조 값만 복사 및 저장
alert("user: " + user.name + ", admin: " + admin.name); // 결과: John, John

user.name = "Jann";
alert("user: " + user.name + ", admin: " + admin.name); // 결과: Jann, Jann


// 3. 객체 - 참조에 의한 비교
// 3-1. 서로 동일한 객체
let a = {};
let b = a;
alert(a == b); // 결과: true
alert(a === b);  // 결과: true

// 3-2. 독립된 객체
let c = {
    msg: "Bye"
};
let d = {
    msg: "Bye"
};
alert(c == d); // 결과: false
alert(c === d); // 결과: false


// 4. 객체 - 독립된 객체로 복사하기
// 4-1. 순회하며 원시 수준까지 복사
let userInfo = {
    name: "Ann",
    age: 22
};

let userInfoCopy = {}; // 새로운 빈 객체 생성

for(let key in userInfo) { // 모든 프로퍼티를 순회하며 원시 수준으로 복사
    userInfoCopy[key] = userInfo[key];
}

alert("userInfo: " + userInfo.name + ", userInfoCopy: " + userInfoCopy.name); // 결과: Ann, Ann
userInfoCopy.name = "Jane"; // 복사한 객체 값 변경
alert("userInfo: " + userInfo.name + ", userInfoCopy: " + userInfoCopy.name); // 결과: Ann, Jane (기존 객체의 값에는 영향 없음)


// 4-2. Object.assign 메서드 이용하기 -> 얕은복사
let permissions1 = {
    canView: true
};
let permissions2 = {
    canEdit: true
};
// userInfo 객체에 새로운 프로퍼티 추가
Object.assign(userInfo, permissions1, permissions2); 
alert("추가된 프로퍼티: " + userInfo.canView + ", " + userInfo.canEdit); // 결과: true, true

// 기존에 존재했던 프로퍼티의 값 변경
Object.assign(userInfo, {name: "Peter"}); // 동일한 프로퍼티가 존재한다면 덮어씌워짐 (Ann -> Peter)
alert("수정된 프로퍼티 (name): " + userInfo.name); // 결과: Peter 

// 한번에 모든 프로퍼티 복사
let clone = Object.assign({}, userInfo);
alert("전체 복사: " + clone.name + ", " + clone.age + ", " + clone.canView + ", " + clone.canEdit); // 결과: Peter, 22, true, true


// 5. 중첩 객체 복사
// 5-1. Object.assign - 중첩 객체를 독립된 객체로 복사하지 못함
let userList = {
    name: "Kenneth",
    sizes: { // 객체 타입의 프로퍼티를 갖고 있음
        height: 189,
        weight: 87
    }
}

let userListCopy = Object.assign({}, userList);
alert("중첩 객체 복사: " + userList.sizes.height + ", " + userListCopy.sizes.height); // 결과: 189, 189
userList.sizes.height = 190; // 기존 객체 값 변경
alert("기존 객체 값 변경: " + userList.sizes.height + ", " + userListCopy.sizes.height); // 결과: 190, 190 (둘다 변경됨)

// 5-2. 중첩 객체까지 독립된 객체로 복사하기
let userListCopy2 = {};

for(let key2 in userList) {
    if(typeof userList[key2] == "object") { // 프로퍼티 타입이 객체인 경우
        for(let key3 in userList[key2]) { // 순회를 하면서 원시 수준으로 복사
            userListCopy2[key2[key3]] = userList[key2[key3]];
        }
    }
    userListCopy2[key2] = userList[key2];
}

alert("중첩 객체까지 전체 복사: " + userListCopy2.name + ", " 
                                 + userListCopy2.sizes.height + ", "
                                 + userListCopy2.sizes.weight); // 결과: Kenneth, 190, 87 (height 값은 5-1 에서 변경)