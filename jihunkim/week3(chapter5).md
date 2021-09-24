# Chapter 5 자료구조와 자료형

## 5.1 원시값의 메서드

**원시값**(Primitive Value)

- string, number, bigint, boolean, symbol, null, undefined

**객체**(Object)

- 프로퍼티에 다양한 종류의 값을 저장할 수 있다.
- 함수도 객체의 일종이다.



### 원시값을 객체처럼 사용하기

**자바스크립트 창안자는 다음과 같은 모순적인 상황을 해결해야만 했다.**

- 문자열, 숫자와 같은 원시값을 다뤄야 하는 작업이 많다. 
- 객체처럼 메서드를 이용하면 수월할 것 같다.
- 하지만 객체는 무겁고, 자원을 많이 사용한다.
- 원시값은 가볍고 빨라야한다.

**모순적인 상황을 해결한 방법**

- 원시값은 단일 값 형태를 유지한다.
- 문자열, 숫자, 불린, 심볼의 메서드와 프로퍼티에 접근할 수 있도록 한다.
- 이를 가능하게 하기 위해, 원시값이 메서드나 프로퍼티에 접근하려 하면 추가 기능을 제공해주는 특수한 객체, "원시 래퍼 객체(object wrapper)"를 만들어 주는데 이 객체는 곧 삭제된다.

> ❗ **래퍼 객체**(~~Rapper~~ **Wrapper Object**)
>
> 쉽게 말해서 순간적으로 생성되었다가 어떤 역할을 수행하게 해주고 다시 사라지는 객체를 래퍼 객체라고 하는데, 원시 타입도 무거운 객체처럼 유용한 메서드를 사용할 수 있게 하기위해 고안한 방식
>
> 자바스크립트 엔진이 암묵적으로 원시타입에 해당하는 래퍼 객체를 생성하고, 작업이 끝나면 다시 원시타입으로 돌려주는 것이다. 이러한 방법은 원시타입의 가벼움은 유지하면서, 객체의 유용한 기능도 쓰기 위한 방법이다. 
>
> 원시타입의 메서드를 호출하면
>
> 1. 순간적으로 원시타입에 해당하는 '객체'가 생성되고, 
> 2. 이 '객체'의 메서드가 호출된다.
> 3. 메서드 처리가 끝나면 이 '객체'는 사라지게 되고,
> 4. 원래의 원시타입만 남게 된다.



### 원시 래퍼 객체

래퍼 객체는 이름처럼 원시 타입의 값을 감싸는 형태의 객체인데, 원시 타입에 따라 `String`, `Number`, `Boolean`, `Symbol` 객체로 분류된다.

각 래퍼 객체 마다 제공하는 메서드 또한 다르다.

```js
let str = "Hello";
alert( str.toUpperCase() ); // HELLO

let n = 1.23456;
alert( n.toFixed(2) ); // 1.23
```







**동작방식**

1. 문자열 `str` 은 원시값의 프로퍼티(혹은 메서드)에 접근하는 순간 원시 래퍼 객체가 생성된다. 이 원시 래퍼 객체는 문자열의 값을 알고 있고,  `toUppterCase()` 와 같은 유용한 메서드를 제공한다.
2. 메서드가 싱행되고, 새로운 문자열이 반환된다.
3. 원시 래퍼 객체는 삭제되고, 원시값 `str` 만 남는다.

> **`String`, `Number`, `Boolean` 은 생성자로 사용하지 말자.**
>
> `new Number(1)` 또는 `new Boolean(false)`와 같은 문법을 사용해 원하는 타입의 "래퍼 객체"를 직접 만들 수 있다.
>
> 하위 호환성을 위해 남겨진 기능이지만 이런식으로 래퍼 객첵를 만들어서 사용하면 혼란을 불러올 수 있기 때문에 추천되지 않는다.
>
> ```js
> let zero = new Number(0);
> 
> if (zero) { // 변수 zero는 객체이므로, 조건문이 참이 됩니다.
> alert( "그런데 여러분은 zero가 참이라는 것에 동의하시나요!?!" );
> }
> ```



> **`null/undefined` 는 메서드가 없다.**
>
> 이 두 자료형에는 래퍼 객체가 없고, 어떠한 메서드도 제공하지 않는다.
>
> 어떤 의미에서는 해당 두 자료형이 **가장  원시적**인 값이다.
>
> 두 자료형에 속한 값의 프로퍼티에 접근하려 하면 에러가 발생한다.
>
> ```js
> alert(null.test); // error
> ```





## 5.2 숫자형



### 숫자형 표현 

- `e`

```js
let billion = 1000000000;
let billion = 1e9;  // 10억, 1과 9개의 0
alert( 7.3e9 );  // 73억 (7,300,000,000)

let ms = 0.000001;
let ms = 1e-6; // 1에서 왼쪽으로 6번 소수점 이동
```



- 진수표현

```js
// 16진수, 0x, (색, 문자 인코딩 등을 표현할 때 사용)
alert( 0xff ); // 255
alert( 0xFF ); // 255 (대·소문자를 가리지 않으므로 둘 다 같은 값을 나타냅니다.)

// 2진수, 0b, (비트 연산 디버깅에 주로 사용)
let a = 0b11111111; // 255의 2진수

// 8진수, 0o
let b = 0o377; // 255의 8진수

alert( a == b ); // true, 진법은 다르지만, a와 b는 같은 수
```



- `num.toString(base)`

base진법으로 num을 표현한 후, 이를 문자형으로 변환한다.

```js
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

> **주의!**
>
> 숫자 리터럴에서 바로 메서드를 사용할 때 주의해서 사용해야 한다.
>
> ```js
> console.log(12345.toString(16)); // 첫번째 점이후로 소수부로 인식
> console.log(12345..toString(16)); // 소수부인식을 피하고 메서드 사용
> console.log((1234).toString(16)); // 이렇게 사용하면 더 직관적
> ```



### 어림수 구하기

**실수를 정수로**

- `Math.round(실수)` : 소수점 첫째 자리에서 **반올림**
- `Math.ceil(실수)` : 소수점 첫째 자리에서 **올림**
- `Math.floor(실수)` : 소수점 첫째 자리에서 **내림**
- `Math.trunc(실수)` : 소수부 **버림** (IE 지원 Nope!!!)

|        | `Math.round` | `Math.ceil` | `Math.floor` | `Math.trunc` |
| :----- | :----------- | :---------- | :----------- | :----------- |
| `3.1`  | `3`          | `4`         | `3`          | `3`          |
| `3.6`  | `4`          | `4`         | `3`          | `3`          |
| `-1.1` | `-1`         | `-1`        | `-2`         | `-1`         |
| `-1.6` | `-2`         | `-1`        | `-2`         | `-1`         |

> `Math.round(-1.6)` , `Math.ceil(-1.6)` , `Math.floor(-1.6)`



**n번째 소수자리까지 구하기**

1. 곱하기와 나누기

소수점 두 번째 자리 숫자까지만 남기고 싶은 경우, 숫자에 `100` 또는 `1e2` 를 곱한 후

원하는 어림수를 구하고, 다시  `100` 또는 `1e2` 으로 나눈다.

```js
let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
```



2. `toFixed(n)`

n번째 까지 반올림방식으로 어림수를 구한 후 **문자형**으로 반환한다.

```js
const num = (12.3456789).toFixed(4);

