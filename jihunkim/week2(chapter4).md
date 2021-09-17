# Chapter 4. 객체



## 4-1. 객체

객체는 몇 가지 특수한 기능을 가진 연관 배열(associative array)로 중괄호 {...}를 이용해 만들 수 있다. 중괄호 안에는 '키(key):값(value)' 쌍으로 구성된다.

- 프로퍼티 키는 문자열이나 심볼이어야 하며. 보통은 문자열이다.
- 값은 어떤 자료형도 가능하다.

## 자료형

- 원시형(primitive type) : 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있다.
- 객체형 : 원시형과 달리 다양한 데이터를 담을 수 있어 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있다.

## 빈 객체 생성 방법

```jsx
let user = {}; // '객체 리터럴' 문법
let user = new Object(); // '객체 생성자' 문법
```

중괄호 {...}를 이용해 객체를 선언하는 것을 객체 리터럴(object literal) 이라고 한다. 객체를 선언할 땐 주로 이 방법을 사용한다.

## 리터럴과 프로퍼티

```jsx
let user = {
  name: "Leonardo DiCaprio",
  age: 55,
};
```

'콜론(:)'을 기준으로 왼쪽엔 키가, 오른쪽엔 값이 위치하며, 프로퍼티 키는 프로퍼티 ‘이름’ 혹은 '식별자’라고도 부른다.

```jsx
/* 마지막 프로퍼티 끝은 쉼표로 끝날 수 있다. 끝에 쉼표를 붙이면 모든 프로퍼티가 
 유사한 형태를 보이기 때문에 프로퍼티를 추가, 삭제, 이동하는 게 쉬워진다. */

let user = {
  name: "Leonardo DiCaprio",
  age: 55,
};
```

## 점 표기법(dot notation)

```jsx
// 프로퍼티 값 얻기
console.log(user.name); //Leonardo DiCaprio
console.log(user.age); // 55
```

## 프로퍼티 값 추가

```jsx
//Boolean형 프로퍼티 추가
user.isAdmin = true;
```

## 프로퍼티 삭제

```jsx
delete user.age;
```

**상수(const) 객체는 수정될 수 있다.**

주의) const 로 선언된 객체는 수정할 수 있다.

const는 user=... 주소값을 변경할 때는 오류를 발생한다. 그 이외 {...} 안 내용은 고정하지 않아 변경이 가능하다.

```jsx
const user = {
  name: "Leonardo DiCaprio",
};

user.name = "Pete";

console.log(user.name); // Pete
```

## key 이름의 복수 단어는 따옴표

```jsx
let user = {
  name: "Leonardo DiCaprio",
  age: 55,
  "likes birds": true, // 여러단어 조합한 프로퍼티 이름은 따옴표로 묶어야함.
};
```

## 대괄호 표기법(square bracket notation)

**대괄호 표기법**은 키에 어떤 문자열이 있던지 상관없이 동작합니다.

```jsx
// 문법 에러가 발생한다.
user.likes birds = true
```

여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없다.

- '점’은 키가 '유효한 변수 식별자’인 경우에만 사용할 수 있다.
- 유효한 변수 식별자엔 공백이 없어야 한다.
- 숫자로 시작하지 않아야 하며 `$`와 `_`를 제외한 특수 문자가 없어야 한다.

```jsx
//에러가 발생하지 않는다.

let user = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

위 코드 처럼 대괄호 표기법 안에서 문자열을 사용할 땐 문자열을 따옴표로 묶어줘야 한다는 점에 주의해야하며, 따옴표의 종류는 상관없다.

예시) 대괄호 표기법

```jsx
let user = {
  name: "Leonardo DiCaprio",
  age: 55,
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// 변수로 접근
console.log(user[key]); // Leonardo DiCaprio (프롬프트 창에 "name"을 입력한 경우)
```

예시) 점 표기법은 대괄호 표기법처럼 불가능하다.

```jsx
let user = {
  name: "Leonardo DiCaprio",
  age: 55,
};

let key = "name";
console.log(user.key); // undefined
```

## 계산된 프로퍼티

객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 이를 계산된 프로퍼티(computed property) 라고 한다.

예시 1)

```jsx
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};

