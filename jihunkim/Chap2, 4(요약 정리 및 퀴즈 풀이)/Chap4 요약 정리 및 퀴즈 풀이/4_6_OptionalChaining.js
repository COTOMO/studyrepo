// 1. 옵셔널 체이닝 사용여부에 따른 차이
// 1) 빈 객체
let user = {};
//alert(user.address.street); // 결과: Uncaught TypeError: Cannot read property 'street' of undefined
alert(user?.address?.street); // 결과: undefined

// 2) 없는 객체
let user2 = null;
alert(user2?.address); // 결과: undefined
alert(user2?.address.street); // 결과: undefined

// 2. 함수에서 사용하기
let user3 = {
  admin() {
    alert("관리자 계정입니다.");
  },
};

let user4 = {};

user3.admin?.(); // 결과: 관리자 계정입니다.
user4.admin?.(); // 결과: 오류 없이 종료

// 3. 객체 프로퍼티에서 사용하기
let user5 = {
  firstName: "Ryon",
};

let user6 = null;

let key = "firstName";

alert(user5?.[key]); // 결과: Ryon
alert(user6?.[key]); // 결과: undefined
alert(user5?.[key]?.something?.not?.existing); // 결과: undefined (something 프로퍼티가 없으므로 평가 멈춤)

// 4. 삭제하기
delete user5?.firstName; // user5에 firstName이 존재하면 삭제
alert("삭제성공?" + user5?.[key]); // 결과: 삭제성공? undefined