console.log(typeof num, num, Number(num));
// string 12.3457 12.3457
```



### 부정확한 계산

> **숫자는 내부적으로 64비트 형식으로 표현되기 때문에 숫자를 저장하려면 정확히 64비트가 필요하다.** 
>
> 64비트 중 
>
> - 52비트는 숫자를 저장하는 데 사용
>
> - 11비트는 소수점 위치를(정수는 0) 저장 하는데 사용
>
> - 1비트는 부호를 저장하는 데 사용



- 만약 숫자가 너무 커서 64비트 저장공간을 뛰어넘는다면 `Infinity` 로 처리된다.

```js
alert( 1e500 ); // Infinity
```



- 정밀도 손실

```js
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004
```

`0.1`, `0.2` 같은 분수는 이진법으로 표현하면 무한 소수가 된다. `2`의 거듭제곱이 아닌 값으로 나누게 되면 무한 소수가 되어버리기 때문이다.

10진법에서 1/3을 정확히 나타낼 수 없듯이, 2진법을 사용해 *0.1* 또는 *0.2*를 **정확하게** 저장하는 방법은 없다.

IEEE-754에선 가능한 가장 가까운 숫자로 반올림하는 방법을 사용해 이런 문제를 해결한다. 

**반올림 규칙을 적용하면 발생하는 '작은 정밀도 손실’이 발생할 수 밖에 없다.**



- 해결

`num.toFixed(n)` 을 이용해서 문자형으로 보이기

```js
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30, 문자형
```

> 곱하기 나누기 방법을 사용해도 되지만 소수점이 발생할 수 있다는 단점에서 많이 사용되지 않음



### isNaN, isFinite

- `isNaN()` : 인수를 숫자로 변환한 다음 `NaN` 인지 체크

```js
alert( NaN === NaN ); // false, NaN은 NaN 자기 자신을 포함하여 그 어떤 값과도 같지 않다
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true
```



- `isFinite()` : 인수를 숫자로 변환하고 변환한 숫자가  `NaN/Infinity/-Infinity`가 아닌 일반 숫자인 경우 `true`를 반환

`isFinite()`는 문자열이 일반 숫자인지 검증하는 데 사용된다.

```js
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, NaN이기 때문
alert( isFinite(Infinity) ); // false, Infinity이기 때문
console.log(isFinite('')); // true, 빈 문자열이나 공백만 있는 문자열은 isFinite를 포함한 모든 숫자 관련 내장 함수에서 0으로 취급된다는 점에 유의
```



### parseInt와 parseFloat

덧셈 연산자 `+` 또는 `Number()`를 사용하여 숫자형으로 변형은 엄격하다. 완전한 숫자가 아니면 절대로 형변환이 되지 않는다.

```js
alert( +"100px" ); // NaN
```



실무에서 css등에 의해  `'100px'`, `'12pt'` 와 같이 단위를 혼용하는 경우가 많다. **이 때 숫자만 추출하기 위해 parseInt와 parseFloat 을 사용한다.**

```js
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, 정수 부분만 반환됩니다.
alert( parseFloat('12.3.4') ); // 12.3, 두 번째 점에서 숫자 읽기를 멈춥니다.

alert( parseInt('a123') ); // NaN, a는 숫자가 아니므로 숫자를 읽는 게 중지됩니다.
```

> **parseInt(str, base)**
>
> 두번째 인수에 진수를 지정하여 해당 진법으로 파싱할 수 있다.



### 기타 수학함수

`Math.random()` :  0과 1 사이의 난수를 반환 (1은 제외)

`Math.max(a, b, c...)` **/** `Math.min(a, b, c...)` : 인수 중 최대/최솟값을 반환

`Math.pow(n, power)` :  `n`을 power번 거듭제곱한 값을 반환.



## 5.3 문자열



### 문자열 사용하기

```js
let single = '작은따옴표';
let double = "큰따옴표";
// 템플릿 리터럴, 변수사용, 여러줄
let guestList = `손님:
 * John
 * Pete
 * Mary
 * 1 + 2 = ${1 + 2}
`;
```



### 특수기호

| 특수 문자                                            | 설명                                                         |
| :--------------------------------------------------- | :----------------------------------------------------------- |
| `\n`                                                 | 줄 바꿈                                                      |
| `\r`                                                 | 캐리지 리턴(carriage return). Windows에선 캐리지 리턴과 줄 바꿈 특수 문자를 조합(`\r\n`)해 줄을 바꿉니다. 캐리지 리턴을 단독으론 사용하는 경우는 없습니다. |
| `\'`, `\"`                                           | 따옴표                                                       |
| `\\`                                                 | 역슬래시                                                     |
| `\t`                                                 | 탭                                                           |
| `\b`, `\f`, `\v`                                     | 각각 백스페이스(Backspace), 폼 피드(Form Feed), 세로 탭(Vertical Tab)을 나타냅니다. 호환성 유지를 위해 남아있는 기호로 요즘엔 사용하지 않습니다. |
| `\xXX`                                               | 16진수 유니코드 `XX`로 표현한 유니코드 글자입니다(예시: 알파벳 `'z'`는 `'\x7A'`와 동일함). |
| `\uXXXX`                                             | UTF-16 인코딩 규칙을 사용하는 16진수 코드 `XXXX`로 표현한 유니코드 기호입니다. `XXXX`는 반드시 네 개의 16진수로 구성되어야 합니다(예시: `\u00A9`는 저작권 기호 `©`의 유니코드임). |
| `\u{X…XXXXXX}`(한 개에서 여섯 개 사이의 16진수 글자) | UTF-32로 표현한 유니코드 기호입니다. 몇몇 특수한 글자는 두 개의 유니코드 기호를 사용해 인코딩되므로 4바이트를 차지합니다. 이 방법을 사용하면 긴 코드를 삽입할 수 있습니다. |

> 따옴표, 큰따옴표 특수기호는 백틱에서 역슬래쉬를 사용하지 않아도 된다.
>
> 일반적으로 역슬래쉬는 개행을 이어주는 역할을 한다.
>
> ```js
> const s1 = `hello\
> world`;
> console.log(s1);
> // helloworld
> 
> const s2 = `hello\
> world
> `;
> console.log(s2);
> // helloworld, 개행을 이어주는 역할로 인식하여 오히려 한줄로 합쳐진다.
> ```



### 문자열 다루기

- 문자열 길이 : `str.length`

```js
const str = 'hello';

console.log(str.length); // 5
```



- 특정 글자에 접근하기 (문자열 인덱싱) : `str[idx]` , `str.charAt(idx)`

