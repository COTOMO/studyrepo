// 1. while문
let i = 0;
while(i < 3) {
    alert("while문 증가: " + i); // 결과: 0, 1, 2 (iteration 3변 실행)
    i++;
}

while(i) { // i != 0 을 줄여서 사용 가능 -> 0이 되면 falsy로 취급되어 반복을 멈춤
    alert("while문 감소: " + i); // 결과: 3, 2, 1 (iteration 3번 실행)
    i--;
}

// 2. do...while문
do {
    alert("do..while문: " + i); // 결과: 0, 1, 2 (iteration 3번 실행)
    i++;
} while(i < 3);

// 3. for 반복문
// 3-1. 기본적인 구조
for(let j = 0; j < 3; j++) { // 'let j = 0': begin (최초 1번 실행)
                             // 'j < 3': condition (반복마다 해당 조건 확인 후 false이면 멈춤)
                             // 'j++': step (각 반복의 body실행 후 실행)
                             // 'alert(...)': body (조건이 true이면 계속 실행)
    alert("for문 기본구조: " + j); // 결과: 0, 1, 2      
                                          
}

// 3-2. 인라인 방식 변수 선언
for(i = 0; i < 3; i++) { // 1번에서 이미 정의한 변수 i 사용하기
    alert("for문 인라인변수: " + i); // 결과: 0, 1, 2
}

// 3-3. 구성요소 생략하기
for(; i > 0; i--) {
    alert("for문 begin 생략: " + i); // 결과: 3, 2, 1
}

for(; i < 3;) {
    alert("for문 begin, step 생략: " + i++); // 결과: 0, 1, 2
}

// 4. 반복문 빠져나오기
let sum = 0;

while(true) {
    let value = +prompt("숫자를 입력하세요", ''); // 숫자로 형변환
    
    if(!value) break; // value를 입력하지 않거나 cancel일 경우 실행 -> while문을 빠져나감

    sum += value;
}
alert("합계: " + sum); // break문 실행 후 첫 번째로 실행되는 줄

// 5. 다음 반복으로 넘어가기
for(let k = 0; k < 10; k++) {
    
    if(k % 2 == 0) continue; // k가 짝수이면 남아있는 본문 내용을 패스하고 다음 반복으로 넘어감

    alert("for문 continue 사용하기: " + k); // 결과: 1, 3, 5, 7, 9 (k가 홀수인 경우에만 실행)
}

// 6. break/continue와 레이블
outer: for(let n = 0; n < 3; n++) { // outer 호출 시, 해당 for문을 벗어남
    for(let m = 0; m < 3; m++) {
        
        let input = prompt(`(${n}, ${m})의 값: `, '');

        if(!input) break outer; // 입력받은 input값이 없거나 cancel일 경우 실행 -> outer 라벨이 있는 for문 빠져나감

        alert("입력받은 값: " + input); // 입력받은 값이 있는 경우 실행
    }
}
alert("완료!!");


// 과제
// 1. 반복문의 마지막 값
let t = 3;

while(t) {
    alert(t--); // t: 3, 2, 1
}
// 답: 1, 이유: 0은 falsy 취급하기 때문에 while문에서 빠져나간다


//2. while문 출력값 예상하기
// 2-1. 전위형 증가 연산자 사용
let u = 0;
while (++u < 5) alert(u); 
// 답: 1, 2, 3, 4

// 2-2. 후위형 증가 연산자 사용
let v = 0; 
while (v++ < 5) alert(v);
// 답: 1, 2, 3, 4, 5


// 3. for문 출력값 예상하기
// 3-1. 전위형 증가 연산자 사용
for(let i = 0; i < 5; i++) alert(i);
// 답: 0, 1, 2, 3, 4

//3-2. 후위형 증가 연산자 사용
for(let i = 0; i < 5; ++i) alert(i);
// 답: 0, 1, 2, 3, 4


// 4. for문 이용하여 짝수 출력하기
for(let i = 2; i <= 10; i++) {
    if(i % 2 != 0) continue;
    alert("짝수: " + i);
} 


// 5. for문을 while문으로 바꾸기
// for문
for(let i = 0; i < 3; i++) {
    alert(`for - number ${i}`);
}

// while문
let x = 0;
while(x < 3) {
    alert(`while - number ${x}`);
    x++;
}


// 6. 사용자가 유효한 값 입력시까지 프롬트 창 띄우기
while(true) {
    let number = prompt('100을 초과하는 숫자를 입력해주세요.', '');
    if(number > 100 || number == '' || number == null) break;
}


// 7. 소수 출력하기
let prime_num = prompt('숫자를 입력하세요. 해당 범위 중 소수만 출력해드립니다.', '');

for(let i = 2; i <= prime_num; i++) {
    let chk = true;

    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            chk = false;
            break;
        }
    }

    if(chk) {
        alert("소수: " + i);
    }
}

// 레이블을 이용한 구현
let prime_num2 = prompt('숫자를 입력하세요. 해당 범위 중 소수만 출력해드립니다.', '');

nextPrime:
for(let i = 2; i <= prime_num2; i++) {

    for(let j = 2; j < i; j++) {
        if(i % j == 0) continue nextPrime;
    }
    
    alert("소수: " + i);
}