console.log(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.
```

위 예시에서 `[fruit]`는 프로퍼티 이름을 변수 `fruit`에서 가져오겠다는 것을 의미하고, 사용자가 프롬프트 대화상자에 `apple`을 입력했다면 `bag`엔 `{apple: 5}`가 할당되었을 것이다.

예시 2) 예시1과 동일하게 동작하며, 예시 2가 더 깔끔하다.

```jsx
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {};

// 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
bag[fruit] = 5;
```

예시3) 대괄호 안에는 복잡한 표현식이 온 경우

```jsx
let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
```

대괄호 표기법은 프로퍼티 이름과 값의 제약을 없애주기 때문에 점 표기법보다 훨씬 강력하지만, 작성하기 번거롭다는 단점이 있다.

이런 이유로 프로퍼티 이름이 확정된 상황이고, 단순한 이름이라면 처음엔 점 표기법을 사용하다가 뭔가 복잡한 상황이 발생했을 때 대괄호 표기법으로 바꾸는 경우가 많다.

## 단축 프로퍼티

예시 1)

```jsx
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...등등
  };
}

let user = makeUser("Leonardo DiCaprio", 55);
console.log(user.name); // Leonardo DiCaprio
```

예시 1의 프로퍼티들은 이름과 값이 변수의 이름과 동일하다. 이렇게 변수를 사용해 프로퍼티를 만드는 경우는 아주 흔한데, *프로퍼티 값 단축 구문(property value shorthand)* 을 사용하면 코드를 짧게 줄일 수 있다.

예시 2) `name:name` 대신 `name`만 적어주어도 프로퍼티를 설정할 수 있다.

```jsx
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age, // age: age 와 같음
    // ...
  };
}
```

예시 3) 한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능하다.

```jsx
let user = {
  name, // name: name 과 같음
  age: 55,
};
```

## 프로퍼티 이름의 제약사항

변수 이름(키)엔 ‘for’, ‘let’, ‘return’ 같은 예약어를 사용하면 안 되지만,

그런데 객체 프로퍼티엔 이런 제약이 없다.

```jsx
// 예약어를 키로 사용해도 괜찮습니다.
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); // 6
```

이와 같이 프로퍼티 이름엔 특별한 제약이 없다. 어떤 문자형, 심볼형 값도 프로퍼티 키가 될 수 있다(식별자로 쓰이는 심볼형에 대해선 뒤에서 다룰 예정).

문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환되어 키에 숫자 `0`을 넣으면 문자열 `"0"`으로 자동변환된다.

```jsx
let obj = {
  0: "test", // "0": "test"와 동일합니다.
};

// 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근합니다,
console.log(obj["0"]); // test
console.log(obj[0]); // test (동일한 프로퍼티)
```

이와같이 객체 프로퍼티 키에 쓸 수 있는 문자열엔 제약이 없지만, 역사적인 이유 때문에 특별 대우를 받는 이름이 하나 있는데, **proto**다.

```jsx
let obj = {};
obj.__proto__ = 5; // 숫자를 할당합니다.
console.log(obj.__proto__); // [object Object] - 숫자를 할당했지만 값은 객체가 되었습니다. 의도한대로 동작하지 않네요.
```

원시값 `5`를 할당했는데 무시되었다.

`__proto__`의 본질은 [프로토타입 상속](https://ko.javascript.info/prototype-inheritance)에서, 이 문제를 어떻게 해결할 수 있을지에 대해선 [프로토타입 메서드와 **proto**가 없는 객체](https://ko.javascript.info/prototype-methods)에서 자세히 다룰 예정.

## ‘in’ 연산자로 프로퍼티 존재 여부 확인하기

자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 `undefined`를 반환한다는 것이다.

이런 특징을 응용하면 프로퍼티 존재 여부를 쉽게 확인할 수 있다.

```jsx
let user = {};

console.log(user.noSuchProperty === undefined); // true는 '프로퍼티가 존재하지 않음'을 의미합니다.
```

이렇게 `undefined`와 비교하는 것 이외에도 연산자 `in`을 사용하면 프로퍼티 존재 여부를 확인할 수 있다.

문법은 다음과 같다.

```jsx
"key" in object;
```

예시 )

```jsx
let user = { name: "Leonardo DiCaprio", age: 55 };

