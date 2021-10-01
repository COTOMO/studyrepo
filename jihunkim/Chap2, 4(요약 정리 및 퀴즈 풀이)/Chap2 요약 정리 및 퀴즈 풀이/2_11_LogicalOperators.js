// 1. || (OR)
// 1-1. 가능한 조합
alert(true || true); // 결과: true
alert(false || true); // 결과: true
alert(true || false); // 결과: true
alert(false || false); // 결과: false

// 1-2. 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "Churky";
alert(firstName || lastName || nickName || "익명"); // 결과: Churky (firstName부터 검사를 하면서 존재하면 그 값을 반환, 끝까지 없으면 익명을 반환)

// 1-3. 단락평가
// 단락평가는 왼쪽을 시작으로 오른쪽으로 평가를 진행하는데, truthy가 나오면 나머지 값은 그대로 놓아두고 평가 멈춤
true || alert("not printed"); // alert 절대 실행 안됨
false || alert("printed");


// 2. && (AND)
// 2-1. 가능한 조합
alert(true && true); // 결과: true
alert(false && true); // 결과: false
alert(true && false); // 결과: false
alert(false && false); // 결과: false

// 2-2. 피연산자가 여러개인 경우
alert(1 && 2 && null && 3); // 결과: null (1, 2는 truthy이므로 패스하고 null이 최초 falsy이므로 null 반환, 그 뒤는 무시)
alert(1 && 2 && 3); // 결과: 3 (1, 2, 3 모두 truthy이므로 마지막 값 반환)

// 3. ! (NOT)
alert(!true); // 결과: false
alert(!0); // 결과: true (0 -> false -> ! -> true)
alert(!!"non-empty string"); // 결과: true (문자열 -> true -> ! -> false -> ! -> true)
alert(Boolean("non-empty string")); // 위와 같음
alert(!!null); // 결과: false (null -> false -> ! -> true -> ! -> false)
alert(Boolean(null)); // 위와 같음

// 과제
// 1번. OR연산의 결과
alert(null || 2 || undefined); // 결과: 2

// 2번. OR연산의 피연산자가 alert인 경우
alert(alert(1) || 2 || alert(3)); // 결과: 첫번째 alert으로 1 출력 -> 두번째 alert으로 2출력
                                  // 이유: alert(1)을 평가하여 1이 출력되지만 해당 메서드는 undefined를 반환하므로 다음 평가 실행

// 3번. AND 연산의 결과
alert(1 && null && 2); // 결과: null

// 4번. AND 연산자의 피연산자가 alert일 경우
alert(alert(1) && alert(2)); // 결과: alert 실행으로 1출력, 반환값 없기 때문에 undefined출력

// 5번. OR AND OR 연산자 구성
alert(null || 2 && 3 || 4); // 결과: 3 (우선순위가 && 더 높기 때문에 'null || 3 || 4' 실행)

// 6번. 사이 범위 확인하기
let age = 22;
if(age >= 14 && age <= 90) {
    alert("14세 이상 90세 이하에 속합니다");
}

// 7번. 바깥 범위 확인하기
if(age < 14 || age > 90) {
    alert("14세 이상 90세 이하에 속하지 않습니다");
}

// 8번. if에 대한 고찰
if(-1 || 0) alert('first'); // 결과: 실행 (-1이 truthy)
if(-1 && 0) alert('second'); // 결과: 미실행 (0이 falsy)
if(null || -1 && 1) alert('third'); // 결과: 실행 (&&결과 마지막 truthy값 반환 -> null || 1 -> 1)

// 9번. 로그인 구현하기
let id = prompt("Who's there?", '');
if(id == 'Admin') {
    let pwd = prompt('Password?', '');
    if(pwd == 'TheMaster') {
        alert('환영합니다!');
    } else if(pwd == '' || pwd == null) {
        alert('비밀번호 입력이 취소되었습니다!');
    } else {
        alert('비밀번호 인증에 실패하였습니다!');
    }
} else if (id == '' || id == null) {
    alert('아이디 입력이 취소되었습니다!');
} else {
    alert('아이디 인증에 실패하였습니다.')
}