```js
const str = 'hello';

// 인덱싱
console.log(str[1]); // e
console.log(str[-1]); // undefined, 음수는 허용을 안한다.
console.log(str[999]); // undefined

// charAt
console.log(str.charAt(1)); // e, 구식메서드
console.log(str.charAt(-1)); // '', 빈문자열
console.log(str.charAt(999)); // '', 빈문자열
```



- 문자열 순회 : `for of`, (`for in` 은 불가)

```js
const str = 'hello';

for (let c of str) {
    console.log(c)
}
// h
// e
// l
// l
// o
```



- 문자열의 불변성, 문자열은 수정 불가 오직 재할당만 가능

```js
let str = 'hello';

str[0] = 'b'; // Error: Cannot assign to read only property '0' of string 'hello'
console.log(str); // hello

// 문자열 수정하기, 새로 만들어서 재할당하기
str = 'b' + str.slice(1); // 문자열 슬라이싱
console.log(str); // bello
```



- 대소문자 변경하기 : `str.toUpperCase()`, `str.toLowerCase()`

```js
const str = 'Hello';

console.log(str.toUpperCase()); // HELLO
console.log(str[1].toUppterCase()); // E
console.log(str.toLowerCase()); // hello
```



- 부분 문자열 찾기

**`str.indexOf(찾고자하는 문자열 [, 탐색시작위치])` , `str.lastIndexOf(찾고자하는 문자열 [, 탐색시작위치])`**

리턴값 : 찾고자 하는 문자열의 시작위치, 없으면 -1

```js
const str1 = 'Widget with id';
const str2 = 'As sly as a fox, as strong as an ox';

console.log(str1.indexOf('Widget')); // 0
console.log(str1.indexOf('widget')); // -1

console.log(str1.indexOf('id', 2)); // 12
console.log(str2.indexOf('as', 6)); // 7, 
console.log(str2.indexOf('as', 8)); // 17
console.log(str2.indexOf('as', 999)); // -1

console.log(str2.lastIndexOf('as')); // 27
```



- 부분문자열 포함여부 확인하기 : `str.includes(찾고자 하는 문자열 [, 탐색시작위치])`

```js
const str = 'Widget with id';

console.log(str.includes('with')); // true
console.log(str.includes('with', 5)); // true
console.log(str.includes('with', 8)); // false

//startsWith, endsWith, 특정문자열로 시작과 끝이 되어있는지 확인
alert( "Widget".startsWith("Wid") ); // true, "Widget"은 "Wid"로 시작
alert( "Widget".endsWith("get") ); // true, "Widget"은 "get"으로 끝
```



- 부분문자열 추출하기(슬라이싱) : `str.slice(str, [, end])` , `str.substring(str, [, end])` , `str.substr(str, [, end])`

| 메서드                  | 추출할 부분 문자열                    | 음수 허용 여부(인수)                      |
| :---------------------- | :------------------------------------ | :---------------------------------------- |
| `slice(start, end)`     | `start`부터 `end`까지(`end`는 미포함) | 음수 허용, (음수인 경우 문자열 끝이 기준) |
| `substring(start, end)` | `start`와 `end` 사이                  | 음수는 `0`으로 취급함                     |
| `substr(start, length)` | `start`부터 `length`개의 글자         | 음수 허용                                 |

```js
const str = "stringify";

// slice, 시작부터 끝까지
console.log( str.slice(0, 5); // strin, 0~4까지 5번째 위치의 글자는 포함하지 않음
console.log( str.slice(-4, -1) ); // gif, 끝에서 4번째부터 시작해 끝에서 1번째 위치까지

// subString, 사이
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// substr
console.log( str.substr(-4, 2) ); // gi, 끝에서 네 번째 위치부터 글자 두 개
```

> 가장 유연하고 안전한 slice를 최우선적으로 사용하자.



### 문자열 비교하기

- 문자열은 유니코드(utf-16)로 인코딩된다.
- 알파벳 소문자 > 알파벳 대문자



`str1.localCompare(str2)` 이용하여 제대로 비교하기

- `str1`이 `str2`보다 작으면 음수를 반환합니다.
- `str1`이 `str2`보다 크면 양수를 반환합니다.
- `str1`과 `str2`이 같으면 `0`을 반환합니다.

```js
console.log('B'.localeCompare('a')); // 1
console.log('b'.localeCompare('a')); // 1
console.log('a'.localeCompare('b')); // -1
console.log('a'.localeCompare('B')); // -1
console.log('a'.localeCompare('a')); // 0
console.log('a'.localeCompare('A')); // -1
console.log('a'.localeCompare('A')); // 1
console.log('ab'.localeCompare('a')); // 1
```





## 5.4 배열



### 배열

```js
// 생성
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// 인덱싱
arr1[0] = 999; // 수정
arr1[3] = 111; // 추가도 가능
console.log(arr1); // [999, 2, 3, 111]

// 신기한 점
const arr3 = new Array(3);
console.log(arr3); // [empty * 3], [3]이 아닌 빈 아이템 3개가 들어있는 배열이 생성된다.

// 다차원 배열
const matric = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```





### pop, push, shift, unshift

- `push(...items)` – `items`를 배열 끝에 더해줍니다.
- `pop()` – 배열 끝 요소를 제거하고, 제거한 요소를 반환합니다.
- `shift()` – 배열 처음 요소를 제거하고, 제거한 요소를 반환합니다.
- `unshift(...items)` – `items`를 배열 처음에 더해줍니다.

```js
const fruits = ["사과", "오렌지", "배"];

// pop
alert( fruits.pop() ); // 배열에서 "배"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
alert( fruits ); // 사과,오렌지

// push
fruits.push("배");
alert( fruits ); // 사과,오렌지,배

// shift
alert( fruits.shift() ); // 배열에서 "사과"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
alert( fruits ); // 오렌지,배

// unshift
fruits.unshift('사과');
alert( fruits ); // 사과,오렌지,배
```



### 배열의 내부 동작 원리

- 배열은 일종이다.
- 배열의 키는 숫자이다.
- 배열은 메모리상에서 연속적으로 값을 저장하기 때문에 순서가 있는 자료로써의 최적화된 역할을 수행한다.
- 배열을 객체처럼 프로퍼티를 추가할 수는 있지만 올바르게 배열이 동작하지 않을수 있다. 



### 반복문

- `for`

```js
let arr = ["사과", "오렌지", "배"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
```





- `for of`

```js
let fruits = ["사과", "오렌지", "자두"];

// 배열 요소(값)를 대상으로 반복 작업을 수행
for (let fruit of fruits) {
  console.log( fruit );
}
```





- `for in`

```js
let arr = ["사과", "오렌지", "배"];

// 배열의 인덱스(키)를 대상으로 반복 작업을 수행
for (let key in arr) {
  alert( arr[key] ); // 사과, 오렌지, 배
}
```

`for in` 은 배열에서 사용할 때 문제가 발생할 수 있기 때문에 다른 반복문을 이용하자.