console.log("age" in user); // user.age가 존재하므로 true가 출력됩니다.
console.log("blabla" in user); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.
```

`in` 왼쪽엔 반드시 *프로퍼티 이름이 와야한다.* 프로퍼티 이름은 보통 따옴표로 감싼 문자열.

따옴표를 생략하면 아래 예시와 같이 엉뚱한 변수가 조사 대상이 된다.

```jsx
let user = { age: 55 };

let key = "age";
console.log(key in user); // true, 변수 key에 저장된 값("age")을 사용해 프로퍼티 존재 여부를 확인합니다.
```

그런데 이쯤 되면 "`undefined`랑 비교해도 충분한데  `in` 연산자를 사용하는 이유가 있다.

대부분의 경우, 일치 연산자를 사용해서 프로퍼티 존재 여부를 알아내는 방법(`"=== undefined"`)은 꽤 잘 동작합니다. 그런데 가끔은 이 방법이 실패할 때도 있다. 이럴 때 `in`을 사용하면 프로퍼티 존재 여부를 제대로 판별할 수 있다.

예시 ) 프로퍼티는 존재하는데, 값에 `undefined`를 할당한 예시이다.

```jsx
let obj = {
  test: undefined,
};

console.log(obj.test); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.

console.log("test" in obj); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).
```

`obj.test`는 실제 존재하는 프로퍼티다. 따라서 `in` 연산자는 정상적으로 true를 반환하고,

`undefined`는 변수는 정의되어 있으나 값이 할당되지 않은 경우에 쓰기 때문에 프로퍼티 값이 `undefined`인 경우는 흔치 않다. 값을 ‘알 수 없거나(unknown)’ 값이 ‘비어 있다는(empty)’ 것을 나타낼 때는 주로 `null`을 사용한다.

## ‘for…in’ 반복문

for..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있다. for..in은 앞서 학습했던 for(;;) 반복문과는 완전히 다르다.

문법)

```jsx
for (key in object) {
  // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
}
```

아래 예시를 실행하면 객체 user의 모든 프로퍼티가 출력된다.

```jsx
let user = {
  name: "Leonardo DiCaprio",
  age: 55,
  isAdmin: true,
};

