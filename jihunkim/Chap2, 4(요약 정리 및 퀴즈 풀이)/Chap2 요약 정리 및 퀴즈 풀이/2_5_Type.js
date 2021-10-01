let name = "Jane";

alert(`Hi ${1+2}`); // 결과: Hi 3
alert(`Hi ${"name"}`); // 결과: Hi name
alert(`Hi ${name}`); // 결과: Hi Jane

alert(typeof undefined); // 결과: undefined
alert(typeof 0); // 결과: number
alert(typeof 1234567890n); // 결과: bigint
alert(typeof true); // 결과: boolean
alert(typeof "Jane"); // 결과: string
alert(typeof Symbol("name")); // 결과: symbol
alert(typeof Math); // 결과: object
alert(typeof null); // 결과: object (언어적 오류지만 호환성을 위해 수정하지 않음 -> null은 객체 아님!)
alert(typeof alert); // 결과: function (잘못된 작동이지만 호환성을 위해 수정하지 않음 -> 함수 자료형은 없음!)