- `for..in` 반복문은 *모든 프로퍼티*를 대상으로 순회한다. 키가 숫자가 아닌 프로퍼티도 순회 대상에 포함된다.
- `for..in` 반복문은 배열이 아니라 객체와 함께 사용할 때 최적화되어 있어서 배열에 사용하면 객체에 사용하는 것 대비 10~100배 정도 느리다.

> 배열 순회에서 `for in` 문 사용은 피하자.
>
> `for in` 문은 객체순회에 최적화되어있다.







### 배열의 길이 `length`

- `length` 는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값이다. 따라서 아주 큰 인덱스에 값을 할 당하면 `length` 의 값이 의도치 않게 나올수 있다.

```js
let fruits = [];
fruits[123] = "사과";

alert( fruits.length ); // 124
```



- `length` 프로퍼티의 또 다른 독특한 특징 중 하나는 쓰기가 가능하다.
- `length`의 값을 수동으로 증가시키면 아무 일도 일어나지 않지만 값을 감소시키면 배열이 잘린다. 짧아진 배열은 다시 되돌릴 수 없다.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 3

arr.length = 3;
console.log(arr); // [1, 2, 3];

arr.length = 5;
console.log(arr); // [ 1, 2, 3, <2 empty items> ]
```

- 이런 `length` 의 특징을 이용하면 `arr.length = 0` 으로 배열을 간단하게 비울 수 있다.



> **toString()**
>
> 배열엔 `toString` 메서드가 구현되어 있어 이를 호출하면 요소를 쉼표로 구분한 문자열이 반환된다.
>
> ```js
> const arr = [1, 2, 3];
> 
> console.log(arr.toString()); // 1, 2, 3
> ```



## 5.5 배열과 메서드



### 1. 요소를 더하거나 지우기

#### slice

`arr.slice([start], [end])`

>  start부터 end-1 까지의 요소를 복사한 새로운 배열을 리턴한다. **(배열 복사시 용이)**

```js
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.slice(1, 3)); // [2, 3]

const arr2 = arr1.slice();
console.log(arr1, arr2, arr1 === arr2);
// [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], false
```



#### splice

``arr.splice(index[, deleteCount, elem1, ..., elemN])`

> 배열의 요소를 **삭제**하거나 **삭제하고 그 자리에 추가**할 때 사용한다.
>
> **삭제된 요소로 구성된 배열**을 **반환**한다.
>
> **주목!** 배열의 **원하는 인덱스에 삽입**에도 유용하게 사용가능하다.
>
> 배열의 원본이 수정된다.

```js
let arr = ["I", "study", "JavaScript", "right", "now"];

// 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체합니다.
arr.splice(0, 3, "Let's", "dance");
console.log( arr ) // now ["Let's", "dance", "right", "now"]

// 삽입
arr.splice(2, 0, 'newItem1', 'newItem2');
console.log(arr);
// [ "Let's", 'dance', 'newItem1', 'newItem2', 'right', 'now' ]
```



#### concat

`arr.concat(arg1, arg2, ...)` or `arr.concat(arr)`

>배열의 모든 요소를 복사하고 `items`를 추가해 새로운 배열을 만든 후 이를 반환한다. `items`가 배열이면 이 배열의 인수를 기존 배열에 더해준다.

```js
let arr = [1, 2];

// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
alert( arr.concat([3, 4]) ); // 1,2,3,4

// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```



```js
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```

객체가 인자로 넘어오면 객체는 분해되지 않고 통으로 복사되어 더해진다.

```js
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
```

인자로 받은 유사 배열 객체에 특수한 프로퍼티 `Symbol.isConcatSpreadable`이 있으면 `concat`은 이 객체를 배열처럼 취급한다. 따라서 객체 전체가 아닌 객체 프로퍼티의 값이 더해진다.



### 2. 원하는 요소 찾기

#### find

`arr.find(func)`

> `func`의 반환 값을 `true`로 만드는 첫 번째 요소를 반환한다.

```js
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
```



#### findIndex

`arr.findIndex(func)`

> `func`의 반환 값을 `true`로 만드는 첫 번째 요소의 인덱스를 반환한다.



#### filter

`arr.filter(func)`

> `func`의 반환 값을 `true`로 만드는 전체 요소를 반환한다.

```js
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// 앞쪽 사용자 두 명을 반환합니다.
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```





### 3. 배열 전체 순회하기

#### forEach

`arr.forEach(func)`

> 모든 요소에 `func`을 호출함. **결과는 반환되지 않는다.**

```js
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
```



### 4. 배열 변형하기

#### map

`arr.map(func) `

> 모든 요소에 `func`을 호출하고, **반환된 결과를 가지고 새로운 배열을 만든다.**

```js
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```



#### reduce

```js
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

accumulator – 이전 함수 호출의 결과. initial은 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션)
item – 현재 배열 요소
index – 요소의 위치
array – 배열
```

> 요소를 차례로 돌면서 `func`을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출된다.

```js
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

> reduceright은 오른쪽부터 연산한다.





#### sort

`arr.sort((a, b) => a - b);`

> 배열을 정렬하고 정렬된 배열을 반환한다. 
>
> 콜백함수의 리턴값이 음수이면 오름차순, 양수이면 내림차순
>
> **배열의 원본이 수정된다.**



#### reverse

`arr.reverse()`

> 배열을 뒤집고 반환한다.
>
> **배열의 원본이 수정된다.**



### 5. 배열 ↔️ 문자열

#### join

`arr.join(기준)`

> 배열을 문자열로 변환한다. 인자간에 기준을통해 연결된다.
>
> **원본은 유지된다.**



#### split

`str.split(기준)`

> 문자열을 배열로 변환한다. 기준을 중심으로 문자열이 인자로 쪼개진다.
>
> **원본은 유지된다.**



### 6. 기타

`Array.isArray(arr)` – `arr`이 배열인지 여부를 판단함





## 5.6 iterable 객체

이터러블 객체는 배열을 일반화한 객체이다.

자바스크립트에서는 이터러블객체를 대상으로 지원하는 다양한 메서드가 존재한다.(`for..of`)

**문자열도 이터러블이다.**



#### 이터러블

> 이터레이터를 리턴한는 `[Symbol.iterator]()` 라는 메서드를 가진 값

배열, Set, Map 3개의 객체는 이터러블인데 그 이유는 `[Symbol.iterator]()` 라는 메서드를 가지고 있기 때문이다. `객체[Symbol.iterator]` 로 확인해보면 메서드를 가지고 있는것을 확인할 수 있다.

그리고 `객체[Symbol.iterator]()` 로 메서드를 실행하면 **이터레이터**를 리턴한다.

```javascript
const arr = [1, 2, 3];
arr[Symbol.iterator]; // ƒ values() { [native code] }, 메서드
arr[Symbol.iterator](); // Array Iterator {} <- 배열형 이터레이터 객체
```

#### 이터레이터

> `{ value, done}` 객체를 리턴하는 `next()` 라는 메서드를 가진 값

```javascript
const arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();

iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 3, done: false}
iterator.next(); // {value: undefined, done: true}
```

이터러블의 메서드를 통해서 이터레이터를 리턴받을수 있고 이터레이터의 `next()` 메서드를 통해서 이터러블 객체들의 순회정보를 확인할 수 있다.

이때 `for of` 문은 이터레이터의 `next()` 를 호출하면서 `{value, done}` 객체를 받아오고 value의 값을 사용한다. 그러다 `done` 이 false이면 순회를 종료한다.

- 이터레이터를 통한 순회 테스트

```javascript
const arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();
iterator.next();
for (const a of iterator) log(a);
// 2
// 3
```

이터레이터를 통해서 순회가 가능하고 이터레이터를 일부 진행시키고 순회하면 진행된 곳부터 시작된다.



#### 이터러블 순회 예시!!

```js
let range = {
  from: 1,
  to: 5
};

// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function() {

  // Symbol.iterator는 이터레이터 객체를 반환합니다.
  // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
  return {
    current: this.from,
    last: this.to,

    // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
    next() {
      // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 이제 의도한 대로 동작합니다!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

> 이터러블 객체의 핵심은 '관심사의 분리'에 있다.
>
> - `range`엔 메서드 `next()`가 없다.
> - 대신 `range[Symbol.iterator]()`를 호출해서 만든 ‘이터레이터’ 객체와 이 객체의 메서드 `next()`에서 반복에 사용될 값을 만들어낸다.

#### 위예시 코드 간결버전

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```





### 이터러블과 유사 배열

비슷해 보이지만 아주 다른 용어 두 가지가 있기때문에 헷갈리지 않으려면 두 용어를 반드시 잘 이해하고 있어야 한다.

- ***이터러블(iterable)*** 은 위에서 설명한 바와 같이 메서드 `Symbol.iterator`가 구현된 객체이다.
- ***유사 배열(array-like)*** 은 인덱스와 `length` 프로퍼티가 있어서 배열처럼 보이는 객체이다.

이터러블 객체(`for..of` 를 사용할 수 있음)이면서 유사배열 객체(숫자 인덱스와 `length` 프로퍼티가 있음)인 문자열이 대표적인 예이다.

이터러블 객체라고 해서 유사 배열 객체는 아니며, 유사 배열 객체라고 해서 이터러블 객체인 것도 아니다.



### Array.from

이터러블이나 유사 배열을 받아 ‘진짜’ `Array`를 만들어준다.

```js
// 유사배열
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (메서드가 제대로 동작한다.)
```



`Array.from`엔 ‘매핑(mapping)’ 함수를 선택적으로 넘겨줄 수 있다.

```js
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25
```





## 5.7 맵과 셋

### 맵

객체의 키는 오직 문자열만 가능하다. (ES6부터는 심볼도 가능)

맵은 다양한 자료형을 키로 사용할 수 있다. 심지어 맵에서는 객체를 키로 사용할 수 있다.



**주요 메서드**

- `new Map([[key,value]쌍이 있는 iterable])` : 맵을 생성한다.
- `map.set(key, value)` : 키와 밸류를 저장한다.
- `map.get(key)` : 키로 밸류를 얻는다.
- `map.has(key)` : key의 존재 여부를 확인하다. 
- `map.delete(key)` : 키와 해당하는 값을 삭제한다.
- `map.clear()` : 맵 안에 모든 요소를 삭제한다.
- `map.size()` : 맵 안에 모든 요소의 개수를 반환한다.



```js
const map = new Map();

// !!!맵에서 set메서드느 체이닝이 가능하다!!!
map.set('1', 'str1') // 문자형 키
  .set(1, 'num1') // 숫자형 키
  .set(true, 'bool1'); // 불린형 키

console.log(map);
// Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }
console.log(map.get(1));
// num1
console.log(map.get('1'));
// str1
```



> **맵을 세팅하고 불러올때 객체처럼 사용하지 말자**
>
> 맵은 객체처럼 `map[key] = 2;` 와 같은 형태로 사용할 수 있다. 하지만 이방식은 맵을 일반 객체처럼 취급하게 되어 여러 제약사항이 발생할 수 있다.
>
> 따라서 맵을 사용할 때는 `set, get` 메서드를 사용하자.
>
> ```js
> const map = new Map();
> 
> map.set('1', 'str1');
> map.set(1, 'num1');
> map['test'] = 123;
> 
> console.log(map);
> // Map(2) { '1' => 'str1', 1 => 'num1', test: 123 }
> // 맵으로 정의한 키-밸류와 객체로 정의한 키-밸류의 형태가 다르다.
> console.log(map.get(1));
> // num1
> console.log(map.get('test'));
> // undefined
> // 객체방식으로 정의한 키-밸류는 맵의 메서드를 사용할 수 없다.
> ```



### map에서의 반복작업

- `map.keys()` : 모든 요소의 키를 모아 **이터러블 객체**로 반환한다.
- `map.values()` : 모든 요소의 밸류를 모아 **이터러블 객체**로 반환한다.
- `map.entries()` : 모든 요소의 키와 밸류를 모아 **이터러블 객체**로 반환한다.

> 객체에서 `keys` , `values`, `entries` 의 반환값이 배열인데 반해 맵은 이터러블객체를 반환하는 점을 기억하자.

반환 받은 이터러블 객체는 `for of` 문으로 활용할 수 있다.



> **객체는 순서를 기억하지 못하지만** (정수 프로퍼티는 자동정렬, 그 외에는 추가한 순서대로)
>
> **맵은 삽인된 순서를 기억하고 있다.**



> 나의 추가) 맵은 `for of` 문만 사용이 가능하다.
>
> ```js
> const map = new Map();
> 
> map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
> 
> for (let v in map) { // 동작안함! 신기한건 에러도 안남!
>   console.log(v);
> }
> 
> for (let v of map) { // map이 map.entries()와 동치
>   console.log(v);
> }
> 
> ```
>
>  map이 map.entries()와 동치이다. 따라서  `[키, 값]` 쌍인 원소로 이루어진 이터러블이기 때문에 `for in ` d을 사용할 수 없다.



### 객체를 맵으로 바꾸기

```js
// 각 요소가 [키, 값] 쌍인 배열
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
```

맵은 위와 같이 생성자의 인자로 `[키, 값]` 쌍인 원소로 이루어진 배열을 전달해서 생성할 수 있다.



```js
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

`Object.entries(obj)` 메서드의 반환값은  `[키, 값]` 쌍인 원소로 이루어진 배열이기 때문에

`new Map(Object.entries(obj)) ` 형태로 객체를 맵으로 바꾸룻 있다.



### 맵을 객체로 바꾸기

맵을 객체로 바꿀때는 `Object.fromEntries` 메서드를 사용하면 된다. 

이 메서드는 인자로  `[키, 값]` 쌍인 원소로 이루어진 배열을 받고 반환값은 객체이다.

```js
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```



`map.entries()`를 호출하면 `[키, 값]` 쌍인 원소로 이루어진 이터러블 객체를 반환받고

이 값을 `Object.fromEntries` 메서드의 인자로 전달하면 객체로 변환할 수 있다.

```js
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환 (*)
let obj = Object.fromEntries(map); // !!! 짧게 줄여쓰기 가능

// 맵이 객체가 되었습니다!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2

```

`Object.fromEntries(map.entries())` 를 `Object.fromEntries(map)` 으로 줄여서 작성할 수 있다



**기억하자**

- 객체 ➡️ 맵 : `new Map(Object.entries(obj)) ` 

- 맵 ➡️ 객체 : `Object.fromEntries(map)`



### 셋

셋은 **집합처럼 중복된 값을 단일 존재의 값으로 모아놓는 컬렉션**이다. **오직 값만 저장**된다.

**주요 메서드**

- `new Set(이터러블)` : 셋을 생성한다.
- `set.add(value)` : 값을 추가하고 자신을 반환한다.
- `set.delete(value)` : 값을 제거한다. 제거되면 `true`, 실패시 `false`
- `set.has(value)` : 값이 존재하는지 확인한다.
- `set.clear()` : 셋의 모든 값을 삭제한다.
- `set.size()` : 섹에 모든 값의 개수를 반환한다.



셋은 중복된 값을 허용하지 않기 때문에 방문자 기록과 같은 상황에서 유용하게 사용할 수 있다.

```js
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}
```



> 셋 대신 배열을 사용하여 `arr.find` 로 중복된 값을 확인할 수도 있다.
>
> 하지만 배열은 전체 요소를 순회하기 때문에 성능면에서 좋지않다.



### 셋 순회하기

셋에서는 `for of` 문과 `forEach` 를 사용하여 순회할 수 있다.

```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

`forEach` 에서 `value` 는 셋의 값, `valueAgain` 도 똑같은 값, `set` 은 현재 셋을 가리킨다.

인자의 값이 두번인 이유는 맵과 셋의 서로 교환하기 위한 호환성을 위해서 라고한다.



- `set.keys()` : 모든 값을 모아 **이터러블 객체**로 반환한다.
- `set.keys()` : 모든 값을 모아 **이터러블 객체**로 반환한다.
- `set.values()` : 모든 값을 모아 **이터러블 객체**로 반환한다.
- `set.entries()` : 셋 내의 각 값을 이용해 만든 `[value, value]` 배열을 포함하는 이터러블 객체를 반환한다. `맵`과의 호환성을 위해 만들어졌다한다.

> `set.keys()`  와 `set.values()` 는 동일한 역할을 한다. 호환성을 위해 이렇다고 한다.

> **맵과 셋에는 forEach 반복문을 사용할 수 있다**



## 5.8 위크맵과 위크셋

### 위크맵

#### 맵과 위크맵의 차이점

- 위크맵의 키는 반드시 객쳐여야 한다.

맵의 키는 다양한 자료형을 허용하지만 위크맵의 키는 반드시 객채여야만 한다.



- 위크맵의 키로 사용된 객체가 아무것도 참조 하지 않게 된다면 메모리와 위크맵에서 자동으로 삭제된다.

일반적으로 객체가 맵의 키로 할당이 되었을때 해당 외부에서 해당 객체가 아무것도 참조하지 않게되더라고 맵의 키(객체)는 그대로 유지가 된다.

```js
let obj = {
  test: 123,
};

const map = new Map();
map.set(obj, 'object');
console.log(map); // Map(1) { { test: 123 } => 'object' }

obj = null;

console.log(map); // Map(1) { { test: 123 } => 'object' }
```



반면에 위크맵은 키로 사용된 객체가 외부에서 참조가 끊긴다며 그 즉시 가비지컬렉팅이 되어 위크맵에서도 삭제가 된다.

```js
let john = { name: 'John' };

let weakMap = new WeakMap();
weakMap.set(john, '...');

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 이제 메모리에서 지워집니다!
```

 근데 실제로는 `WeakMap { <items unknown> }` 이렇게 나오는데 왜이런지 궁금하다....흠



- 위크맵이 메서드는 단촐하다. 

(`keys()`, `values()`, `entries()` 메서드를 지원하지 않는다.)

```js
workMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
```



#### 위크맵의 유스케이스

- 추가데이터

객체가 살아있는 동안에만 유효한 상황일 때 활용

```js
weakMap.set(john, "비밀문서");
// john이 사망하면, 비밀문서는 자동으로 파기됩니다.
```



- 캐시

시간이 오래걸리는 작업을 저장해두어 재사용하기, 필요가 없다면 삭제

```js
// 📁 cache.js
let cache = new WeakMap();

// 연산을 수행하고 그 결과를 위크맵에 저장합니다.
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* 연산 수행 */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* ... 객체 ... */};

let result1 = process(obj);
let result2 = process(obj);

// 객체가 쓸모없어지면 아래와 같이 null로 덮어씁니다.
obj = null;
```



### 위크셋

#### 셋과 위크셋의 차이점

- 위크맵은 객체만 저장할 수 있다.



- 위크셋 안에 객체는 도달가능하지 않다며 삭제된다.

위크맵과 마찬가지로 객체의 참조가 끊기면 셋은 유지가 되지만 위크셋은 삭제가된다.



- 위크셋의 메서드는 단출하다. (`size`, `keys` 메서드 사용불가)

```js
weakSet.add()
weakSet.has()
weakSet.delete()
```



> 위크맵과 위크셋은 요소를 한 번에 얻는게 불가하여 반복 작업이 불가능하다.
>
> 추가적인 데이터를 저장하는 용도로 활용 가능하다.





## 5.9 Object.keys, values, entries



Keys(), values(), entries(), 순회(iteration)에 필요한 메서드는 포괄적인 용도로 만들어졌기 때문에 메서드를 적용할 자료구조는 일련의 합의를 준수해야 한다. 그렇기 때문에 만약 커스텀 자료구조를 대상으로 순회를 해야 한다면 이 메서드들을 쓰지 못하고 직접 이에 해당되는 메서드를 구현해야 한다.

- **in Map, Set, Array**

```js
map.keys()
set.values()
array.entiries()
```



- **in Object**

```js
Object.keys(obj)
Object.values(obj)
Object.entiries(obj)
```



```js
let user = {
  name: "John",
  age: 30
};

Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [ ["name","John"], ["age",30] ]
```





**아래와 같이 Object.values를 사용하면 프로퍼티 값을 대상으로 원하는 작업을 할 수 있다.**

```js
let user = {
  name: "Violet",
  age: 30
};

// 값을 순회합니다.
for (let value of Object.values(user)) {
  alert(value); // Violet과 30이 연속적으로 출력됨
}
```

> **Object.keys, values, entries는 심볼형 프로퍼티를 무시한다.**
>
> `for..in` 반복문처럼, Object.keys, Object.values, Object.entries는 키가 심볼형인 프로퍼티를 무시한다.
>
> 대개는 심볼형 키를 연산 대상에 포함하지 않는 게 좋지만, 심볼형 키가 필요한 경우엔 심볼형 키만 배열 형태로 반환해주는 메서드인 [Object.getOwnPropertySymbols](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)를 사용하면 된다. `getOwnPropertySymbols` 이외에도 키 *전체*를 배열 형태로 반환하는 메서드인 [Reflect.ownKeys(obj)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)를 사용해도 괜찮다.



> 문법이 다른이유?
>
> 자바스크립트에서 자료구조의 전체가 객체에 기반한다.
>
> 그러다보니 개발자가 다체적으로 `obj.values()` 라는 메서드르 구현해서 사용할 일이 많은데 (혹은 `map.values()` 처럼)
>
> 본인이 구현한 `values()` 메서드와 객체내장메서드인 `Object.values()` 를 모두 사용할 수 있게 하기 위한 유연성을 위해서 객체는 내장메서드로 남겨저있다.



> **이거는 무슨 뜻일까..?**
>
> 두 번째 차이는 메서드 `Object.*`를 호출하면 iterable 객체가 아닌 객체의 한 종류인 배열을 반환한다는 점입니다. ‘진짜’ 배열을 반환하는 이유는 하위 호환성 때문입니다.



#### 예제

`Object.fromEntries(array)` : [키, 값]으로 이루어진 배열 (entries배열) 을 다시 객체로 변환하는 메서드

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```



**과제**

**프로퍼티 값 더하기** 

급여 정보가 저장되어있는 객체 `salaries`가 있습니다.

`Object.values` 와 `for..of` 반복문을 사용해 모든 급여의 합을 반환하는 함수 `sumSalaries(salaries)`를 만들어보세요.

`salaries`가 빈 객체라면, `0`이 반환되어야 합니다.

```js
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
```

**내 풀이**

```js
# 일반 풀이 
const sumSalaries = salaries => {
  let total = 0
  for (let value of Object.values(salaries)) {
    total += value
  }
  if (salaries === undefined) {
    return 0
  }
  return total
}

# reduce 메서드 사용
const sumSalariesReduce = salaries => {
  return Object.values(salaries).reduce((acc, cur) => acc + cur, 0)
}
```



**프로퍼티 개수 세기**

객체 프로퍼티 개수를 반환하는 함수 `count(obj)`를 만들어보세요.

```javascript
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
```

가능한 짧게 코드를 작성해 보세요.

주의: 심볼형 프로퍼티는 무시하고 ‘일반’ 프로퍼티 개수만 세주세요.

**내 풀이**

```js
function count(obj) {
  return Object.keys(obj).length;
}
```



## 5.10 구조 분해 할당

객체와 배열은 자바스크립트에서 가장 많이 쓰이는 자료 구조인데, 주로 키를 가진 데이터 여러 개를 하나의 엔티티에 저장할 땐 객체를, 컬렉션에 대이터를 순서대로 저장할 땐 배열을 사용한다.

개발을 하다 보면 함수에 객체나 배열을 전달해야 하는 경우가 생기는데, 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우가 생기곤 한다. 바로 이럴 때 객체나 배열을 변수로 '분해'할 수 있게 해주는 특별한 문법인 *구조 분해 할당(destructuring assignment)* 을 사용한다.

1. **배열 분해하기**

   ```js
   // 이름과 성을 요소로 가진 배열
   let arr = ["Wondu", "Rho"]
   
   // 구조 분해 할당을 이용해
   // firstName엔 arr[0]을
   // surname엔 arr[1]을 할당하였습니다.
   
   // 예전엔 이런 방식으로 배열의 요소를 나타냈었지만, 지금은 너무 Old School하다.
   console.log(arr[0], arr[1])
   
   // 아래는 New School한 배열 구조 분해 할당 
   let [firstName, surname] = arr;
   
   console.log(firstName); // Wondu
   console.log(surname);  // Rho
   
   // split 배열 메서드를 통해 배열에 직접적으로 접근하지 않고 배열 구조 분해 할당 사용
   let [firstName, surname] = "Wondu Rho".split(' ');
   ```

   

   > ❗결코 **'분해(destructuring)'는 '파괴(destructive)'를 의미하지 않는다.**
   >
   > **구조 분해 할당이란** 명칭은 **어떤 것을 복사한 이후에 변수로 '분해(destructurize)'해준다는 의미** 때문에 붙여졌다. 이 과정에서 **분해 대상은 수정 또는 파괴되지 않는다.**
   >
   > **배열의 요소를 직접 변수에 할당하는 것보다 코드 양이 줄어든다는 점만 다르다.**
   >
   > ```javascript
   > // let [firstName, surname] = arr;
   > let firstName = arr[0];
   > let surname = arr[1];
   > ```



2. **배열 구조 분해 할당 스킬**

   > ❗ 쉼표를 사용하여 요소 무시하기(쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있다.
   >
   > ```js
   > // 두 번째 요소는 필요하지 않음
   > let [firstName, , title] = ["Wondu", "Wondoo", "Wondo", "Rho"];
   > 
   > console.log( title ); // Wondo
   > ```
   >
   > ❗**할당 연산자 우측엔 모든 이터러블이 올 수 있다.** 배열뿐만 아니라 **모든 이터러블(iterable, 반복 가능한 객체)에 구조 분해 할당을 적용할 수 있다**.
   >
   > ```js
   > let [a, b, c] = "abc"; // ["a", "b", "c"]
   > let [one, two, three] = new Set([1, 2, 3]);
   > ```
   >
   > ❗**할당 연산자 좌측엔 뭐든지 올 수 있다.** 할당 연산자 좌측엔 **‘할당할 수 있는(assignables)’ 것이라면 어떤 것이든 올 수 있다.**
   >
   > ```js
   > let user = {};
   > [user.name, user.surname] = "Wondoo Rho".split(' ');
   > 
   > alert(user.name); // Wondoo
   > ```
   >
   > ❗**.entries()로 반복하기**. Object.entries(obj) 메서와 구조 분해를 조합하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있다.
   >
   > ```js
   > let user = {
   >   name: "Wondoo",
   >   age: 32
   > };
   > 
   > // 객체의 키와 값 순회하기
   > for (let [key, value] of Object.entries(user)) {
   >   alert(`${key}:${value}`); // name:Wondoo, age:32이 차례대로 출력
   > }
   > ```
   >
   > ❗**변수 교환 트릭**. 두 변수에 저장된 값을 교환할 때 구조 분해 할당을 사용할 수 있다.
   >
   > ```js
   > let guest = "EuiMyung";
   > let admin = "Jihun";
   > 
   > // 변수 guest엔 Jihun, 변수 admin엔 EuiMyung이 저장되도록 값을 교환함
   > [guest, admin] = [admin, guest];
   > 
   > alert(`${guest} ${admin}`); // Jihun EuiMyung(값 교환이 성공적으로 이뤄졌다)
   > ```



### 	나머지 패턴 ‘…’

> 분해하려는 객체의 프로퍼티 갯수가 할당하려는 변수의 갯수보다 많을 때, 나머지 패턴(rest pattern)을 사용하면 배열에서 했던 것처럼 나머지 프로퍼티를 어딘가에 할당하는 식으로 사용 가능하다.
>
> ```js
> let options = {
>   title: "Menu",
>   height: 200,
>   width: 100
> };
> 
> // title = 이름이 title인 프로퍼티
> // rest = 나머지 프로퍼티들
> let {title, ...rest} = options;
> 
> // title엔 "Menu", rest엔 {height: 200, width: 100}이 할당된다.
> console.log(rest.height);  // 200
> console.log(rest.width);   // 100
> ```

​	

> ⚠️ `let` **없이 사용하기**
>
> 지금까진 할당 연산 `let {…} = {…}` 안에서 변수들을 선언하였는데, `let`으로 새로운 변수를 선언하지 않고 기존에 있던 변수에 분해한 값을 할당할 수도 있는데, 이때는 반드시 주의해야할 점이 있다.
>
> 잘못된 코드:
>
> ```javascript
> let title, width, height;
> 
> // SyntaxError: Unexpected token '=' 이라는 에러가 아랫줄에서 발생합니다.
> {title, width, height} = {title: "Menu", width: 200, height: 100};
> ```
>
> 자바스크립트는 표현식 안에 있지 않으면서 주요 코드 흐름 상에 있는 `{...}`를 코드 블록으로 인식한다. 코드 블록의 본래 용도는 아래와 같이 문(statement)을 묶는다.
>
> ```javascript
> {
>   // 코드 블록
>   let message = "Hello";
>   // ...
>   console.log( message );
> }
> ```
>
> 위쪽 예시에선 구조 분해 할당을 위해 사용한 `{...}`를 자바스크립트가 코드 블록으로 인식해서 에러가 발생하였다.
>
> 에러를 해결하려면 할당문을 괄호`(...)`로 감싸 자바스크립트가 `{...}`를 코드 블록이 아닌 표현식으로 해석하면 된다.
>
> **하지만, 현재 내가 아래 코드를 볼 때 가독성 측면에서 좋아 보이지 않아 많이 활용하진 않을 듯 하다.**
>
> ```javascript
> let title, width, height;
> 
> // 에러가 발생하지 않는다.
> ({title, width, height} = {title: "Menu", width: 200, height: 100});
> 
> console.log( title ); // Menu
> ```



###    중첩 구조 분해

​	**객체나 배열이 다른 객체나 배열을 포함하는 경우, 좀 더 복잡한 패턴을 사용하면 중첩 배열이나 객체의 정보를 추출할 수 	있는데,** 이를 **중첩 구조 분해(nested destructuring)**라고 부른다.

​	아래 예시에서 객체 `options`의 `size` 프로퍼티 값은 또 다른 객체이다. `items` 프로퍼티는 배열을 값으로 가지고 있고, 	대입 연산자 좌측의 패턴은 정보를 추출하려는 객체 `options`와 같은 구조를 갖추고 있다.

```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Coke", "Sprite"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러내고 있다.
let {
  size: { // size는 여기,
    width,
    height
  },
  items: [item1, item2], // items는 여기에 할당함
  title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Coke
console.log(item2);  // Sprite
```

`extra`(할당 연산자 좌측의 패턴에는 없음)를 제외한 `options` 객체의 모든 프로퍼티가 상응하는 변수에 할당되었고,

변수 `width`, `height`, `item1`, `item2`엔 원하는 값이, `title`엔 기본값이 저장되었다.

그런데 위 예시에서 `size`와 `items` 전용 변수는 없다는 점에 유의하자. 전용 변수 대신 우리는 `size`와 `items` 안의 정보를 변수에 할당하였다.



### 똑똑한 함수 매개변수

함수에 매개변수가 많은데 이중 상당수는 선택적으로 쓰이는 경우가 종종 있는데, 사용자 인터페이스와 연관된 함수에서 이런 상황을 자주 볼 수 있다. 메뉴 생성에 관여하는 함수가 있다고 해 보자. 메뉴엔 너비, 높이, 제목, 항목 리스트 등이 필요하기 때문에 이 정보는 매개변수로 받는다.

먼저 리팩토링 전의 메뉴 생성 함수를 살펴보면,

```javascript
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
```

문서화가 잘 되어있다면 IDE가 순서를 틀리지 않게 도움을 주긴 하겠지만  이렇게 함수를 작성하면 넘겨주는 인수의 순서가 틀려 문제가 발생할 수 있다. 이 외에도 대부분의 매개변수에 기본값이 설정되어 있어 굳이 인수를 넘겨주지 않아도 되는 경우에 문제가 발생한다.

아래 코드를 살펴보자.

```javascript
// 기본값을 사용해도 괜찮은 경우 아래와 같이 undefined를 여러 개 넘겨줘야 한다.
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
```

상당히 코드가 더러워 보이고, 매개변수가 많으면 많아질수록 가독성은 더 떨어질 것이다.

구조 분해는 바로 이럴 때 구세주가 된다.

매개변수 모두를 객체에 모아 함수에 전달해, 함수가 전달받은 객체를 분해하여 변수에 할당하고 원하는 작업을 수행할 수 있도록 함수를 리팩토링해 보자.

```javascript
// 함수에 전달할 객체
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 객체 options에서 가져옴
  // width, height – 기본값
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options);
```

중첩 객체와 콜론을 조합하면 좀 더 복잡한 구조 분해도 가능하다.

```javascript
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width는 w에,
  height: h = 200, // height는 h에,
  items: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
}) {
  console.log( `${title} ${w} ${h}` ); // My Menu 100 200
  console.log( item1 ); // Item1
  console.log( item2 ); // Item2
}

showMenu(options);
```

이렇게 똑똑한 함수 매개변수 문법은 구조 분해 할당 문법과 동일하다.

```javascript
function({
  incomingProperty: varName = defaultValue
  ...
})
```

매개변수로 전달된 객체의 프로퍼티 `incomingProperty`는 `varName`에 할당되는데, 만약 값이 없다면 `defaultValue`가 기본값으로 사용될 것이다.

참고로 이렇게 함수 매개변수를 구조 분해할 땐, 반드시 인수가 전달된다고 가정되고 사용된다는 점에 유의하자. 

모든 인수에 기본값을 할당해 주려면 빈 객체를 명시적으로 전달해야 한다.

```javascript
showMenu({}); // 모든 인수에 기본값이 할당된다.

showMenu(); // 에러가 발생할 수 있다.
```

이 문제를 예방하려면 빈 객체 `{}`를 인수 전체의 기본값으로 만들면 된다.

```javascript
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```

이렇게 인수 객체의 기본값을 빈 객체 `{}`로 설정하면 어떤 경우든 분해할 것이 생겨서 함수에 인수를 하나도 전달하지 않아도 에러가 발생하지 않는다.

