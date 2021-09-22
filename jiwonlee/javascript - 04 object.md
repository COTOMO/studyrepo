### 객체 

> 객체 리터럴 : { } 중괄호를 사용해서 객체를 선언한다. 
>
> ​					중괄호 안에는 ''키(key) : 값(value)'' 으로 구성된 프로퍼티를 여러개 넣을 수 있다.
>
> 객체 안에 프로퍼티 값이 함수로 들어오면 일반 함수와 구분하기 위해 메서드라고 부른다.
>
> 자바스크립트에서 함수는 일급 객체이다. 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.
>
> 프로퍼티 키값을 정할 때 자바스크립트에서 사용 가능한 유효한 이름이 아닐 경우 따옴표를 사용해야 한다.
>
> 예 > <code>first name: 'ung-mo'//식별자 네이밍 규칙을 준수하는 키</code>
>
> ​		<code>'Last-name':'Lee'//식별자 네이밍 규칙을 준수하지 않는 키</code>

``` javascript
let cotomo = {   //객체
  name: ["주연","정음","지훈","병진","지원"], // 키:name 값: 배열
  age:[10,11,12,13,14,15], // 키:age 값: 배열 cotomo.age[0] // 10
}
```

​	**객체 표기**

​		**대괄호 표기법** : 키에 문자열이 들어올 때 대괄호를 사용하면 에러가 나지 않는다. 

​		<code>cotomo["codecamp friends"]=true;</code>

 		대괄호 표기법을 사용할 때는 프로퍼티 키는 따옴표로 묶어줘야한다. 그냥 사용하면 자바스크립트는 식별자로 해석한다.

​		이때 선언하지 않은 식별자를 사용하면 에러가 나지 않고 undefined를 반환하니 조심해야한다. 

​		**단축 프로퍼티** :  프로퍼티 값을 기존 변수에서 받아와 사용할 때 코드를 짧게 줄여서 사용할 수 있다.

```javascript
function cotomo(name,age){
  return{
    name:name,
    age:age
  }
}

//단축 프로퍼티 
function cotomo(name,age){
  return(
  	name,
    age
  )
}
```



**프롬퍼티 이름의 제약사항**

> 객체 프로퍼티 이름에는 특별한 제약이 없다.<code> __proto__</code>제외 

**프로퍼티 동적 생성**

> 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가된다.

```javascript
let person = {name : 'Lee'}
person.age = 20 // person객체 안에 새로운 프로퍼티 생성
```

**프로퍼티 삭제**

> delet연산자는 객체 프로퍼티를 삭제한다. 

```javascript
let person = {
  name : 'Lee',
  age : 20
}
delete person.age // age 프로퍼티 삭제
```



**'in'연산자로 프로퍼티 존재 여부 확인**

> 자바스크립트 객체는 존재하지 않는 프로퍼티에 접근해도 에러가 발생하지 않고 'undefined'를 반환한다.
>
> <code>in</code> 연산자를 사용하면 프로퍼티 존재를 확인할 수 있다. 

``` javascript
let cotomoKing = {name:"주연", age:10}
alert("age" in cotomoKing)

//true값이 뜬당
```



**for ... in 반복문**

> <code>for..in</code> 반복문을 사용하면 객체의 모든 키를 순회할 수 있다. 

```javascript
let cotomoKing = {
  name : "주연",
  age: 10,
  position : "king"
}

for (let key in cotomoKing){
  alert(comotoKing[key])
}
```

**객체 정렬**

> 객체 키가 정수일 경우 자동정렬이 된다.

**객체 복사**

``` javascript
let cotomo = { name: "지원" }
let cotomoKing = cotomo
```

> 복사가 된 것 같지만 사실 훼이크다 ! 객체가 할당 된 변수를 복사할 때는  참조값(주소)이 복사되고 객체는 복사되지 않는다. 

```javascript
//객체 복사하는 방법 1. 기존 객체의 프로퍼티들을 순화해서 복사하기
let cotomo = {
  name:"지원",
  age:10
}

let clone = {}
for (let key in cotomo){
  clone[key] = cotomo[key]
}
clone.name = "jiwon"
alert(cotomo.name)

//기존에 cotomo.name값이 변하지 않았다!
```

