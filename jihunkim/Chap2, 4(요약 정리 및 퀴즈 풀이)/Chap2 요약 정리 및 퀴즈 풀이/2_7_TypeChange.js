// 1. 문자형 변환
let value = true;
alert("변경 전 타입: " + typeof value); // 결과: boolean
                                        // 원래 type은 boolean인데 문자형("boolean")으로 자동 변경되어 표시  

value = String(value); // boolean 타입을 문자형으로 수동 변경
alert("변경 후 타입: " + typeof value); // 결과: String


// 2. 숫자형 변환
// 2-1. 산술 표현식을 이용한 자동 변환
alert("9" / "3");

// 2-2. Number 메소드를 통한 수동 변환
let str = "123";
alert("변경 전 타입: " + typeof str); // 결과: string

let num = Number(str);
alert("변경 후 타입: " + typeof num); // 결과: number

// 2-3. 타입별 숫자형 변환
alert(Number("   123   ")); // 결과: 123 (공백 제거 후 남은 문자가 숫자이므로 변환 가능)
alert(Number("123a")); // 결과: NaN (a로 인해 숫자 변환 실패)
alert(Number("")) // 결과: 0
alert(Number(true));  // 결과: 1
alert(Number(false)); // 결과: 0
alert(Number(null)); // 결과: 0
alert(Number(undefined)); // 결과: NaN


// 3. 불린형 변환
alert(Boolean(1)); // 결과: true (숫자 1을 의미)
alert(Boolean(0)); // 결과: false (숫자 0을 의미)
alert(Boolean("halo")); // 결과: true (문자열 halo를 의미)
alert(Boolean("")); // 결과: false (빈문자열을 의미)
alert(Boolean("0")); // 결과: true (문자열 0을 의미)
alert(Boolean("   ")); // 결과: true (빈문자열이 아니므로 문자열 취급)