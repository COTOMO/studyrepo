// aalert
alert("1번 alert 띄우기 - 김치!!");

// prompt
let country = prompt('국적을 입력해주세요.', 'Korea'); // 사용자에게 보이는 문자열, 필드 초기값
alert(`2번 prompt 띄우기 - 당신의 국적은 ${country}입니다:)`); // 입력하지 않으면 빈 값

// confirm
let isLike = confirm("3번 confirm 띄우기 - 당신은 김치를 좋아합니까?");
alert(isLike); // yes - true, no - false

// 실습
let name = prompt('아나타노나마에와?', '');
alert(`당신의 이름은 ${name}입니다.`);
