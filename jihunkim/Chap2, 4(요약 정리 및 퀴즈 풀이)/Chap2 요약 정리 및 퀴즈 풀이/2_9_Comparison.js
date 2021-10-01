// 1. 불린형 반환
let result = 10 > 9;
alert(result); // 결과: true


// 2. 문자열 비교
alert('Z' > 'A'); // 결과: true
alert('a' > 'A'); // 결과: true (유니코드 순서상 a가 더 큼)
alert('Glow' > 'Glee'); // 결과: true (문자가 달라지는 3번째 시점에서 'o'가 더 큼)
alert('Bee' > 'Be'); // 결과: true (비교 끝까지 동일하면 길이가 더 긴 문자열이 더 큼)


// 3. 서로 다른 형을 가진 값 비교
alert('02' > 2); // 결과: false ('02' -> 2로 반환)
alert(true == 1); // 결과: true (true -> 1로 반환)

let a = 0;
let b = "0";
alert(Boolean(a)); // 결과: false
alert(Boolean(b)); // 결과: true
alert(a == b); // 결과: true (동등 연산자는 "0"을 숫자 0으로 변환, 불린형 변환과 또 다른 규칙을 갖고 있음)


// 4. 일치 연산자
// 4-1. 동등 연산의 문제점
alert(0 == false); // 결과: true (false를 숫자형으로 바꾸기 때문에 0과 false 구분 불가)
alert('' == false); // 결과: true

// 4-2. 일치 연산자를 통해 타입까지 비교하기
alert(0 === false); // 결과: false
alert(0 !== false); // 결과: true


// 5. null vs undefined
alert(null === undefined); // 결과: false
alert(null == undefined); // 결과: true


// 6. null vs 0
alert(null > 0); // 결과: false (산술 연산은 null -> 0으로 변환)
alert(null == 0); // 결과: false (동등 연산은 null이면 무조건 false)


// 7. 비교 불가능한 undefined
alert(undefined > 0); // 결과: false (산술 연산은 undefined -> NaN으로 변환)
alert(undefined == 0); // 결과: false (동등 연산은 undefined면 무조건 false)


// 과제
alert(5 > 4); // 결과: true
alert("apple" > "pineapple"); // 결과: false ('a' < 'p')
alert("2" > "12"); // 결과: true
alert(undefined == null); // 결과: true
alert(undefined === null); // 결과: false
alert(null == "\n0\n"); // 결과: false (null을 동등비교해서 true가 나오는 값은 undefined 밖에 없음)
alert(null === +"\n0\n"); // 결과: false (형이 다름 -> null === 0)