for (let key in user) {
  // 키
  console.log(key); // name, age, isAdmin
  // 키에 해당하는 값
  console.log(user[key]); // Leonardo DiCaprio, 55, true
}
```

`for..in` 반복문에서도 `for(;;)`문처럼 반복 변수(looping variable)를 선언(`let key`)했다는 점에 주목해야한다.

반복 변수명은 자유롭게 정할 수 있다. `'for (let prop in obj)'`같이 `key` 말고 다른 변수명을 사용해도 괜찮다.

## 객체 정렬 방식

- 정수 프로퍼티(integer property)는 자동으로 정렬된다.
- 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.

아래 예시 1의 객체엔 국제전화 나라 번호가 담겨있다.

```jsx
let codes = {
  49: "독일",
  41: "스위스",
  44: "영국",
  // ..,
  1: "미국",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
```

현재 개발 중인 애플리케이션의 주 사용자가 독일인이라고 가정해보자. 나라 번호를 선택하는 화면에서 `49`가 맨 앞에 오도록 해야한다.

그런데 코드를 실행해 보면 예상과는 전혀 다른 결과가 출력된다.

- 미국(1)이 첫 번째로 출력된다.
- 그 뒤로 스위스(41), 영국(44), 독일(49)이 차례대로 출력된다.

이유는 나라 번호(키)가 정수이어서 `1, 41, 44, 49` 순으로 프로퍼티가 자동 정렬되었기 때문입니다.



### **정수 프로퍼티? 그게 뭐죠?**

'정수 프로퍼티’라는 용어는 변형 없이 정수에서 왔다 갔다 할 수 있는 문자열을 의미한다.
문자열 "49"는 정수로 변환하거나 변환한 정수를 다시 문자열로 바꿔도 변형이 없기 때문에 정수 프로퍼티이다. 하지만 '+49’와 '1.2’는 정수 프로퍼티가 아니다.

```jsx
// 함수 Math.trunc는 소수점 아래를 버리고 숫자의 정수부만 반환한다.
console.log(String(Math.trunc(Number("49")))); // '49'가 출력된다. 기존에 입력한 값과 같으므로 정수 프로퍼티이다.
console.log(String(Math.trunc(Number("+49")))); // '49'가 출력된다. 기존에 입력한 값(+49)과 다르므로 정수 프로퍼티가 아니다.
console.log(String(Math.trunc(Number("1.2")))); // '1'이 출력된다. 기존에 입력한 값(1.2)과 다르므로 정수 프로퍼티가 아니다.
```

아래 예제는 키가 정수가 아닌 경우엔 작성된 순서대로 프로퍼티가 나열된다.

```jsx
let user = {
  name: "Leonardo",
  surname: "DiCaprio",
};
user.age = 55; // 프로퍼티를 하나 추가한다.

// 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열된다.
for (let prop in user) {
  console.log(prop); // name, surname, age
}
```

위 예시에서 49(독일 나라 번호)를 가장 위에 출력되도록 하려면 나라 번호가 정수로 취급되지 않도록 각 나라 번호 앞에 `"+"`를 붙여야 한다.

```jsx
let codes = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  // ..,
  "+1": "미국",
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}
```

이제 원하는 대로 독일 나라 번호가 가장 먼저 출력되는 것을 확인할 수 있다.





## 4.2 참조에 의한 객체 복사



### 원시형과 참조형의 복사

![reference](https://images.velog.io/images/younoah/post/547af527-7590-48d5-b274-d5e0de029485/object.png)

***<참고: 정재남님의 코어 자바스크립트>***

원시형, 참조형 모두 기본적으로 복사하면 같은 참조값을 가리킨다. 하지만 복사한 곳에서 값을 수정했을 때 차이가 두드러지는데,

복사한 곳에서 값을 수정했을 때는

- 원시형인 경우 (변수의 값 수정),  복사한곳에서 다른 값을 가리킨다.
- 참조형인 경우 (프로퍼티의 값 수정), 프로퍼티의 값은 변경되었지만 여전히 같은 객체를 가리키고  원본에도 똑같이 변경된 프로퍼티가 적용된다.

이런 차이점은 객체는 변수가 객체를 곧바로 가리키는 것이 아닌 객체를 참조하고 있는 곳을 가리키기 때문이다.



### 참조에 의한 비교

객체 비교시 **동등 연산자 `==` 와 일치 연산자 `===` 는 동일하게 동작**한다.

- 같은 객체를 바라보는 두 변수 비교 (객체 복사)

```js
const obj1 = {};
const obj2 = obj1;

console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // true
```



- 다른 객체를 바라보는 두 변수 비교 (같은 형태)

```js
const obj1 = {};
const obj2 = {};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
```

---

- 원시형 변수 복사 비교

```js
const a = 1;
const b = a;

console.log(a == b); // true
console.log(a === b); // true
```



- 같은 값을 가리키는 두 원시형 변수 비교

```js
const a = 1;
const b = 1;

console.log(a == b); // true
console.log(a === b); // true
```



### 객체 복사 방법

값은 같지만 독립된 객체를 만드는 방법

- 원시 프로퍼티 수준까지 순회하며서 복사

```js
const user = {
  name: 'John',
  age: 30,
};

// 객체 복사
const clone1 = user;

// 객체 복제 (깊은복사)
const clone2 = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사
for (let key in user) {
  clone2[key] = user[key]; // 모든 프로퍼티를 순회하면서 복사
}


// 결과확인
console.log(user);   // { name: 'John', age: 30 }
console.log(clone1); // { name: 'John', age: 30 }
console.log(clone2); // { name: 'John', age: 30 }

console.log(user == clone1); // true
console.log(user === clone1); // true
console.log(user == clone2); // false
console.log(user === clone2); // false
```



- `Object.assign` 을 활용한 복사

```js
Object.assign(dest, [src1, src2, src3...])
```

`dest` : 복사를 할 목표 변수

`src` : 복사를 하고자 하는 객체

반환값 : `dest` 를 반환

```js
// 예제1
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사한다.
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// 예제2
// 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값을 덮어 씌운다.
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // user = { name: "Pete" }