```javascript
//객체 복사하는 방법 2. Object.assign 사용하기

let cotomo = {
  name:"지원",
  age : 10
}
let clone = Object.assign({}, cotomo)

```

``` javascript
// 깊은 복사하기 
```



**가비지 컬렉션**

> 가비지 컬렉션은 도달 할 수 없는 값을 삭제한다.
>
> 가비지 컬렉션은 루트를 따라서 도달 할 수 있는 모든 값을 찾아낸다. 루트가 연결되지 않은 섬에 있는 데이터들은 삭제한다.
>
> 가비지 컬렉션은 이렇게 이해하고 넘어가겠습니다.

**메서드와 this**

> 함수 표현식으로 함수를 만들어서 객체에 할당해주면 메서드가 된다.

``` javascript
//메서드 정의하기

cotomo = {
  sayCode: function(){
    alert("code")
  }
}

//단축 구문
cotomo = {
  sayCode(){
    alert("code")
  }
}
```

``` javascript
let cotomo = {
  name:"지원",
  sayCode(){
    alert(this.name) // this는 현재 객체
  }
}
```

> 'this'를 사용하는 이유는 에러를 방지하기 위해서이다. 객체를 다른 변수에 복사해 할당하고, 다른 값으로 덮어썼을 때 원치 않는 값을 참조할 수 있다. 

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // Error: Cannot read property 'name' of null
  }

};


let admin = user;
user = null; // user를 null로 덮어씁니다.

admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.
```



> 동일한 함수라도 호출한 객체가 다르면  'this'가 참조하는 값이 달라진다.
>
> 화살표 함수는 자신만의 <code>this</code> 를 사용하지 않는다. 화살표 함수 안에서 사용하면 외부에서 this 값을 가져온다.

**new 연산자와 생성자 함수**

> **생산자 함수**
>
> 생산자 함수는 1. 함수 이름의 첫 글자는 대문자로 시작한다. 2. 반드시 'new' 연산자를 붙여 실행한다.
>
> 주연님이 좋은 예시를 주셨습니다
>
> 붕어빵 틀 같은거다. 모양은 똑같지만 안에 팥을 넣을수도 있고 슈크림을 넣을수도 있다. 

``` javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false

```

**옵셔널 체이닝**

> 가져올 데이터가 없는 경우 에러가 나는 걸 방지하게 위해서 && 연산자를 사용 했었는데 이제는 옵셔널 체이닝 ?.을 사용해 구문을 줄일 수 있다. 없어도 되는 데이터에만 사용해야 한다. 남발했다가 있어야 하는데 없는 데이터를 잡아내지 못할 수도 있다.

**심볼형**

> 객체 프로퍼티 키로 문자형과 심볼형만 허용한다. 심볼은 유일한 식별자를 만들고 싶을 때 사용한다.
>
> Symbol( )을 사용해서 만들 수 있다. ( )안에 심볼 이름을 넣을 수 있다.
>
> 심볼을 사용하면 숨김 프로퍼티를 만들 수 있다. 숨김 프로퍼티는 외부 코드에서 접근이 불가능하고 값도 덮어쓸 수 없는 프로퍼티이다. 

**객체를 원시형으로 변환하기**

> 특수 객체 메서드를 사용하면 형 변환을 원하는 대로 조절할 수 있다.
>
> 객체 형 변환은 세 종류로 구분 되는데 'hint' 라 불리는 값이 기준이 된다.
>
> 1.  String : 함수값이 문자열을 기대하는 연산을 수행할 때
> 2. Number : 수학연산을 적용할 때 
> 3. Default : 연산자가 기대하는 자료형이 확실하지 않을 때

**원시값과 객체의 비교**

> 데이터 타입은 크게 원시형과 객체형으로 구분한다. 
>
> > 원시 타잆 값은 변경 불가능한 값이다. 객체(참조) 차입의 값은 변경 가능한 값이다.
> >
> > 원시값을 변수에 할당하면 변수에는 실제 값이 저장된다. 객체를 변수에 할당하면 참조값이 저장된다.
> >
> > 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. (값에 의한 전달)
> >
> > 객체는 원본의 참조값이 복사되어 전달된다.(참조에 의한 전달)
>
> 

