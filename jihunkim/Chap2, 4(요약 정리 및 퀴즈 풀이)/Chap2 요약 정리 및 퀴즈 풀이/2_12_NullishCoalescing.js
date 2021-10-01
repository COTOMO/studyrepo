// 1. ?? 사용하기
let firstName = null;
let lastName = null;
let nickName = "Churky";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // 결과: Churky (null이나 undefined가 아닌 1번째 피연산자)

// 2. '??' vs '||'
let weight = 0;

alert(weight || 100); // 결과: 100 (0은 falsy 값이기 때문에 null이나 undefined값과 동일 취급)
alert(weight ?? 100); // 결과: 0 (0을 할당 받았기 때문에 확정된 값으로 취급)

// 3. 연산자 우선순위 - &&, || > ?? > =, ?
let height = null;
let width = null;

let area_no = height ?? 100 * width ?? 50; // 100 * width 먼저 계산
let area_yes = (height ?? 100) * (width ?? 50);

alert(area_no); // 결과: 0 (height ?? 0 ?? 50 -> 처음으로 나오는 null, undefined 아닌 값)
alert(area_yes); // 결과: 5000

// 4. 안정성 이슈
// let x = 1 && 2 ?? 3; // 결과: Uncaught SyntaxError: Unexpected token '??'
let x = (1 && 2) ?? 3;
alert(x); // 결과: 2