// 예제3
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```



### 중첩된 객체 복사

```js
const user = {
  name: 'John',
  size: {
    height: 182,
    width: 50,
  },
};

const clone = Object.assign({}, user);

console.log(user === clone);  // false
console.log(user.size === clone.size); // true

clone.size.height = 200; // 내부의 중첩된 객체의 값 수정

console.log(user);  
// { name: 'John', size: { height: 200, width: 50 } }
console.log(clone);
// { name: 'John', size: { height: 200, width: 50 } }
```

객체 안에 또 다른 객체가 중첩되어 있는 형태의 경우 위에서 언급한 깊은 복사 방식을 사용해도 내부의 중첩된 객체는 동일한 객체를 참조하게 된다.

이런 문제를 해결하기 위해서는 모든 프로퍼티를 순회하면서 해당 프로퍼티의 값이 객체인 경우 객체의 구조를 복사하는 방식으로 해결해야하는데, 이렇게 객체안에 중첩된 객체까지 복사를 하는 것을 **깊은 복사(deep copy)**라고 한다.



### 깊은 복사(deep copy) 방법

```js
// lodash 메서드
_.cloneDeep(obj)
```

반환값 : 깊은 복사된 객체

위 메서드를 사용하면 깊은 복사를 할 수 있다. 

```js
const user = {
  name: 'John',
  size: {
    height: 182,
    width: 50,
  },
};

const clone = _.cloneDeep(user);

console.log(user === clone); // false
console.log(user.size === clone.size); // false

clone.size.height = 200; // 내부의 중첩된 객체의 값 수정
console.log(user);
// { name: 'John', size: { height: 180, width: 50 } }
console.log(clone);
// { name: 'John', size: { height: 200, width: 50 } }
```





## 4.3 가비지 컬렉션

자바스크립트는 메모리 관리를 위해 엔진 내에서 가비지 컬렉터가 끈임없이 동작하며, 

원시값, 객체, 함수등 메모리에 차지하고 있는 요소들을 모니터링하고 삭제한다.



### 가비지 컬렉션 기준

*도달 가능성(reachability)* 이라는 개념을 통해 메모리 관리를 수행.

*도달 가능한(reachable)* 값은 쉽게 말해 어떻게든 접근하거나 사용할 수 있는 값을 의미.

*도달 가능한(reachable)* 값은 메모리에서 삭제되지 않는다.



**루트(root)** : 태새부터 도달 가능하기 때문에 명백한 이유 없이는 삭제되지 않는다.

- 현재 **함수의 지역변수**와 **매개변수**
- **중첩 함수**의 체인에 있는 함수에서 사용되는 **변수와 매개변수**
- **전역 변수**
- 기타 등등

**루트(root)가 참조하는 값**이나 **체이닝으로 루트에서 참조할 수 있는 값**은 도달 가능한 값이 된다.



### 가비지 컬렉팅 대상

>  **루트 or 전역(global)**에서 **도달할 수 없는 값**은 가비지 컬렉팅 대상이 된다.



### 가비지 컬렉션 알고리즘 : mark-and-sweep

- 루트 정보 수집
- 루트가 참조하고 있는 모든 객체와 참조가 중첩된 모든 객체를 방문하면 **mark**
- 루트가 도달가능한 모든 객체를 전부 방문 할 때가지 반복
- mark되지 않은 모든 객체는 삭제

![garbageCollection](https://images.velog.io/images/younoah/post/778d33d9-14c4-45e8-87b1-f1567e052714/garbageCollecting.png)





## 4.4 메서드와 `this`

### 메서드

객체의 프로퍼티에 저장된 함수를 **메서드**라고한다.

```js
// 함수 표현식, 
const user = {
    name: 'John',
    sayHi: function() {
        console.log('hello');
    }
}

// 화살표 함수
const user = {
    name: 'John',
    sayHi: () => {
        console.log('hello');
    }
}

