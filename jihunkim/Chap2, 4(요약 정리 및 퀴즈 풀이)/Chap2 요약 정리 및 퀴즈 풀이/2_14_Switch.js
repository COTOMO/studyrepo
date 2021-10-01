// 1. switch문 기본 사용법
let a = 2 + 3;

switch(a) {
    case 4:
        alert('비교 값보다 작습니다.');
        break;
    case 5:
        alert('비교 값과 일치합니다.'); // 결과: '비교 값과 일치합니다' 실행 (이후 조건문 탈출)
        break;
    case 6:
        alert('비교 값보다 큽니다.');
        break;
    default:
        alert('어떤 값인지 파악할 수 없습니다.');
}

// 2. swtich문 break가 없다면
switch(a) {
    case 4:
        alert('비교 값보다 작습니다.');
    case 5:
        alert('비교 값과 일치합니다.'); // 결과: '비교 값과 일치합니다' 실행 (이후 case 6, default 모두 실행)
    case 6:
        alert('비교 값보다 큽니다.'); // 결과: '비교 값보다 큽니다.' 실행
    default:
        alert('어떤 값인지 파악할 수 없습니다.'); // 결과: '어떤 값인지 파악할 수 없습니다.' 실행
}

// 3. 다양한 표현식 사용하기
let b = "1";
let c = 0;

switch(+b) { // 문자열 "1" -> 숫자 1로 변경
    case c + 1: // 0 + 1 = 1 계산 실행
        alert('일치합니다.'); // 해당 케이스 실행
        break;
    default:
        alert('해당 코든느 실행되지 않음');
}

// 4. 여러 개의 case문 묶기
switch(a) {
    case 5:
        alert('계산이 맞았습니다.'); // 해당 케이스 실행
        break;
    case 4: 
    case 6:
        alert('계산이 틀렸습니다.'); // a 값이 4 또는 6이면 해당 케이스 실행
        break;
    default:
        alert('어떤 값인지 파악할 수 없습니다.');
}

// 5. 자료형의 중요성
let arg = prompt("값을 입력해주세요", '');
switch(arg) {
    case '0':
    case '1':
        alert('0 또는 1을 입력했습니다.');
        break;
    case '2':
        alert('2를 입력했습니다.');
        break;
    case 3:
        alert('3을 입력해도 실행되지 않습니다.');
        break;
    default:
        alert('0~2에 포함되지 않습니다.');
}

// 과제
// 1. switch문 -> if문 변환
let browser = prompt('사용하는 브라우저가 뭔가요?', '');
if(browser == 'Edge') {
    alert('Edge를 사용하고 계시네요!');
} else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari') {
    alert('지원하는 브라우저입니다.');
} else {
    alert('지원되는 브라우저를 사용하세요');
}

// 2. if문 -> switch문 변환
let num = +prompt('num?', '');

switch(num) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
}