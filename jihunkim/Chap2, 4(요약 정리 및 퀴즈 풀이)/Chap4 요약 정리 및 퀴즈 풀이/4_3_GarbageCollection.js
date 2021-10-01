// 1. 삭제되는 값 예제
// 1) user1 객체가 name 값을 참조 중
let user1 = {
    name: "Jane"
};

// 2) 널 값으로 덮는 순간 <name: "Jane">을 참조하는 값이 사라짐 -> 도달 불가능 -> 삭제
user1 = null; 


// 2. 삭제되지 않는 값 예제
// 1) user2 객체가 name 값을 참조 중
let user2 = {
    name: "John"
};

// 2) admin 객체도 name 값을 참조 중
let admin = user2; 

// 3) user2는 더이상 name 값을 참조하지 않지만 admin이 참조중 -> 도달 가능 -> 생존
user2 = null; 


// 3. 연결된 객체
function marry(man, woman) { // mary 함수 생성 -> 두 객체가 서로 참조하는 구조
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({ // family 객체 생성
        name: "John"
    }, {
        name: "Ann"
    });

alert("남편: " + family.father.name + ", 아내: " + family.mother.name); // 결과: John, Ann
alert("남자의 아내: " + family.father.wife.name + ", 여자의 남편: " + family.mother.husband.name); // 결과: Ann, John

delete family.father; // father 참조가 삭제되었지만 <name: "John"> 데이터는 살아있음 -> mother.husband 참조

delete family.mother.husband; // <name: "John"> 값의 마지막 참조도 삭제됨 -> 도달 불가능 -> 삭제


// 4. 루트 객체의 참조 삭제
family = null;

alert("아내: " + family.mother.name); // 결과: "Uncaught TypeError: Cannot read property 'mother' of null"