// 메서드 단축구문
const user = {
    name: 'John',
    sayHi() {
        console.log('hello');
    }
}
```



### 메서드와 `this`

메서드는 객체에 저장된 정보에 접근할 수 있어야 비로속 제 역할을 할 수 있으며, 일반 적으로 메서드가 객체의 프로퍼티의 값을 활용한다.

메서드 내부에서 `this` 키워드를 사용하면 현재 객체에 접근할 수 있다.

```js
const user = {
  name: 'john',
  sayHi: function sayHi() {
    console.log(`hello! my name is ${this.name}`);
  },
};

user.sayHi();
```



### 자바스크립트의 특이하고 자유로운 `this`

- 자바스크립트에선 모든 함수는 `this` 키워드를 사용할 수 있다.

- 함수의 **실행 컨텍스트**에 따라 `this` 가 참조하는 값이 달라진다.

```js
function showName() {
  console.log(this.name);
}

const user = {
  name: '존',
  showThis,
};

const admin = {
  name: '피터',
  showThis,
};

user.showThis(); // 존, this는 user
admin.showThis(); // 피터, this는 admin
```



### 화살표 함수의 this

화살표 함수에는 고유한 `this` 를 가지고 있지 않다.

화살표 함수의 바로 한 단계 외부함수의 `this`를 참조한다.

> 아래 코드를 보면 많이 헷갈린다. 계속 고민해보자.

```js
const user = {
  firstName: '원두',
  sayHi() {
    const name = '철수';
    const arrow = () => {
      const name = '훈이';
      console.log(this.firstName);
    };
    arrow();
  },
};

user.sayHi(); // 원두

```

 **`arrow()`의 `this`는 외부 함수 `user.sayHi()`의 `this`가 된다.**

- 외부 컨텍스트에 있는 `this`를 이용하고 싶은 경우 화살표 함수를 사용하면 된다.

  

## 4-5. 'new' 연산자와 생성자 함수

- "new" 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있습니다.

### 1. 생성자 함수(constructor function)

- 함수 이름의 첫 글자는 대문자로 시작합니다.

- 반드시 `"new"` 연산자를 붙여 실행합니다 . `"new"`와 함께 호출하면 내부에서 this가 암시적으로 만들어지고, 마지막엔 this가 반환됩니다.

  ***생성자 함수를 사용하면 재사용할 수 있는 객체 생성 코드를 구현 가능.\***

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

### 2. 생성자 내 메서드

```js
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```



## 4-6. 옵셔널 체이닝 '?.'

⚠️ 최근에 추가된 문법임.

**옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.**

예를 들면, 사용자가 여러 명 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다고 가정해보면, 이럴 때 user.address.street를 사용해 주소 정보에 접근하면 에러가 발생할 수 있다.

### 옵셔널 체이닝 사용에서 주의사항

- **?.앞의 변수는 꼭 선언되어 있어야 합니다.**

```js
// ReferenceError: user is not defined
user?.address;
```

- **옵셔널 체이닝을 남용하지 마세요.**

?.는 존재하지 않아도 괜찮은 대상에만 사용해야 한다.

사용자 주소를 다루는 위 예시에서 논리상 `user`는 반드시 있어야 하는데 `address`는 필수값이 아니다. 그렇기 때문에, `user.address?.street`를 사용하는 것이 바람직하다.

실수로 인해 `user`에 값을 할당하지 않았다면 바로 알아낼 수 있도록 해야 한다. 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워진다.

- **?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없습니다.**

```js
// user가 존재할 경우 user.name에 값을 쓰려는 의도로 아래와 같이 코드를 작성해 보았다.

