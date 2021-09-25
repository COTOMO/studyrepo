

### iterable 객체

`Symbol.iterator`라는 메소드를 가지고 있는 객체를 말함

예를들어.. 배열 같은거? 배열은 타입이 object임 객체란소리임

```jsx
typeof [] // object
```



![스크린샷 2021-09-25 오후 1 10 01](https://user-images.githubusercontent.com/81910935/134758958-fda73816-4603-438f-ac88-169f6384e7fc.png)


배열을 콘솔로그로 찍어봤더니 이렇게 쫙 나오는데 맨 밑쪽에 `Symbol(Symbol.iterator)`라는 메소드가 보임

이러한 이터러블한 객체는 `for ... of`로 반복을 돌릴 수 있음.

참고로 `for ... of`는 배열을 반복해서 돌릴때 쓰임



> 문자열도 이터러블 이랜다;; (이유는 모르겠음)

배열과 똑같이 문자열도 광범위하게 쓰이는 내장 이터러블이라고 한다.

---

### Symbol.iterator를 이용해서 for.. of를 가능하게 만들기



```jsx
let range = {
  from: 1,
  to: 5
};
```

객체 range는 숫자 간격을 나타내고 있음. `for ... of` 를 통해 1,2,3,4,5를 출력하고자 하고싶음

이 배열이 아닌 객체를 for..of를 이용해서 반복을 돌리고 싶으면 `Symbol.iterator`(특수내장심볼)를 이용해야함



```jsx
let range = {
    from : 1,
    to: 5,
    
    [Symbol.iterator](){
        this.current = this.from;
        return this
    },
  // 처음 current에 1이 들어옴
  // 그리고나서 next()가 실행됨
  // 조건에 맞게 돌아가는데
  	// 만약 끝값보다 작거나같으면 current를 1늘리고 반복을돌린다
  		// 언제까지?? 조건에 맞을때까지
 	// 아니면 반복을 끝내고 리턴해버린다
  // 이렇게하면 1,2,3,4,5가 나옴

    next() {
        if(this.current <= this.to) {
            return {done: false, value: this.current++}
        } else {
            return {done: true}
        }
    }
}
```

```jsx
for(let element of range) {
  alert(element) // 1, then 2, 3, 4, 5
}
```



1. `for..of`가 시작되자마자 `for..of`는 `Symbol.iterator`를 호출합니다(`Symbol.iterator`가 없으면 에러가 발생합니다). `Symbol.iterator`는 반드시 *이터레이터(iterator, 메서드 `next`가 있는 객체)* 를 반환해야 합니다.
2. 이후 `for..of`는 *반환된 객체(이터레이터)만*을 대상으로 동작합니다.
3. `for..of`에 다음 값이 필요하면, `for..of`는 이터레이터의 `next()`메서드를 호출합니다.
4. `next()`의 반환 값은 `{done: Boolean, value: any}`와 같은 형태이어야 합니다. `done=true`는 반복이 종료되었음을 의미합니다. `done=false`일땐 `value`에 다음 값이 저장됩니다.



range라는 변수엔 next라는 변수가 없지만, [Symbol.iterator]를 호출해서 next()로 반복에 사용될 값을 만들어냄

-----

### Array.from 메서드

유사배열을 진짜 배열로 만들어주는 메서드임

#### 유사배열

```jsx
{
  0:1,
  1:2,
  2:3,
  3:4,
  4:5,
  length:5
}
```

*유사 배열(array-like)* 은 `인덱스`와 `length` 프로퍼티가 있어서 배열처럼 보이는 객체임.



```jsx
Array.from({
  0:1,
  1:2,
  2:3,
  3:4,
  4:5,
  length:5
})

// [1,2,3,4,5]
```

이터러블이나 유사배열을 받아서 진짜 Array로 만들어주는 Array.from을 적용시켜주면

진짜 배열로 바뀜



> 배열을 콘솔로 찍어보면 유사객체의 형태와 비슷함



![스크린샷 2021-09-25 오후 1 47 33](https://user-images.githubusercontent.com/81910935/134758965-d52423eb-9d2f-48c4-9166-cfb808f17a5b.png)


위에 있는 유사객체와 굉장히 비슷한걸 알 수가 있음

