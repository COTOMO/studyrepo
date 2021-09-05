## 자바스크립트 기본

### 2.1 Hello, world!

<strong> 2.1.1 html 파일을 통한 자바스크립트를 실행하는 방법</strong>

```<script>```태그를 이용!!!

여러가지 방법이 존재하지만 외부 자바스크립트 파일을 import할 시에는 html파일에서 ```head```태그에 ```<script src="path/to/외부스크립트파일이름.js"></script>``` 와 같이 입력하는 방법을 많이 사용

> ❗```<script>``` 태그는 HTML 문서 상 어디에 위치해야 할까?
>
> ```<head>``` 태그 또는 ```<body>``` 태그 어느 위치던 크게 상관없지만, 웹 검색이나 서적마다 작성 위치가 다르고 관련해서 전혀 언급이 없음
>
> **브라우저 동작 방식**: [참고 링크](https://blog.martinwork.co.kr/javascript/2018/10/13/how-js-works-in-browser.html)
>
> 1. HTML을 읽기 시작
>
> 2. HTML을 파싱
>
> 3. DOM트리를 생성
>
> 4. Render트리(DOM tree + CSS에 CSSOM 트리 결합)가 생성
>
> 5. 화면에 표시
>
>    ![img](https://media.vlpt.us/post-images/takeknowledge/aea046b0-2404-11ea-addc-59a0f147306b/image.png)
>
>    HTML을 파싱한 다음 DOM 트리를 생성하는데, 브라우저는 HTML 태그들을 읽어나가는 도중 `<script>` 태그를 만나면 파싱을 중단하고 javascript 파일을 로드 후 javascript 코드를 파싱하기 시작하고, 해당 작업이 완료되면 그 후에 HTML 파싱이 계속된다.
>
> 
>
>    이로인해 HTML태그들 사이에 script 태그가 위치하면 두가지 문제가 발생하는데,
>
>    1. HTML을 읽는 과정에 스크립트를 만나면 중단 시점이 생기고 그만큼 화면에 표시되는 것이 지연
>
>    2. DOM 트리가 생성되기전에 자바스크립트가 생성되지도 않은 DOM의 조작을 시도시에 문제가 발생
>
>          **그렇기 때문에 위와 같은 상황을 막기 위해 script 태그는 body 태그 최하단 에 위치하는 게 가장 좋다**

### 2.2 코드 구조

**Expression(표현식)**: 값을 만들어내는 간단한 코드

```j
123
11 + 12 + 13 * 14
'Hello'
```

**Statement(문)**: 어떤 작업을 수행하는 문법 구조(syntax structure)와 명령어(command)를 의미하는데, 쉽게 말해 하나 이상의 표현식이 모이면 Statement(문)이 되며, 하나의 Expression(표현식)도 문장의 종결을 의미하는 세미콜론 또는 줄바꿈을 넣으면 Statement(문)라고 부른다.

**Program(프로그램)**: Statement(문)이 모여 Program(프로그램)이 된다.

> ❗ Javascript에서 Statement(문)의 종결을 의미하기 위해 끝에 semicolon(세미콜론)을 넣는다. 또한 줄 바꿈이 있으면 이를 ‘암시적’ 세미콜론으로 해석합니다. 이런 동작 방식을 [세미콜론 자동 삽입(automatic semicolon insertion)](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)이라 부르며 대부분의 경우에는 줄 바꿈은 semicolon(세미콜론)을 의미하지만, **항상** 을 의미하진 않는다.
>
> 그렇기 때문에, 줄 바꿈으로 Statement(문)를 나눴더라도, Statement(문) 사이엔 semicolon(세미콜론)을 넣는 것이 좋으며 자바스크립트 커뮤니티에서도 이를 규칙으로 정해 권장하고 있다.
>
> **세미콜론은 *생략할 수 있다.* 하지만 세미콜론을 사용하는 것이 여러모로 안전하므로 이를 기억하고 따르도록 하자!!**

### 2.3 엄격 모드

ECMAScript5(ES5)부터 만들어진 기능이며, 새로운 기능들을 ES5 이전 하위 호환성을 위해 ```use strict``` 키워드를 통해 활성화 시에만 사용가능하도록 하게 만든 Mode가 바로 Strict Mode(엄격 모드)다. 특히 JavaScript 코드에 더욱 엄격한 오류 검사를 적용하여 기존에 무시되던 오류를 발생시킬 가능성이 높거나 Javascript 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.

> ```"use strict"```는 반드시 최상단에 위치시켜야 한다.**
>
> `"use strict"`**를 취소할 방법은 없기 때문에 적용 시 유의해야 한다.**
>
> ❗ ```"use strict"```를 반드시 사용해야 할까?
>
> > 모던 자바스크립트는 '클래스’와 '모듈’이라 불리는 진일보한 구조를 제공하는데, 이 둘을 사용하면 `"use strict"`가 자동으로 적용된다. 따라서 이 둘을 사용하고 있다면 스크립트에 `"use strict"`를 붙일 필요가 없다. 
> >
> > **결론: 코드를 클래스와 모듈을 사용해 구성한다면 `"use strict"`를 생략해도 된다.** 

> ❗ 흔하진 않지만, 오래된 브라우저에서 'use strict'를 사용할 수 없다면, 아래 코드와 같이 즉시실행함수를 통해 엄격모드를 사용 가능한다.
>
> ```javascript
> (function() {
> 'use strict';
> 
> // ...테스트하려는 코드...
> })()
> ```

### 2.4 변수와 상수

> ❗**선언**: 상수나 변수를 만드는 과정이며, **변수와 상수는 같은 이름으로 두 번이상 선언하면 에러가 발생한다.**
>
> ❗변수와 상수 이름 규칙
>
> > 변수명에는 오직 문자와 숫자, 그리고 기호 `$`와 `_`만 들어갈 수 있다.
> >
> > 첫 글자는 숫자가 될 수 없다.
> >
> > 대·소문자 구별
> >
> > reserved name(예약어)을 사용할 수 없다.

> **Variable(변수)**: 변할 수 있는 수(위가 뚫려 있어서 값을 꺼내서 버리고 다시 넣을 수 있는 상자)또는 저장소
>
> ```let``` 키워드를 통해 선언(`var` – 오래된 변수 선언 키워드이며, 현재는 잘 사용하지 않는다, 변수를 중복해서 선언할 수 있다는 위험성, 변수가 속하는 범위가 애매한다는 이유로 ```let``` 키워드가 등장하면서 대체 됨)
>
> ``` javascript
> let message;
> 
> message = 'Hello!';
> 
> message = 'World!'; // 값이 변경
> 
> alert(message);
> ```

> **Constant**(상수): 항상 같은 수(한번 값을 넣으면 꺼낼 수 없는 모든 면이 막힌 단단한 상자)또는 저장소
>
> ```const``` 키워드를 통해 선언
>
> ``` javascript
> const myBirthday = '18.04.1982';
> 
> myBirthday = '01.01.2001'; // error, can't reassign the constant!
> ```
>
> > ❗상수관련 에러 종류
> >
> > > **Identifier has already declared **
> > >
> > > => 같은 이름으로 상수를 한번 더 선언시 해당 오류 발생
> > >
> > > ``` javascript
> > > > const name = "name이란 변수 선언"
> > >   undefined
> > > > const name = "name이란 변수를 한번 더 선언!"
> > >   Uncaught SyntaxError: Identifier 'name' has already been declared
> > > ```
> > >
> > > **Missing initializer in const declaration**
> > >
> > > => 상수는 한 번만 선언할 수 있으므로 선언할 때 반드시 값을 함께 지정해줘야 함, 만약 상수를 선언할 때 값을 지정해주지 않는다면 해당 오류가 발생
> > >
> > > ``` javascript
> > > > const pi
> > >   Uncaught SyntaxError: Missing initializer in const declaration
> > > ```
> > >
> > > **Assignment to constant variable** 
> > >
> > > => 한 번 선언된 상수의 자료는 변경할 수 없다. 만약 값을 변경하면 해당 오류가 발생
> > >
> > > ``` javascript
> > > > const name = "name이라는 이름의 상수를 선언"
> > >   undefined
> > > > name = "이 값을 변경하면?"
> > >   TypeError: Assignment to constant variable
> > > ```