user?.name = "Violet"; // SyntaxError: Invalid left-hand side in assignment
// 에러가 발생하는 이유는 undefined = "Violet"이 되기 때문이다.
```

## 

> **요약**
>
>  옵셔널 체이닝 문법 `?.`은 세 가지 형태로 사용할 수 있다.
>
> 1. `obj?.prop` – `obj`가 존재하면 `obj.prop`을 반환하고, 그렇지 않으면 `undefined`를 반환함
> 2. `obj?.[prop]` – `obj`가 존재하면 `obj[prop]`을 반환하고, 그렇지 않으면 `undefined`를 반환함
> 3. `obj?.method()` – `obj`가 존재하면 `obj.method()`를 호출하고, 그렇지 않으면 `undefined`를 반환함
>
> 여러 예시를 통해 살펴보았듯이 옵셔널 체이닝 문법은 꽤 직관적이고 사용하기도 쉽다. `?.` 왼쪽 평가 대상이 `null`이나 `undefined`인지 확인하고 `null`이나 `undefined`가 아니라면 평가를 계속 진행한다.
>
> `?.`를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근할 수 있다.
>
> `?.`은 `?.`왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 한다.
>
> 꼭 있어야 하는 값인데 없는 경우에 `?.`을 사용하면 프로그래밍 에러를 쉽게 찾을 수 없으므로 이런 상황을 만들지 말도록 하자.



## 4.7 심볼형

객체의 **프로퍼티 키**로 오직 **문자형**과 **심볼형**만 허용이 된다.

심볼은 유일한 식별자를 만들때 사용한다.

```js
let id = Symbol();      // 변수 id가 심볼이 된다.
let id1 = Symbol("id"); // "id"라고 작성한 것처럼 설명을 붙일 수 있다.(디버깅)
let id2 = Symbol("id"); // 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다르다.
```

> 심볼형은 문자형으로 자동 형 변환되지 않는다.
>
> 근본 자체가 유일성이기 때문에 언어 차원의 보호장치로써 자동 형 변환이 되지 않는다.
>
> ```js
> let id = Symbol("id");
> console.log(id); 
> // TypeError: Cannot convert a Symbol value to a string
> 
> console.log(id.toString()) // 출력가능
> ```
>
> *`console.log()` 메서드의 인자는 자동으로 문자형으로 형 변환이 일어난다.*

### 숨김 프로퍼티

- 심볼을 키로 사용하면 프로피터를 숨길 수 있다. 외부에서 키를 알고 있지 않는한 접근 할 수 없다.
- 또한 키가 심볼인 경우에는 `for in` 문의 대상이 되지 않아 의도치 않게 프로퍼티가 수정되는 것을 예방할 수 있다.
- 

##### 객체 리터럴에서 심볼

```js
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // "id": 123은 안된다.
  'id': 123, //  키가 'id'인 프로퍼티가 생성.
};
```

객체 리터럴에서 심볼형 키를 만들경우 문자형이 아닌 대괄호를 사용하여 키를 지정해야한다.



### 전역심볼

동일한 심볼을 여러개의 이름의 심볼로 사용하고 싶을 때 전역 심볼을 이용한다.

- `Symbol.for(key)` : 이름을 이용해서 심볼을 찾는다. (없을 경우 생성)
- `Symbol.keyFor(sym)` : 심볼을 이용해서 이름을 얻어온다.

```js
// 전역 레지스트리에서 심볼을 읽거나 존재하지 않는다면 생성
let id = Symbol.for("id");

// 동일한 이름을 이용해 동일한 심볼 생성
let idAgain = Symbol.for("id");

// 두 심볼은 같다.
alert( id === idAgain ); // true

//---------------------------------

// 이름을 이용해 심볼을 찾음
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 심볼을 이용해 이름을 얻음
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id
```

### 시스템 심볼

객체를 미세 조정할 때 사용된다고 한다.



## 4.8 객체를 원시형으로 변환하기

객체는 논리 평가시  **true** 를 반환한다. **( `false` 가 아닌 무조건 `true`)**

**따라서 객체는 숫자형이나 문자형으로만 형변환이 일어난다.**



**숫자형으로 변환**

- 객체끼리 빼기 연산
- 수학관련 함수를 적용할 때 (예. Data객체끼리 차감하면 두날짜의 차이기 반환)

**문자형으로 변환**

- `console.log`, `alert` 와 같이 객체를 출력하려고 할 때 발생

### ToPrimitive

- 특수 객체 메서드를 사용하면 숫자형이나 문자형으로 형 변환을 원하대로 조절할 수 있다.
- 객체 형 변환은 `hint` 라는 값으로 세 종류로 구분된다. (`hint` : 목표로 하는 자료형)

**객체-문자형 변환**

문자열을 기대하는 연산을 수행할 때, `hint` 가 `string` 이 된다.

```js
// 객체를 출력하려고 함
alert(obj);

// 객체를 프로퍼티 키로 사용하고 있음
anotherObj[obj] = 123;
```

**객체-숫자형 변환**

수학 연산을 적용하려 할 때, `hint` 가 `number` 가 된다.

```js
// 명시적 형 변환
let num = Number(obj);

// (이항 덧셈 연산을 제외한) 수학 연산
let n = +obj; // 단항 덧셈 연산
let delta = date1 - date2;

// 크고 작음 비교하기
let greater = user1 > user2;
```

**객체-default 변환**

연산자가 기대하는 *자료형이 확실하지 않을 때* , `hint` 가 `default` 가 된다.

```js
// 이항 덧셈 연산은 hint로 `default`를 사용한다.
let total = obj1 + obj2;

// obj == number 연산은 hint로 `default`를 사용한다.
if (user == 1) { ... };
```

### 객체의 형변환 알고리즘

1. 객체에 `obj[Symbol.toPrimitive](hint)`메서드가 있는지 찾고, 있다면 메서드를 호출한다. `Symbol.toPrimitive`는 시스템 심볼로, 심볼형 키로 사용된다.

2. 1에 해당하지 않고 hint가 **String** 이라면,

   - `obj.toString()`이나 `obj.valueOf()`를 순서로 존재하는 메서드 호출

3. 1과 2에 해당하지 않고, hint가 **Number** 나 **default** 라면

   - `obj.valueOf()`나 `obj.toString()`을 순서로 존재하는 메서드 호출

     

### Symbol.toPrimitive

자바스크립트엔 `Symbol.toPrimitive`라는 내장 심볼이 존재한다.

`Symbol.toPrimitive` 심볼은 `hint` 를 명명하는 데 사용된다.

```js
const user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// 데모:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```



### toString과 valueOf

객체에 `Symbol.toPrimitive`가 없으면 자바스크립트는 아래 규칙에 따라 `toString`이나 `valueOf`를 호출한다.

- hint가 `'string’` 인 경우: `toString -> valueOf` 순 (`toString`이 있다면 `toString`을 호출, `toString`이 없다면 `valueOf`를 호출함)
- 그 외: `valueOf -> toString` 순

(이 메서드들은 반드시 원시값을 반환해야한다.)

일반 객체는 기본적으로 `toString`과 `valueOf`에 적용되는 다음 규칙을 따른다.

- `toString`은 문자열 `"[object Object]"`을 반환
- `valueOf`는 객체 자신을 반환

```js
let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

### 반환타입

`Symbol.toPrimitive()` , `toString()` , `valueOf()` 이 3가지 메서드는 `hint` 에 명시된 자료형으로의 형 변환을 보장해 주지 않는다. 단 객체가 아닌 **원시값**을 **반환** 해준다.

### 추가 형변환

상당수의 연산자와 함수는 피연산자의 형을 변환 시킨다.

예를 들어 곱셈 연산자 `*` 는 피연산자를 숫자형으로 변환 시킨다.

객체가 피연산자 일때는 아래와 같이 단계를 거쳐 형변황이 된다.

1. 객체는 원시형으로 변화됩니다. (변환 규칙은 위에서 설명)
2. 변환 후 원시값이 원하는 형이 아닌 경우엔 또다시 형 변환

```js
let obj = {
  // 다른 메서드가 없으면 toString에서 모든 형 변환을 처리
  toString() {
    return "2";
  }
};

alert(obj * 2);
// 4, 객체가 문자열 "2"로 바뀌고, 곱셈 연산 과정에서 문자열 "2"는 숫자 2로 변경된다.
```

> **참고**
>
> `obj.toString()`만 사용해도 '모든 변환’을 다 다룰 수 있기 때문에, 실무에선 `obj.toString()`만 구현해도 충분한 경우가 많다. 반환 값도 ‘사람이 읽고 이해할 수 있는’ 형식이기 때문에 실용성 측면에서 다른 메서드에 뒤처지지 않는다. 그리고  `obj.toString()`은 로깅이나 디버깅 목적으로도 자주 사용된다고 한다.

